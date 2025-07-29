import { ImageSourcePropType, Text, View , StyleSheet } from "react-native";
import { Link } from "expo-router";
import * as ImagePicker from 'expo-image-picker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import CircleButton from "../components/CircleButton";
import ImageViewer from "../components/ImageViewer";
import EmojiPicker from "../components/EmojiPicker";
import EmojiList from "../components/EmojiList";
import EmojiSticker from "../components/EmojiSticker";
import { captureRef } from 'react-native-view-shot';
import { useState, useRef } from 'react';
const bolsonaro = require("@/assets/images/bolsonaro.jpeg")

export default function Index() {
  const [ status, requestPermission] = MediaLibrary.usePermissions();
  const [ selectedImage, setSelectedImage ] = useState<string | undefined>(undefined);
  const [ showAppOptions, setShowAppOptions ] = useState<boolean>(false);
  const [ isModalVisible, setIsModalVisible ] = useState<boolean>(false);
  const [ pickedEmoji, setPickedEmoji ] = useState<ImageSourcePropType | undefined>(undefined);
  const imageRef = useRef<View>(null);
  if (status === null){
    requestPermission();
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if( !result.canceled ){
      setSelectedImage( result.assets[0].uri )
      setShowAppOptions(true);
    }else{
      alert("Você não selecionou nenhuma imagem.")
    }
  }

  const onReset = () => {
    setShowAppOptions(false);
  };
  const onAddSticker = () => {
    setIsModalVisible(true);
  }
  const onModalClose = () => {
    setIsModalVisible(false);
  }
  const onSaveImageAsync = async () => {
    try{
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });
      await MediaLibrary.saveToLibraryAsync(localUri);
      if(localUri){
        alert("Salvo!");
      }
    }catch(e){
      console.log(e);
    }
  };


  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Site dedicado a apoiadores do bolsonaro e Palestina</Text>
        <Link href="/about" style={styles.button}>Sobre</Link>
        <View ref={imageRef} collapsable={false} style={ styles.imageContainer }>
            <ImageViewer imgSource={bolsonaro} selectedImage={selectedImage} />
            {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View> 
          { showAppOptions ? ( 
          <View style={ styles.optionsContainer }>
            <View style={ styles.optionsRow }>
              <IconButton icon="refresh" label="Reset" onPress={onReset}/>
              <CircleButton onPress={ onAddSticker } />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
            </View>  
          </View>  
        ) : ( 
          <View style={ styles.footerContainer }>
            <Button theme='primary' label='Escolha uma foto' onPress={pickImageAsync}/>
            <Button label='Usar essa foto' onPress={() => setShowAppOptions(true)}/>
          </View>
        )}
        <EmojiPicker isVisible={ isModalVisible } onClose={ onModalClose }>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        </EmojiPicker>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(244, 248, 211, 0.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    marginBottom: -100,
    paddingTop: 26,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
  text: {
    fontWeight: 700,
    fontSize: 20,
    color: '#333',
  },

  /*sdick: {
    fontSize: 40,
    fontWeight: 900,
    color: 'FFFF'
  },*/

  dion: {
    fontWeight: 700,
    fontSize: 50,
    color: '#e9c808',
  },

  button: {
    fontSize: 30,
    fontWeight: 900,
    color: '#214b8c',
    textDecorationLine: 'underline',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
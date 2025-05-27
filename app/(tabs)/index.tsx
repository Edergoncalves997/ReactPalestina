import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { Link } from 'expo-router';
import Button from '@/app/components/Button';
import ImageViewer from "../components/ImageViewer";
import * as ImagePicker from 'expo-image-picker';
import {useState} from 'react';
import IconButton from '@/app/components/IconButton';
import CircleButton from '@/app/components/CircleButton';
import EmojiPicker from '@/app/components/EmojiPicker';

const PlaceholderImage = require('@/assets/images/palestina.webp');
const emojis = [
  require('@/assets/images/emoji1.png'),
  require('@/assets/images/emoji2.png'),
  require('@/assets/images/emoji3.png'),
  require('@/assets/images/emoji4.png'),
  require('@/assets/images/emoji5.png'),
  require('@/assets/images/emoji6.png'),
];

export default function Index(){
const [selectedImage, setSelectedImagem] = useState<string |undefined>(undefined);
const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
const [selectedEmoji, setSelectedEmoji] = useState<any>(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if (!result.canceled) {
      setSelectedImagem(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('Você não selecionou nenhuma imagem.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // Implementar salvamento da imagem aqui
  };

  const onEmojiSelect = (emoji: any) => {
    setSelectedEmoji(emoji);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conheça O Bolsonaro</Text>
      <Text style={styles.introText}>
        Este aplicativo é dedicado a historia do melhor presidente que o Brasil ja teve, Jair Messias Bolsonaro
      </Text>
      <View style={styles.imageContainer}>
        <ImageViewer
            imgSource={PlaceholderImage} 
            selectedImage={selectedImage}
        />
        {selectedEmoji && (
          <View style={styles.selectedEmojiContainer}>
            <Image source={selectedEmoji} style={styles.selectedEmoji} />
          </View>
        )}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Refresh" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Escolher uma foto" onPress={pickImageAsync} />
          <Button label="Usar esta foto" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <View style={styles.emojiList}>
          {emojis.map((emoji, index) => (
            <Pressable
              key={index}
              onPress={() => onEmojiSelect(emoji)}
              style={styles.emojiContainer}
            >
              <Image source={emoji} style={styles.emojiImage} />
            </Pressable>
          ))}
        </View>
      </EmojiPicker>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8D3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 30,
    borderRadius: 10,
  },
  title: {
    color: '#003366',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  introText: {
    color: '#333',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  link: {
    backgroundColor: '#73C7C7',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  linkText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
  emojiList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  emojiContainer: {
    padding: 10,
  },
  emojiImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedEmojiContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -50}, {translateY: -50}],
    zIndex: 1,
  },
  selectedEmoji: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});


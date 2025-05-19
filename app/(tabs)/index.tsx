import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import Button from '@/app/components/Button';
import ImageViewer from "../components/ImageViewer";
import * as ImagePicker from 'expo-image-picker';
import {useState} from 'react';
const PlaceholderImage = require('@/assets/images/palestina.webp');

export default function Index(){
const [selectedImage, setSelectedImagem] = useState<string |undefined>(undefined);

  const pickImageAsync = async() =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });
  

  if (!result.canceled) {
    setSelectedImagem(result.assets[0].uri);
  } else {
    alert('You did not select any image. ');
  }
}

  return (
    <View style={styles.container}>
      <ImageViewer
        imgSource={PlaceholderImage} selectedImage={selectedImage}/>
      <Text style={styles.title}>Conheça O Bolsonaro</Text>
      <Text style={styles.introText}>
        Este aplicativo é dedicado a historia do melhor presidente que o Brasil ja teve, Jair Messias Bolsonaro
      </Text>
      
      <Button label = 'Sobre a Palestina'/>
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
});
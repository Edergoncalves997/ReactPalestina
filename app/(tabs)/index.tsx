import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import Button from '@/app/components/Button';
import ImageViewer from "../components/ImageViewer";

const PlaceholderImage = require('@/assets/images/bolsonaro.jpeg');

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageViewer
        imgSource={PlaceholderImage}
      />
      <Text style={styles.title}>Conheça a Palestina</Text>
      <Text style={styles.introText}>
        Este aplicativo é dedicado à história, cultura e atualidades do povo palestino. 
        Explore informações sobre territórios, conflitos e iniciativas de paz nesta 
        região tão significativa para a humanidade.
      </Text>
      
      <Button label = 'Sobre a Palestina' url = 'http://localhost:8081/about'/>
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
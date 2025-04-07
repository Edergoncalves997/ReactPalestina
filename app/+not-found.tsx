import { View, ImageBackground, StyleSheet } from "react-native";
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <ImageBackground 
        source={require('../assets/images/morsa.png')} 
        style={styles.container}
      >
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 28,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

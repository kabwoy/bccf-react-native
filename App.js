import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import Login from './screens/Login';
import LottieView from "lottie-react-native"

export default function App() {
  return (
    //<LottieView source={require("./assets/walk.json")} autoPlay loop/>
    <Login/>
    // <WelcomeScreen/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

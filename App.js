import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import Login from './screens/Login';
import LottieView from "lottie-react-native"
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'

const Stack = createNativeStackNavigator()
const StackNavigator = () =>(
  <Stack.Navigator>
    <Stack.Screen
    options={{headerShown:false}}
     name='home' 
     component={WelcomeScreen}  />
    <Stack.Screen name='login' component={Login}  />
  </Stack.Navigator>
)
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
    // </LottieView>
    
    //<WelcomeScreen/>
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

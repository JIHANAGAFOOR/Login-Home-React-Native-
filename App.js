import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './src/screens/Login'
import Home from './src/screens/Home'
import Details from './src/screens/Details'
const Stack = createStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
   <Stack.Navigator >
   <Stack.Screen name="Login" component={Login} options={{headerShown : false}}/>
   <Stack.Screen name="Home" component={Home} />
   <Stack.Screen name="Details" component={Details} />
   </Stack.Navigator>
   </NavigationContainer>
  
  );
}



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import Login from './Login';
import Home from './Home';
import Messanger from './Messanger';
import TopBarNavigater from './TopBarNavigater';
import Details01 from './Details01';
import Details02 from './Details02';
import Profile from './Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Details03 from './Details03';
import Details04 from './Details04';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    
      <NavigationContainer>
       
        <Stack.Navigator initialRouteName='SplashScreen'>
          <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />

          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />

          <Stack.Screen name='TopBarNavigater' component={TopBarNavigater} options={{ headerShown: false }} />

          <Stack.Screen name='Details01' component={Details01} options={{ headerShown: true, headerTitle: "", }} />
          <Stack.Screen name='Details02' component={Details02} options={{ headerShown: true, headerTitle: "", }} />
          <Stack.Screen name='Details03' component={Details03} options={{ headerShown: true, headerTitle: "", }} />

          <Stack.Screen name='Details04' component={Details04} options={{ headerShown: true, headerTitle: "", }} />

          <Stack.Screen name='Messanger' component={Messanger} options={{ headerShown: false }} />

          <Stack.Screen name='Profile' component={Profile} options={{ headerShown: true, headerTitle: "", }} />



        </Stack.Navigator>
       
      </NavigationContainer>
    
  );
};

export default App;
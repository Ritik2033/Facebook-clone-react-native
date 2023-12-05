import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import Login from './Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='SplashScreen'>
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}}/>

      <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>

      

    </Stack.Navigator>
   </NavigationContainer>
  );
};

export default App;
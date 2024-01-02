import React, { useState } from 'react';
import apiService from './services/api';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {
  Alert,
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('All fields are required');
    } else {
      try {
        
        const response = await apiService.login('/login', {
          username: username,
          password: password,
        });

        

        if (response.token) {
          //Alert.alert('Login Successfully');
          await AsyncStorage.setItem('userToken', response.token);
          //Alert.alert(response.token);
          navigation.replace("TopBarNavigater");
        } else {
          Alert.alert('Invalid username and password');
        }
      } catch (error) {
        console.error('Error during login:', error);
        Alert.alert('Error during login. Please try again.');
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset={-100} enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
      
        <SafeAreaView style={styles.container}>

       
          <View style={styles.logoContainer}>
            <View>
              
              <Image
                source={require('../clone/images/facebooklogo.webp')}
                style={styles.facebookImage}
              />

            </View>
            
            <View style={styles.inputfiled}>
              <TextInput
                style={styles.input}
                placeholder="Mobile number or email"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
              <TouchableOpacity style={[styles.button, styles.buttons]} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log in</Text>
              </TouchableOpacity>
              <Text style={styles.forgatelink}>Forgot password?</Text>
            </View>
          </View>
          
          <View style={styles.footer}>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate("Details01")
                }}
              >
                <Text style={styles.buttontext}>Create new account</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.name}>
              <Image source={require('../clone/images/Meta_Symbol.png')} style={styles.meta} />
              <Text style={styles.title}>Meta</Text>
            </View>
          </View>
        </SafeAreaView>

        
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#0668E1",
    height: 50,
    alignItems: "center",
    justifyContent: "center"

  },

  forgatelink: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 17,
    color: "black",
    fontWeight: "500"
  },

  container: {
    flex: 1,
    backgroundColor: '#F2F4F4',
    justifyContent: 'center',
    alignItems: 'center',

  },
  logoContainer: {
    alignItems: 'center',
  },
  facebookImage: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,

    marginBottom: 100,
  },
  footer: {
   position:"absolute",
   bottom:0,
    alignItems: 'center',
  },
  description: {
    fontSize: 20,
    fontWeight: '700',
  },
  name: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0668E1',
  },
  meta: {
    width: 50,
    height: 50,
  },

  button: {
    borderWidth: 2,
    paddingHorizontal: 90,
    paddingVertical: 7,
    borderColor: '#0668E1',
    borderRadius: 25,
    marginVertical: 5,
  },

  buttontext: {
    color: '#0668E1',
    fontSize: 20,
  },
  input: {
    width: 380,
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 15,
    padding: 8,
    fontSize: 18,
    fontWeight: "500"

  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center"
  },
});

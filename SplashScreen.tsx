import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
export default function SplashScreen({navigation}) {

  useEffect(() => {
   
    const timeout = setTimeout(() => {
      navigation.push("Login");
    }, 2000);

    
    return () => clearTimeout(timeout);
  },); 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../clone/images/facebooklogo.webp')} style={styles.facebookImage}/>
      </View>

      <View style={styles.footer}>
        <Text style={styles.description}>From</Text>

        <View style={styles.name}>
          <Image source={require('../clone/images/Meta_Symbol.png')} style={styles.meta}/>
          <Text style={styles.title}>Meta</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F4",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  facebookImage: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  footer: {
    position: "absolute",
    bottom: 32, 
    alignItems: "center",
  },
  description: {
    fontSize: 20,
    fontWeight: "700",
  },
  name: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:12
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0668E1",
  },
  meta: {
    width: 50,
    height: 50,
  },
});

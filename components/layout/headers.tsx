import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
//import Icon from 'react-native-vector-icons/FontAwesome5';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
export default function Headers({ navigation }) {
  const handlemessanger = async () => {
    navigation.push("Messanger");
    //Alert.alert("hello")
  }

  const handleplus = async () =>{
    navigation.push('Messanger')
  }
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Facebook</Text>
        </View>
        <View style={styles.items}>
          <TouchableOpacity style={styles.itemslogo}

            onPress={handleplus}
          >
            <Image source={require('../../images/Plus.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemslogo}

            onPress={() => {
              //Linking.openURL('https://reactnative.dev/');
            }}
          >
            <Image source={require('../../images/glass.png')} style={{ width: 50, height: 50 }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemslogo}

            onPress={handlemessanger}
          >
            <Image source={require('../../images/messenger_3.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>




        </View>
      </View>
      <View>

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 2
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#0866FF",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  items: {
    flexDirection: "row",
    alignItems: "center",
  },

  meta: {

  },
  itemslogo: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#D5DBDB",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginHorizontal: 4

  }
})
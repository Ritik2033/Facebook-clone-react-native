import { Image,  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import React from 'react'
import { Button } from 'react-native-paper'
import Request from '../clone/components/requests/Request'
import { ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default function Contact() {
  return (
    <ScrollView>
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <Text style={styles.title}>Friends</Text>
        <TouchableOpacity style={styles.itemslogo}

          onPress={() => {
            //Linking.openURL('https://reactnative.dev/');
          }}
        >
          <Image source={require('../clone/images/glass.png')} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.buttons}><Text style={styles.text}>Suggestions</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttons}><Text style={styles.text}>Your Friends</Text></TouchableOpacity>
      </View>

      <Request/>
    </View>
    <View style={styles.footer}>
      <ActivityIndicator animating={true} color={"#BDBDBD"} size={'large'} />
    </View>
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  itemslogo: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#D5DBDB",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginHorizontal: 4

  },
  conatiner: {
    paddingHorizontal: 8,
    flex: 1
  },
  header: {
   
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black"
  },
  menu:{
    flexDirection: "row",
    gap:10,
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:"#BDBDBD"
  },

  buttons:{
    backgroundColor:"#BDBDBD",
    paddingHorizontal:13,
    paddingVertical:7,
    borderRadius:15,
    marginBottom:10
  },
  text:{
    color:"black",
    fontWeight:"bold"
  },
  footer:{
    marginVertical:20
  }
})
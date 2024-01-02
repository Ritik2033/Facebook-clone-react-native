import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';

export default function Details01({navigation}) {
  const [ftext, setfText] = React.useState("");
  const [ltext, setlText] = React.useState("");
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>What's your name ?</Text>
        <Text style={styles.sub_title}>Enter the name you use in real life</Text>

      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="First Name"
          mode="outlined"
          
          value={ftext}
          onChangeText={ftext => setfText(ftext)}

          style={styles.input}
        />
        <TextInput
          label="Last Name"
          mode="outlined"
          value={ltext}
          onChangeText={ltext => setlText(ltext)}
          style={styles.input}
        />
      </View>
      <View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Details02")}>
        <Text style={styles.text_button}>Next</Text>
      </TouchableOpacity>

      </View>
      <View style={styles.footer}>
        <Text style={styles.footer_text}>Already have an account ?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8
  },
  title: {
    fontSize: 25,
    paddingVertical: 8,
    fontWeight: "bold",
    color: "black"
  },
  sub_title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black"
  },
  footer_text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#0866FF"
  },
  footer: {
    flex: 1,
    width: "100%",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",

    alignItems: "center",
    marginVertical: 20



  },
  inputContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:30
  },

  input:{
    paddingHorizontal:10,
    width:"45%",
    color:"black"
  },
  button:{
    //flex:1,
    alignItems:"center",
    justifyContent:"center",
    height:45,
    borderRadius:20,
    backgroundColor:"#0866FF"
  },
  text_button:{
    color:"#fff",
    fontSize:20,
    fontWeight:"bold"
  }
})
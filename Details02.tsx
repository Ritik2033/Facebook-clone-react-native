import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

export default function Details02({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [birthday, setBirthday] = useState('');

  const handleDateChange = (selectedDate) => {
    setOpen(false);
    setDate(selectedDate);
    setBirthday(selectedDate.toISOString().split('T')[0]); 
  };

  const handleTextInputPress = () => {
    setOpen(true);
  };

  

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>What's your birthday?</Text>
        <Text style={styles.subTitle}>
          Choose your date of birth. You can always make this private later.
        </Text>
      </View>

      {/* Open DatePicker when TextInput is pressed */}
      <TouchableOpacity style={styles.inputContainer} onPress={handleTextInputPress}>
        <TextInput 
          label="Select Birthday"
          value={birthday}
          editable={false}

          
          
          // Prevent manual editing
        />
      </TouchableOpacity>

      {/* Display DatePicker */}
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={handleDateChange}
        onCancel={() => setOpen(false)}
      />

      <View>
        {/* Replace TouchableOpacity with onPress on TextInput */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Details03")}>
          <Text style={styles.textButton}>Next</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color:"black"
  },
  subTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight:"bold",
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
   
  },
  button: {
    backgroundColor: '#0866FF',
    padding: 16,
    alignItems: 'center',
    borderRadius: 25,
    
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
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
  footerText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#0866FF"
  },
});

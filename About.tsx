import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import AddPost from './components/home/AddPost'
import { ActivityIndicator } from 'react-native-paper'
//import { ScrollView } from 'react-native-gesture-handler'

export default function About() {
  return (
    <ScrollView>
    <View>
      <AddPost/>
      
    </View>
    <View style={{marginVertical:10}}>
          <ActivityIndicator animating={true} color={"#BDBDBD"} size={'large'} />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
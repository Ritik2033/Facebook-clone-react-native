import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Detailsprofile from './components/profile/detailsprofile'
import AddPost from './components/home/AddPost'
import Containe from './components/profile/containe'

export default function Profile({navigation}) {
  return (
    <View>
        <ScrollView>

           <Detailsprofile/>
            <Containe />
           <AddPost/>

        </ScrollView>
     
    </View>
  )
}

const styles = StyleSheet.create({})
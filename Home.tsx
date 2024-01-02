import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from './components/layout/headers';
import Menu from './components/layout/Menu';
import Post from './components/home/Post';
import Store from './components/home/Store';
import AddPost from './components/home/AddPost';
import { ActivityIndicator } from 'react-native-paper';
const Home = ({navigation}) => {
  return (
    <SafeAreaView>

      


     
      <ScrollView>


        <Post navigation={navigation}/>
        <Store />
        <AddPost />
        

        <View style={{marginVertical:10}}>
          <ActivityIndicator animating={true} color={"#BDBDBD"} size={'large'} />
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
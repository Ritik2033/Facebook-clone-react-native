import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Menu() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.item}> 
                <TouchableOpacity  style={styles.button}

                    onPress={() => {
                        //Linking.openURL('https://reactnative.dev/');
                    }}
                >
                    <Image source={require('../../images/home.jpg')} style={{ width: 35, height: 35 }} />
                </TouchableOpacity>

                <TouchableOpacity

                    onPress={() => {
                        //Linking.openURL('https://reactnative.dev/');
                    }}
                >
                    <Image source={require('../../images/tv.png')} style={{ width: 35, height: 35 }} />
                </TouchableOpacity>

                <TouchableOpacity

                    onPress={() => {
                        //Linking.openURL('https://reactnative.dev/');
                    }}
                >
                    <Image source={require('../../images/request.png')} style={{ width: 35, height: 35 }} />
                </TouchableOpacity>

                <TouchableOpacity

                    onPress={() => {
                        //Linking.openURL('https://reactnative.dev/');
                    }}
                >
                    <Image source={require('../../images/store.png')} style={{ width: 35, height: 35 }} />
                </TouchableOpacity>

                <TouchableOpacity

                    onPress={() => {
                        //Linking.openURL('https://reactnative.dev/');
                    }}
                >
                    <Image source={require('../../images/bell.png')} style={{ width: 35, height: 35 }} />
                </TouchableOpacity>

                <TouchableOpacity

                    onPress={() => {
                        //Linking.openURL('https://reactnative.dev/');
                    }}
                >
                    <Image source={require('../../images/line.jpg')} style={{ width: 35, height: 35 }} />
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:8,
        paddingVertical:8,
        borderBottomWidth:0.5,
        borderColor:'black'
    },
    item:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-between",
        textAlign:'center'
    },
    button:{
       
       
    }
})
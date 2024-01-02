import { Image, Keyboard, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Post({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.item}>

                <TouchableOpacity onPress={() => navigation.push("Profile")}>
               
                    <Image source={require('../../images/profilee.jpg')} style={styles.image} />
                </TouchableOpacity>

                    <TextInput placeholder='Write something here...' keyboardType='ascii-capable' style={styles.post}></TextInput>

                    <Image source={require('../../images/folder.png')} style={styles.imagee} />
               
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginTop: 8
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    post: {
        height: 60,
        width: 300,
        borderWidth: 0.25,
        color: 'black',
        fontSize: 20,
        fontWeight: "600",
        borderRadius: 20
    },
    imagee: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
    },
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import apiService from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons'
export default function Sidebar() {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiService.fetchData('users');
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <View>
            <View style={styles.searchbar}>

                <TouchableOpacity style={styles.itemslogo}

                    onPress={() => {
                        //Linking.openURL('https://reactnative.dev/');
                    }}
                >
                    <Image source={require('../../images/glass.png')} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>

                <TextInput placeholder='Search' keyboardType='ascii-capable' style={styles.post}></TextInput>


            </View>
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {userData && userData.data.map((item) => (
                        <View key={item.id} style={styles.chats}>
                            <Image source={{ uri: item.avatar }} style={styles.image} />
                            <Text style={styles.first_name}>{item.first_name}</Text>
                            <Text style={styles.first_name}>{item.last_name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.list}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    {userData && userData.data.map((item) => (
                        <View key={item.id} style={styles.chatslist}>

                            <View style={styles.chats_list}>
                                <Image source={{ uri: item.avatar }} style={styles.image} />
                                <View>
                                    <Text style={styles.first_name_chats}>{item.first_name}{item.last_name}</Text>
                                    <Text> You:Hii Nov 28</Text>

                                </View>

                            </View>
                            <View>
                                <Icon name='check-circle' size={15} />
                            </View>

                        </View>
                    ))}
                </ScrollView>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    itemslogo: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: "#D5DBDB",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        //marginHorizontal: 4

    },
    post: {
        height: 60,
        width: 300,
        //borderWidth: 0.25,
        color: 'black',
        fontSize: 16,
        fontWeight: "600",
        //borderRadius: 20
    },
    searchbar: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
        gap: 5,
        borderWidth: 0.5,
        borderRadius: 20,

        marginHorizontal: 20,
        marginVertical: 20,
        height: 40,
        backgroundColor: "#D5DBDB",
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 70 / 2,

    },
    chats: {
        paddingHorizontal: 8,
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        alignItems: "center"
    },
    first_name: {
        fontWeight: "800",
        color: "black"
    },
    chatslist: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    chats_list: {
        flex: 1,
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    },
    first_name_chats: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
    },
    list:{
        paddingHorizontal:8,
        paddingVertical:8,
    }
})
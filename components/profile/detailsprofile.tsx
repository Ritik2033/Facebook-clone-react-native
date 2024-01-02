import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef } from 'react';

import { Image } from 'react-native'
//import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
//import { Modal } from 'react-native-paper';
//import Modal from 'react-native-modal';
import Modal from "react-native-modal";
export default function Detailsprofile() {

    const [isModalVisible, setModalVisible] = useState(false);
    const modalRef = useRef(null);


    return (
        <View>
            <View style={{ borderBlockColor: "#D8D5DB", borderBottomWidth: 10, marginBottom: 5, paddingBottom: 10 }}>
                <View>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Image source={require('../../images/profilee.jpg')} style={styles.image} />
                    </TouchableOpacity>
                </View>

                <View style={styles.profileContainer}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Image source={require('../../images/profilee.jpg')} style={styles.profileimage} />
                    </TouchableOpacity>
                    <View >
                        <Icon name="camera" size={25} color="black" style={styles.icons}></Icon>
                    </View>
                </View>

                <View style={styles.name}>
                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>Rohit Sharma</Text>

                    <View style={{ flexDirection: "row", gap: 5 }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>712</Text>
                        <Text style={{ fontSize: 16, fontWeight: "400", color: "black" }}>Friends</Text>
                    </View>


                </View>

                <View style={styles.actionsContainer}>
                    <TouchableOpacity>

                        <View style={styles.story}>
                            <Icon name="plus" size={18} color="#ffffff"></Icon>
                            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" }}>Add to Story</Text>
                        </View>



                    </TouchableOpacity>

                    <TouchableOpacity>

                        <View style={styles.story1}>
                            <Icon name="pencil-alt" size={18} color="black"></Icon>

                            <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>Edit profile</Text>
                        </View>



                    </TouchableOpacity>

                    <TouchableOpacity>

                        <View style={styles.story2}>
                            <Icon name="ellipsis-h" size={18} color="#000" />

                        </View>



                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <View style={{ width: 50, height: 50, backgroundColor: "#0165E1", borderRadius: 50 / 2, justifyContent: "center", alignItems: "center" }}>

                        <Icon name="shield-alt" size={30} color="#fff" />



                    </View>

                    <View>
                        <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>You locked your profile</Text>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#0165E1" }}>Lear More</Text>
                    </View>
                </View>




            </View>

            <View>
                <Modal isVisible={isModalVisible} style={{ margin: 0 }} onBackButtonPress={() => setModalVisible(false)}
                    onBackdropPress={() => setModalVisible(false)}
                    ref={modalRef}>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{ backgroundColor: '#fff', padding: 16, height: 400, borderTopRightRadius: 25, borderTopLeftRadius: 25 }}>

                            <View>
                                <View style={{ justifyContent: "center", alignItems: "center", }}>

                                    <View style={{ width: 100, borderWidth: 3, borderColor: "#646262", borderRadius: 50 }}>

                                    </View>

                                </View>

                                <View>

                                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                                        <View style={{ width: 50, height: 50, backgroundColor: "#D8D5DB", borderRadius: 50 / 2, justifyContent: "center", alignItems: "center", marginVertical: 10 }}>

                                            <Icon name="image" size={30} color="#000000" />





                                        </View>

                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>View profile cover</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                                        <View style={{ width: 50, height: 50, backgroundColor: "#D8D5DB", borderRadius: 50 / 2, justifyContent: "center", alignItems: "center", marginVertical: 10 }}>

                                            <Icon name="user-circle" size={30} color="#000000" />





                                        </View>

                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>Create avatar cover photo</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                                        <View style={{ width: 50, height: 50, backgroundColor: "#D8D5DB", borderRadius: 50 / 2, justifyContent: "center", alignItems: "center", marginVertical: 10 }}>

                                            <Icon name="upload" size={30} color="#000000" />





                                        </View>

                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>Upload photo</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                                        <View style={{ width: 50, height: 50, backgroundColor: "#D8D5DB", borderRadius: 50 / 2, justifyContent: "center", alignItems: "center", marginVertical: 10 }}>

                                            <Icon name="facebook" size={30} color="#000000" />





                                        </View>

                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>Select photo on facebook</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                                        <View style={{ width: 50, height: 50, backgroundColor: "#D8D5DB", borderRadius: 50 / 2, justifyContent: "center", alignItems: "center", marginVertical: 10 }}>

                                            <Icon name="th" size={30} color="#000000" />





                                        </View>

                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>Create cover collage</Text>
                                        </View>

                                    </View>

                                </View>

                            </View>
                        </View>
                    </View>
                </Modal>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 20
    },
    footer: {
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 10,
        paddingHorizontal: 20,
        gap: 10
    },
    image: {
        height: 250,
        //width:400
    },
    profileContainer: {
        alignItems: 'center',
        //marginTop: -100,
    },
    profileimage: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        borderWidth: 6,
        borderColor: "#ffffff",
        marginHorizontal: 10,
        marginTop: -100
    },
    icons: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        //backgroundColor:"#D8D5DB",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
        marginLeft: 100,
        marginTop: -30
    },
    name: {
        paddingHorizontal: 10,
        marginTop: -30,
    },
    story: {
        //width:"35%",
        flexDirection: "row",
        gap: 5, paddingVertical: 7,
        paddingHorizontal: 13,
        backgroundColor: "#0165E1",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    story1: {
        //width:"35%",
        flexDirection: "row",
        gap: 5, paddingVertical: 7,
        paddingHorizontal: 13,
        backgroundColor: "#D8D5DB",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    story2: {
        //width:"15%",
        flexDirection: "row",
        gap: 5, paddingVertical: 7,
        paddingHorizontal: 13,
        backgroundColor: "#D8D5DB",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    }
})
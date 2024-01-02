import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal/dist/modal';
import { TextInput } from 'react-native-paper';

export default function Details03({ navigation }) {
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>What's your mobile number?</Text>
                <Text style={styles.subTitle}>
                    Enter the mobile number where you can be contacted. No one will see this on your profile.
                </Text>
            </View>

            <TextInput
                style={styles.inputContainer}
                label="Enter Number"
                value={number}
                onChangeText={(number) => setNumber(number)}
                mode="outlined"
                keyboardType='decimal-pad'
            />

            <TextInput
                style={styles.inputContainer}
                label="Enter Password"
                value={password}
                onChangeText={(password) => setPassword(password)}
                mode="outlined"
                keyboardType='ascii-capable'
                secureTextEntry={true} // Mask the password
            />

            <TextInput
                style={styles.inputContainer}
                label="Confirm Password"
                value={confirm}
                onChangeText={(confirm) => setConfirm(confirm)}
                mode="outlined"
                keyboardType='ascii-capable'
                secureTextEntry={true} // Mask the password
            />

            {(password !== confirm && (password !== '' && confirm !== '')) ? <Text style={{ fontSize: 16, fontWeight: 'bold', color: "red" }}>Passwords do not match</Text> : (password === confirm && password !== '' && confirm !== '') ? <Text style={{ fontSize: 16, fontWeight: 'bold', color: "green" }}>Conform Passwords</Text> : null}

            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Details04")}>
                    <Text style={styles.textButton}>Save</Text>
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
        color: "black"
    },
    subTitle: {
        fontSize: 18,
        color: 'black',
        fontWeight: "bold",
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

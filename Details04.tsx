import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OTPInputView from 'react-native-otp-input';
import Modal from 'react-native-modal';
import TopBarNavigater from './TopBarNavigater';

export default function Details04({navigation}) {
  const [otp, setOtp] = useState('');
  const [generatedPin, setGeneratedPin] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isconformModalVisible, setconformModalVisible] = useState(false);
  const [iswrongModalVisible, setwrongModalVisible] = useState(false);
  const modalRef = useRef(null);
  const conformModalRef = useRef(null); // Separate ref for conform modal
  const wrongModalRef = useRef(null);
  const [pin, setPin] = useState('');

  const handleOTPChange = (code) => {
    setOtp(code);

    verify();
  };

  const generatePin = () => {
    const randomPin = Math.floor(1000 + Math.random() * 900000);
    return randomPin.toString();
  };

  useEffect(() => {
    const newPin = generatePin();
    setGeneratedPin(newPin);

    const intervalId = setTimeout(() => {
      setModalVisible(true);
    }, 1000);

    // Cleanup the interval when the component unmounts or isModalVisible changes
    return () => clearTimeout(intervalId);
  }, []);

  const verify = () => {
    if (pin === generatedPin) {
      console.log("Verification successful");
      setconformModalVisible(true)
     
      
      // Add your logic for successful verification
    } else {
      console.log("Verification failed");
      setwrongModalVisible(true)
      // Add your logic for failed verification
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Icon name="shield-alt" size={120} color="white" />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>Account Verification</Text>
          <Text style={styles.subtitle}>Please Enter 4-digit code sent to your number</Text>
          <Text style={styles.number}>XXX-XXX-3808</Text>
        </View>

        <OTPInputView
          style={{ width: '80%', height: 100 }}
          pinCount={6}
          code={otp}
          onCodeChanged={handleOTPChange}
          autoFocusOnLoad
          codeInputFieldStyle={{
            width: 40,
            height: 45,
            borderWidth: 2,
          }}
          codeInputHighlightStyle={{
            borderColor: 'black',
          }}
          onCodeFilled={(code) => {
            setPin(code); // Update pin state when OTP is filled
            console.log(code);
          }}
        />

        <TouchableOpacity onPress={verify}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 15,
            backgroundColor: '#0165E1',
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 15,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>Verify</Text>
          <Icon name="check-circle" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View>
        <Modal isVisible={isModalVisible} ref={modalRef} style={{ margin: 0 }} >
          <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <View style={{ backgroundColor: '#fff', padding: 16, height: 150, borderRadius: 5 }}>
              <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 50, fontWeight: "bold", color: "black" }}>{generatedPin}</Text>
              </View>

              <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', gap: 50 }}>
                <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                  <TouchableOpacity style={{ display: "flex", flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center" }}>
                    <Icon name='copy' size={25} />
                    <Text style={{ color: "black", fontSize: 18 }}>Copy</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ display: "flex", flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center" }} onPress={() => setModalVisible(false)}>
                    <Icon name='times' size={25} />
                    <Text style={{ color: "black", fontSize: 18 }}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>


      <View>
        <View>

          <Modal isVisible={isconformModalVisible} ref={conformModalRef} style={{ margin: 10 }} >
            <TouchableOpacity onPress={() =>navigation.navigate('TopBarNavigater')}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
              <View style={{ backgroundColor: '#fff', padding: 16, height: 300, width: 200, borderRadius: 5 }}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>

                  <View style={styles.confirm}>
                    <Icon name="check-circle" size={100} color="white" />

                  </View>

                  <View>
                    <Text style={{ color: "green", fontSize: 25, fontWeight: "bold", marginTop: 20 }}>Verify</Text>
                  </View>
                </View>

              </View>
            </View>
            </TouchableOpacity>
          </Modal>

        </View>
        <View>

          <Modal isVisible={iswrongModalVisible} ref={wrongModalRef} style={{ margin: 10 }} >
          <TouchableOpacity onPress={() =>setwrongModalVisible(false)}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
              <View style={{ backgroundColor: '#fff', padding: 16, height: 300, width: 200, borderRadius: 15 }}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>

                  <View style={styles.wronge}>
                    <Icon name="times-circle" size={100} color="white" />

                  </View>

                  <View>
                    <Text style={{ color: "red", fontSize: 25, fontWeight: "bold", marginTop: 20 }}>wrong</Text>
                  </View>
                </View>

              </View>
            </View>
            </TouchableOpacity>
          </Modal>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  icon: {
    marginVertical: 25,
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
    backgroundColor: '#0165E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginHorizontal: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0165E1',
  },
  subtitle: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
  number: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  confirm: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  wronge: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  }
});

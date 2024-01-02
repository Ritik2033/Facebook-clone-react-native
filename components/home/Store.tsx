import React, { useEffect, useState } from 'react';
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import apiService from '../../services/api';
import RunningProgressBar from './Progressbar';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Store() {
  const [userData, setUserData] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [delayTime] = useState(5000);

  const [iconPosition1] = useState(new Animated.Value(0));
  const [iconPosition2] = useState(new Animated.Value(0));
  const [iconPosition3] = useState(new Animated.Value(0));
  const [iconPosition4] = useState(new Animated.Value(0));

  const handlePress = (iconPosition) => {
    const moveUpAnimation = Animated.timing(iconPosition, {
      toValue: -400,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    const moveDownAnimation = Animated.timing(iconPosition, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    Animated.sequence([moveUpAnimation, moveDownAnimation]).start();
  };

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

  useEffect(() => {
    const showNextModal = () => {
      if (currentIndex < userData?.data.length - 1 && isModalVisible) {
        setTimeout(() => {
          setModalVisible(false);
          setSelectedImageIndex(null);

          // Automatically open the modal for the next index after the delay
          const nextIndex = currentIndex + 1;
          setCurrentIndex(nextIndex);
          toggleModal(nextIndex);
        }, delayTime);
      } else {
        setTimeout(() => {
          setModalVisible(false);
          setSelectedImageIndex(null);
        }, delayTime);
      }
    };

    if (isModalVisible) {
      showNextModal();
    }
  }, [currentIndex, isModalVisible, userData, delayTime]);

  const toggleModal = (index) => {
    setSelectedImageIndex(index);
    setModalVisible(!isModalVisible);
  };

  const closeAndMoveToNext = () => {
    setModalVisible(false);
    setSelectedImageIndex(null);
    // Stop the loop by setting isModalVisible to false
  };
    return (
        <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={-100} enabled>
            <SafeAreaView style={styles.flexxcontainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {/* Create Story */}
                    <View style={styles.flexcontainer}>
                        <TouchableOpacity onPress={() => toggleModal(-1)}>
                            {/* Using -1 as a special index for the "Create Story" card */}
                            <View style={styles.container}>
                                <Image source={require('../../images/profilee.jpg')} style={styles.image} />
                                <Image source={require('../../images/add.png')} style={styles.addicon} />
                                <Text style={styles.text}>Create story</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* User Data */}
                    {userData &&
                        userData.data.map((item, index) => (
                            <View key={item.id} style={styles.flexcontainer}>
                                <TouchableOpacity onPress={() => toggleModal(index)}>
                                    <View style={styles.container}>
                                        <ImageBackground source={{ uri: item.avatar }} resizeMode="cover" style={styles.bimage}>
                                            <View>
                                                <Image source={{ uri: item.avatar }} style={styles.profileimage} />
                                                <Text style={[styles.text, styles.name]}>{item.first_name}</Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                </TouchableOpacity>

                                {/* Modal */}
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={isModalVisible && selectedImageIndex === index}
                                    onRequestClose={() => toggleModal(index)}
                                >

                                    <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <ImageBackground source={{ uri: item.avatar }} resizeMode="cover" style={styles.bbimage}>
                                                <RunningProgressBar />
                                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Image source={{ uri: item.avatar }} style={styles.profileimage} />
                                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>
                                                            {item.first_name} {item.last_name}
                                                        </Text>
                                                    </View>
                                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                                                        <Icon name="more-horiz" size={30} />
                                                        <TouchableOpacity onPress={closeAndMoveToNext}>
                                                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000000' }}>X</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={{ position: 'absolute', bottom: 0, padding: 10 }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                                                        <TextInput
                                                            style={styles.input}
                                                            placeholder="send message"
                                                            placeholderTextColor="#ffffff"
                                                        />
                                                        <TouchableOpacity onPress={() => handlePress(iconPosition1)}>
                                                            <Animated.View style={{ transform: [{ translateY: iconPosition1 }] }}>
                                                                <View style={[styles.circle, styles.heart]}>
                                                                    <Icon name="favorite" size={25} color="white" />
                                                                </View>
                                                            </Animated.View>
                                                        </TouchableOpacity>

                                                        <TouchableOpacity onPress={() => handlePress(iconPosition2)}>
                                                            <Animated.View style={{ transform: [{ translateY: iconPosition2 }] }}>
                                                                <View style={[styles.circle, styles.thumb]}>
                                                                    <Icon name="thumb-up" size={30} color="white" />
                                                                </View>
                                                            </Animated.View>
                                                        </TouchableOpacity>

                                                        <TouchableOpacity onPress={() => handlePress(iconPosition3)}>
                                                            <Animated.View style={{ transform: [{ translateY: iconPosition3 }] }}>
                                                                <Text style={styles.emoji}>😊</Text>
                                                            </Animated.View>
                                                        </TouchableOpacity>
                                                        
                                                        <TouchableOpacity onPress={() => handlePress(iconPosition4)}>
                                                            <Animated.View style={{ transform: [{ translateY: iconPosition4 }] }}>
                                                                <Text style={styles.emoji}>😭</Text>
                                                            </Animated.View>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </ImageBackground>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                        ))}
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    name: {
        marginTop: 100,
    },
    profileimage: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        margin: 3,
        borderWidth: 3,
        borderColor: 'blue',
    },
    bimage: {
        width: 90,
        height: 180,
        borderRadius: 15,
    },
    bbimage: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    image: {
        width: 90,
        height: 120,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    addicon: {
        width: 30,
        height: 30,
        marginTop: -15,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        height: 'auto',
        borderWidth: 0.5,
        borderRadius: 15,
    },
    text: {
        fontSize: 17,
        fontWeight: '600',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#000',
        marginBottom: 5,
    },
    flexcontainer: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
    },
    flexxcontainer: {
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderColor: '#C0C0C0',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderColor: '#ffffff',
        fontSize: 15,
        color: '#ffffff',
        borderWidth: 1,
        padding: 10,
        borderRadius: 25,
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heart: {
        backgroundColor: 'red',
    },
    thumb: {
        backgroundColor: '#4267B2',
    },
    emoji: {
        fontSize: 30,
        color: 'green',
    },
});
function setCurrentIndex(nextIndex: number) {
    throw new Error('Function not implemented.');
}


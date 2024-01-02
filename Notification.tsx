import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import apiService from './services/api';

export default function Notification() {
  const [userData, setUserData] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.fetchData('users?delay=3');
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Notifications</Text>
          <TouchableOpacity style={styles.itemslogo}

            onPress={() => {
              //Linking.openURL('https://reactnative.dev/');
            }}
          >
            <Image source={require('../clone/images/glass.png')} style={{ width: 50, height: 50 }} />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Text style={styles.new}>New</Text>
          </View>
          <View style={styles.new_notification}>
            <View>
              <Image source={require('../clone/images/facebooklogo.webp')} style={styles.logo} />
              <Icon name="security" size={25} color="#FFFFFF" style={styles.icon} />
            </View>
            <View style={{ width: "70%" }}>

              <Text style={{ color: "black", fontWeight: "600", fontSize: 15 }}>We noticed a new login from a device or locations you don't useally use. please review</Text>
              <Text>Mon at 10.41 PM</Text>



            </View>
            <View>
              <Icon name='more-horiz' size={30} />
            </View>
          </View>
        </View>

        <View>
          <View>
            <Text style={styles.new}>Earlier</Text>
          </View>
          {userData &&
            userData.data.map((item) => (
              <View style={styles.new_notification}>
                <View>
                  <Image source={{ uri: item.avatar }} style={styles.logo} />
                  <Icon name="store" size={25} color="#FFFFFF" style={styles.icon} />
                </View>
                <View style={{ width: "70%" }}>

                  <Text style={{ color: "black", fontWeight: "600", fontSize: 15 }}><Text style={{ color: "black", fontWeight: "800", fontSize: 16 }}>{item.first_name} {item.last_name}</Text> posted a photo you haven't seen</Text>
                  <Text>Mon at 10.41 PM</Text>



                </View>
                <View>
                  <Icon name='more-horiz' size={30} />
                </View>
              </View>
            ))}
        </View>

        <View style={{ marginVertical: 10 }}>
          <ActivityIndicator animating={true} color={"#BDBDBD"} size={'large'} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  itemslogo: {
    width: 40,
    height: 40,
    //borderRadius: 40 / 2,
    //backgroundColor: "#D5DBDB",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginHorizontal: 4

  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black"
  },
  container: {
    paddingHorizontal: 8
  },
  new: {
    fontSize: 17,
    fontWeight: "900",
    color: "black"
  },
  new_notification: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
    justifyContent: "space-between",
    //alignItems: "center",
    //alignContent: "center",
    //textAlign: "center",
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: "#1877f2",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    marginLeft: 50,
    marginTop: -30
  }
})
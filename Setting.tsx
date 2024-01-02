import { Image, Linking, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card, Dialog, PaperProvider, Portal } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Setting({ navigation }) {

  const logout = async () => {
   
    await AsyncStorage.removeItem('userToken');
  
    
    navigation.replace('Login');
  };


  

  
  

  const arr = [
    {
      id: 1,
      icon: "clock",
      color: "#1877f2",
      name: "Memories"
    },
    {
      id: 2,
      icon: "bookmark",
      color: "#662a8d",
      name: "Saved"
    },
    {
      id: 3,
      icon: "users",
      color: "#1877f2",
      name: "Groups"
    },
    {
      id: 4,
      icon: "video",
      color: "#3797d2",
      name: "Video"
    },
    {
      id: 5,
      icon: "store",
      color: "#3797d2",
      name: "Marketplace"
    },
    {
      id: 6,
      icon: "user-friends",
      color: "#3797d2",
      name: "Friends"
    },
    {
      id: 7,
      icon: "newspaper",
      color: "#662a8d",
      name: "feeds"
    },
    {
      id: 8,
      icon: "calendar",
      color: "#662a8d",
      name: "Events"
    },
    {
      id: 9,
      icon: "user-circle",
      color: "#662a8d",
      name: "Avtars"
    },
    {
      id: 10,
      icon: "rocket",
      color: "#1f513b",
      name: "Fantasy games"
    },
    {
      id: 11,
      icon: "gamepad",
      color: "#662a8d",
      name: "Gaming"
    },

    {
      id: 12,
      icon: "message",
      color: "#662a8d",
      name: "Messenger kids"
    },
    {
      id: 13,
      icon: "page",
      color: "#662a8d",
      name: "pages"
    },
    {
      id: 14,
      icon: "reels",
      color: "#662a8d",
      name: "Reels"
    }
  ]


  const help = [
    {
      id: 1,
      icon: "question-circle",
      name: "Help Center",
      link: 'https://www.facebook.com/help/'
    },
    {
      id: 2,
      icon: "list-ul",
      name: "Support Index",
      link: 'https://www.facebook.com/help/'
    },
    {
      id: 3,
      icon: "exclamation-triangle",
      name: "Report a problem",
      link: 'https://www.facebook.com/help/165775630241697/'
    },
    {
      id: 4,
      icon: "lock",

      name: "Safety",
      link: 'https://www.facebook.com/help/592679377575472/?helpref=hc_fnav'
    },
    {
      id: 5,
      icon: "book",
      name: "Terms & Policies",
      link: 'https://www.facebook.com/policies_center/'
    }

  ]

  const meta = [
    {
      id: 1,
      icon: "instagram",
      color: "#FF1493",
      name: "Instagram",
      link: 'https://www.instagram.com/?hl=en'
    },
    {
      id: 2,
      icon: "whatsapp",
      color: "#25D366",
      name: "Whatsapp",
      link: 'https://web.whatsapp.com/'
    },
    {
      id: 3,
      icon: "threads",
      color: "",
      name: "Threads",
      link: 'https://www.threads.net/login'
    },
    {
      id: 4,
      icon: "facebook-messenger",
      color: "#0084FF",
      name: "Messanger",
      link: 'https://www.messenger.com/'
    }
  ]

  const setting = [

    {
      id: 1,
      icon: "cog",
      name: "Settings",
      link: 'https://www.facebook.com/help/239070709801747/?helpref=hc_fnav'
    },
    {
      id: 2,
      icon: "mobile",
      name: "Device requests",
      link: 'https://developers.facebook.com/docs/reference/androidsdk/current/facebook/com/facebook/devicerequests/internal/devicerequestshelper.html'
    },
    {
      id: 3,
      icon: "tv",
      name: "Recent ad activity",
      link: 'https://www.facebook.com/business/tools/ads-manager?content_id=8e8JU6I46LSe2U8&ref=sem_smb&utm_term=ads%20in%20facebook&gclid=588b359dc99a1decddcb50e6378de438&msclkid=588b359dc99a1decddcb50e6378de438'
    },
    {
      id: 4,
      icon: "credit-card",
      link: 'https://pay.facebook.com/',
      name: "facebbok Pay"
    },
    {
      id: 5,
      icon: "link",
      name: "Link history",
      link: 'https://www.facebook.com/help/258382577044600/'
    }

  ]
  const [visibleRequests, setVisibleRequests] = useState(8);
  const [showAll, setShowAll] = useState(false);

  const handleSeeAll = () => {
    setShowAll(!showAll);
    if (showAll) {
      setVisibleRequests(8); // Set the number of visible requests back to the initial value
    } else {
      setVisibleRequests(arr.length || 0);
    }
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const [visiblelistRequests, setVisiblelistRequests] = useState(0);
  const [visiblelisttwoRequests, setVisiblelisttwoRequests] = useState(0);
  const [visiblelistthreeRequests, setVisiblelistthreeRequests] = useState(0);
  const [list, setlist] = useState(false);
  const [listtwo, setlisttwo] = useState(false);
  const [listthree, setlistthree] = useState(false);

  const togglelist = () => {
    setlist(!list);

  }

  const togglelisttwo = () => {
    setlisttwo(!listtwo);

  }


  const togglelistthree = () => {
    setlistthree(!listthree);

  }
  return (

    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>Menu</Text>
          <TouchableOpacity style={styles.itemslogo}

            onPress={() => {
              //Linking.openURL('https://reactnative.dev/');
            }}
          >
            <Image source={require('../clone/images/glass.png')} style={{ width: 50, height: 50 }} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center", borderBottomWidth: 0.25, borderBlockEndColor: "black", paddingBottom: 8 }}>
          <View>
            <Image source={require('../clone/images/profilee.jpg')} style={styles.image} />
          </View>
          <TouchableOpacity onPress={() => navigation.push("Profile")}>
            <View>
              <Text style={{ fontSize: 20, color: "black", fontWeight: "700" }}>Rohit Sharma</Text>
              <Text style={{ fontSize: 14, color: "black", fontWeight: "400" }}>See your profile</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.array}>
          {arr.slice(0, visibleRequests).map((item) => (
            <View key={item.id} style={styles.card}>
              <Icon name={item.icon} size={30} color={item.color}></Icon>
              <Text style={{ fontSize: 20, color: "black", fontWeight: "700" }}>{item.name}</Text>
            </View>
          ))}

          <View>
            <TouchableOpacity style={styles.buttons} onPress={handleSeeAll}>
              <Text style={{ fontSize: 18, fontWeight: "800", color: "black" }}>{showAll ? 'See less' : 'See more'}</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={{ marginVertical: 10, borderTopWidth: 0.25, borderTopColor: "black", paddingVertical: 8 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
              <Icon name='question-circle' size={30} color='#1877f2'></Icon>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>Help & support</Text>
            </View>
            <View>
              <TouchableOpacity onPress={togglelist}>
                {list ? <Icon name='chevron-up' size={20} color=''></Icon> : <Icon name='chevron-down' size={20} color=''></Icon>}

              </TouchableOpacity>
            </View>
          </View>

          <View>
            {list ? (
              help.map((item) => (
                <TouchableOpacity onPress={() => {
                  Linking.openURL(item.link);
                }}>
                  <View key={item.id} style={styles.suggestions}>
                    <Icon name={item.icon} size={30} color='#808080' />
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              help.slice(0, visiblelistRequests).map((item) => (
                <TouchableOpacity onPress={() => {
                  Linking.openURL(item.link);
                }}>
                  <View key={item.id} style={styles.suggestions}>
                    <Icon name={item.icon} size={30} color='#808080' />
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))
            )}

          </View>
        </View>


        <View style={{ borderTopWidth: 0.25, borderTopColor: "black", paddingVertical: 8 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
              <Icon name='wrench' size={30} color='#1877f2'></Icon>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>Settings & privacy</Text>
            </View>
            <TouchableOpacity onPress={togglelisttwo}>
              {listtwo ? <Icon name='chevron-up' size={20} color=''></Icon> : <Icon name='chevron-down' size={20} color=''></Icon>}

            </TouchableOpacity>
          </View>

          <View>
            {listtwo ? (
              setting.map((item) => (
                <TouchableOpacity onPress={() => {
                  Linking.openURL(item.link);
                }}>
                  <View key={item.id} style={styles.suggestions}>
                    <Icon name={item.icon} size={30} color='#808080' />
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              setting.slice(0, visiblelisttwoRequests).map((item) => (
                <TouchableOpacity onPress={() => {
                  Linking.openURL(item.link);
                }}>
                  <View key={item.id} style={styles.suggestions}>
                    <Icon name={item.icon} size={30} color='#808080' />
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))
            )}

          </View>
        </View>


        <View style={{ marginVertical: 10, borderTopWidth: 0.25, borderTopColor: "black", paddingVertical: 8 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
              <Icon name='list' size={30} color='#1877f2'></Icon>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>Also from Meta</Text>
            </View>
            <TouchableOpacity onPress={togglelistthree}>
              {listthree ? <Icon name='chevron-up' size={20} color=''></Icon> : <Icon name='chevron-down' size={20} color=''></Icon>}

            </TouchableOpacity>
          </View>

          <View>
            {listthree ? (
              meta.map((item) => (
                <TouchableOpacity onPress={() => {
                  Linking.openURL(item.link);
                }}>
                  <View key={item.id} style={styles.suggestions}>
                    <Icon name={item.icon} size={30} color={item.color} />
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              meta.slice(0, visiblelistthreeRequests).map((item) => (
                <TouchableOpacity onPress={() => {
                  Linking.openURL(item.link);
                }}>
                  <View key={item.id} style={styles.suggestions}>
                    <Icon name={item.icon} size={30} color={item.color} />
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))
            )}

          </View>


        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.buttons} onPress={toggleModal}>
            <Text style={{ fontSize: 18, fontWeight: "800", color: "black" }}>Log out</Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={toggleModal}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Log out of your account?</Text>
                <View style={{ flexDirection: "row", gap: 20, justifyContent: "flex-end" }}>
                  <TouchableOpacity onPress={toggleModal}>
                    <Text style={styles.closeText}>CANCEL</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={logout}>
                    <Text style={styles.outText}>LOG OUT</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>







      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  suggestions: {

    height: 60,
    margin: 8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowOffset: {
      width: 5,
      height: 5,
      color: "#black"
    },
    shadowRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    elevation: 5,
    flexDirection: "row",
    gap: 10,
    //justifyContent:"center",
    alignItems: "center"
  },
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

  container: {
    paddingHorizontal: 8
  },
  header: {
    paddingVertical: 8
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  card: {
    width: 180,
    height: 80,
    margin: 8,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#ffffff",
    shadowOffset: {
      width: 5,
      height: 5,
      color: "#black"
    },
    shadowRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    elevation: 5,
  },
  array: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttons: {
    width: 400,
    height: 40,
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC"
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    //margin: 20,
    backgroundColor: 'white',
    //borderRadius: 10,
    padding: 20,
    width: "80%"
    //alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  closeText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  outText: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
})
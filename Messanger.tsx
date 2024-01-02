import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Sidebar from './components/layout/Sidebar';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Store from './Store';
import Contact from './Contact';
import Setting from './Setting';
const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>

      <View style={styles.headerContainer}>

        <TouchableOpacity onPress={() => navigation.push("Profile")}>
          <View style={styles.header}>



            <Image source={require('./images/profilee.jpg')} style={styles.image} />

            <Text style={styles.headerText}>Rohit Sharma</Text>

          </View>

        </TouchableOpacity>

        

          <Icon name='settings' size={30} />

       
      </View>


      <DrawerItem
        labelStyle={styles.drawer_list}
        label='Chats'
        icon={({ color, size }) => <Icon name='message' size={size} color={color} />}
        onPress={() => {

          navigation.navigate('Chats');
        }}
      />
      <DrawerItem
        labelStyle={styles.drawer_list}
        label='Message request'
        icon={({ color, size }) => <Icon name='chat-bubble' size={size} color={color} />}
        onPress={() => {

          navigation.navigate(Contact);
        }}
      />

      <DrawerItem
        labelStyle={styles.drawer_list}
        label='Marketplace'
        icon={({ color, size }) => <Icon name='store' size={size} color={color} />}
        onPress={() => {

          navigation.navigate(Store);
        }}
      />

      <DrawerItem
        labelStyle={styles.drawer_list}
        label='Archive'
        icon={({ color, size }) => <Icon name='archive' size={size} color={color} />}
        onPress={() => {

          navigation.navigate(Setting);
        }}
      />


    </DrawerContentScrollView>
  );
};

const Messanger = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name='Chats' component={Sidebar} options={{ headerShown: true }} />

    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawer_list: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  headerContainer: {
    //backgroundColor: '#3498db',
    padding: 16,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center"
  }
});

export default Messanger;

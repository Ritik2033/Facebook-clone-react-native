import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Headers from './components/layout/headers';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Setting from './Setting';
import Notification from './Notification';
import Store from './Store';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Tab = createMaterialTopTabNavigator();

function MyTab({ navigation }) {
    return (

        <View style={{ flex: 1 }}>
            <Headers navigation={navigation}/>
            <Tab.Navigator
                initialRouteName='Home'
                tabBarOptions={{
                    activeTintColor: '#0866FF',
                    tabBarInactiveTintColor: '#000000',
                    style: { backgroundColor: "none", height: 60 }
                }}
            >

                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="home" size={30} color={color} />
                        ),
                        tabBarInactiveTintColor: '#000000',
                        tabBarShowLabel: false

                    }}

                />
                <Tab.Screen
                    name="About"
                    component={About}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="tv" size={20} color={color} />
                        ),
                        tabBarInactiveTintColor: '#000000',
                        tabBarShowLabel: false

                    }}
                />
                <Tab.Screen
                    name="Contact"
                    component={Contact}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="people" size={30} color={color} />
                        ),
                        
                        tabBarInactiveTintColor: '#000000', 
                        tabBarShowLabel: false

                    }}
                />
                <Tab.Screen
                    name="Store"
                    component={Store}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="store" size={30} color={color} />
                        ),
                        tabBarInactiveTintColor: '#000000',
                        tabBarShowLabel: false

                    }}
                />

                <Tab.Screen
                    name="Notification"
                    component={Notification}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="notifications-active" size={30} color={color} />
                        ),
                        tabBarInactiveTintColor: '#000000',
                        tabBarShowLabel: false

                    }}
                />

                <Tab.Screen
                    name="Setting"
                    component={Setting}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="menu" size={30} color={color} />
                        ),
                        tabBarInactiveTintColor: '#000000',
                        tabBarShowLabel: false

                    }}
                />

            </Tab.Navigator>
        </View>

    );
}

export default function TopBarNavigater({ navigation }) {



    return (

        <MyTab navigation={navigation}/>

    );
}

const styles = StyleSheet.create({});

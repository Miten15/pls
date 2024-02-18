import {View, Text} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'


const Layout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.primary,
            tabBarLabelStyle:{
                fontFamily: 'monbl',
            },
            }}>
        <Tabs.Screen
            name="explore"
            options={{
                tabBarLabel: 'Explore',
                tabBarIcon: ({color, size}) =>
                <FontAwesome5 name = "train" color={color} size ={size}/>
            }}>

        </Tabs.Screen>
        <Tabs.Screen
            name="map"
            options={{
                tabBarLabel: 'Map',
                tabBarIcon: ({color, size}) =>
                <Ionicons name = "search" color={color} size ={size}/>
            }}>

        </Tabs.Screen>


        <Tabs.Screen
            name="Inbox"
            options={{
                tabBarLabel: 'Inbox',
                tabBarIcon: ({color, size}) =>
                <Ionicons name = "mail" color={color} size ={size}/>
            }}>

        </Tabs.Screen>



        <Tabs.Screen
            name="WishList"
            options={{
                tabBarLabel: 'WishList',
                tabBarIcon: ({color, size}) =>
                <FontAwesome5 name = "heart" color={color} size ={size}/>
            }}>

        </Tabs.Screen>
        <Tabs.Screen
            name="Profile"
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({color, size}) =>
                <Ionicons name = "man" color={color} size ={size}/>
            }}>

        </Tabs.Screen>

        
        </Tabs>
    );
};

export default Layout;
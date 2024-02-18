import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor:'grey',
        tabBarLabelStyle: {
          
          fontFamily: 'mon-sb',
        },
      }}
    >
      
      <Tabs.Screen
        name="map"
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ size, color }) => <MaterialIcons name='map' size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarLabel: 'Add Event',
          tabBarIcon: ({ size, color }) => <MaterialIcons name='event' size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
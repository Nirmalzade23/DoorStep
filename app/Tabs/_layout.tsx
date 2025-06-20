import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";
import React from "react";
import AnimatedTabBarButton from '../../component/AnimatedTabBarButton';

export default function TabLayout() {
  return (
    <>

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            width: 300,
            height: 50,
            alignSelf: 'center',
            gap:5,
            borderRadius:20,
            marginBottom:10
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Feather name="home" size={24} color="black" />
            ),
            tabBarButton: (props) => <AnimatedTabBarButton {...props} />,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons name="compass" size={24} color="black" />
            ),
            tabBarButton: (props) => <AnimatedTabBarButton {...props} />,
          }}
        />
        <Tabs.Screen
          name="Notification"
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons name="notifications" size={24} color="black" />
            ),
            tabBarButton: (props) => <AnimatedTabBarButton {...props} />,
          }}
        />

      </Tabs>
    </>
  )
}
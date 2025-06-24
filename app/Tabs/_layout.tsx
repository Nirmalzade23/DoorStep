import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { Keyboard, View } from 'react-native';
import AnimatedTabBarButton from '../../component/AnimatedTabBarButton';

export default function TabLayout() {
  const [isTabBarVisible, setTabBarVisible] = useState(true);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setTabBarVisible(false);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setTabBarVisible(true);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            display: isTabBarVisible ? 'flex' : 'none',
            width: 300,
            height: 50,
            alignSelf: 'center',
            gap: 5,
            borderRadius: 20,
            shadowColor: "black",
            backgroundColor: 'white',
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Feather name="home" size={24} color={focused ? "#5d17b0" : "black"} />
            ),
            tabBarButton: (props) => <AnimatedTabBarButton {...props} />,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons name="compass" size={24} color={focused ? "#5d17b0" : "black"} />
            ),
            tabBarButton: (props) => <AnimatedTabBarButton {...props} />,
          }}
        />
        <Tabs.Screen
          name="Notification"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons name="notifications" size={24} color={focused ? "#5d17b0" : "black"} />
            ),
            tabBarButton: (props) => <AnimatedTabBarButton {...props} />,
          }}
        />
      </Tabs>
    </View>
  )
}
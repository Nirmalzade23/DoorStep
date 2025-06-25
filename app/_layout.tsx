import { Stack } from "expo-router";
import { useState } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const [loading, Setloading] = useState();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="Tabs" options={{headerShown:false}}/>
        <Stack.Screen name="Notification" options={{headerShown:false}}/>
        <Stack.Screen name="StoreDetail" options={{headerShown:false}}/>
      </Stack>
    </GestureHandlerRootView>
  );
}

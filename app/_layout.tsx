import { Stack } from "expo-router";
import { useState } from "react";

const [loading,Setloading] = useState();


export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{headerShown:false}}/>
    <Stack.Screen name="Tabs" options={{headerShown:false}}/>
  </Stack>;


}

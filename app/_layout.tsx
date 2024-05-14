import React from 'react';
import { Slot, Stack } from 'expo-router';
import { Text } from 'react-native';

const RootLayout = () => {
  // return (
  //   <>
  //     <Text>Header</Text>
  //     <Slot />
  //     <Text>Footer</Text>
  //   </>
  // );
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default RootLayout;

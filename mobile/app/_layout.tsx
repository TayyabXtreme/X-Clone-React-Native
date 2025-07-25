import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot, Stack } from 'expo-router'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import '../global.css';

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen
        name="(auth)"
        />
      </Stack>
    </ClerkProvider>
  );
}

import { Stack } from "expo-router";
import LoginScreen from '../components/LoginScreen'
import {ClerkProvider,SignedIn,SignedOut} from '@clerk/clerk-expo'
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Quiz from './Quiz'

export default function RootLayout() {

  return (
     <ClerkProvider
         publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
     >
        <SignedIn>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
          </Stack>
        </SignedIn>

        <SignedOut>
         <LoginScreen/>
       </SignedOut>

     </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
  },
});

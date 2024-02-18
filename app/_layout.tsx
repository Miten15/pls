import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useReducer } from 'react';

import { useColorScheme } from '@/components/useColorScheme';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';

const Clerk_Publishable_key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
const tokenCache = {
  async getToken(key: string): Promise<string | null> {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string): Promise<void> {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (err) {
      // Handle error if needed
    }
  }
};


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'monbl': require('@/assets/fonts/SpaceMono-Regular.ttf')
    
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider publishableKey="pk_test_dGhvcm91Z2gtZWxlcGhhbnQtMzIuY2xlcmsuYWNjb3VudHMuZGV2JA"tokenCache={tokenCache}>
      <RootLayoutNav />
    </ClerkProvider>

  );
}

function RootLayoutNav() {
  const router =  useRouter();
  const {isLoaded, isSignedIn}= useAuth();

  useEffect(() => {
    if(isLoaded && !isSignedIn){
      router.push('/(modals)/login');
    }
  }, [isLoaded]);

  return (
    
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(modal)/login" 
        options={{ 
          title: 'Login or Sign up',
          headerBackTitleStyle:{
            fontFamily:'monbl',
          },
          presentation: 'modal',
          headerLeft:() =>(
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name = 'close-outline' size = {28}></Ionicons>,
            </TouchableOpacity>
          )
        
        }}
      />

      <Stack.Screen name = "listing/[id]" options={{headerTitle:""}}/>
      <Stack.Screen name = "(modal)/booking" options={{
        presentation: 'transparentModal',
        animation:'fade',
        headerLeft:() =>(
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name = 'close-outline' size = {28}></Ionicons>,
          </TouchableOpacity>
        )
      }}/>
      
      </Stack>
   
  );
}

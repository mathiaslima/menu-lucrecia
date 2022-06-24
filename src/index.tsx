import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Pages/HomeScreen';
import SettingsScreen from './Pages/SettingsScreen';
import PublishScreen from './Pages/PublishScreen';
import Constants from './config';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';

export type RootStackParamList = {
  homeScreen: undefined, // undefined because you aren't passing any params to the home screen
  settingsScreen: undefined;
  publishScreen: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <NavigationContainer onReady={onLayoutRootView} >
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: Constants.colors.primaryDark,
            tabBarStyle: {
              backgroundColor: Constants.colors.white,
              borderTopWidth: 0,
              marginBottom: -16
            }
          }}
        >
          <Tab.Screen
            name="homeScreen"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "home" : "home-outline"} size={size} color={Constants.colors.dark} />
              ,
              tabBarShowLabel: false,
              headerShown: false,
              title: 'Início',

            }}
          />
          <Tab.Screen
            name="publishScreen"
            component={PublishScreen}
            options={{
              tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "camera" : "camera-outline"} size={size} color={Constants.colors.dark} />,
              headerShown: false,
              tabBarShowLabel: false,
              title: 'Publicar',
            }}
          />
          <Tab.Screen
            name="settingsScreen"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "settings" : "settings-outline"} size={size} color={Constants.colors.dark} />,
              headerShown: false,
              tabBarShowLabel: false,
              title: 'Ajustes',
            }}
          />
        </Tab.Navigator>

      </NavigationContainer>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.colors.white,
    marginVertical: 20,
  },
});
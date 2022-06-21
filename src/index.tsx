import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Pages/HomeScreen';
import SettingsScreen from './Pages/SettingsScreen';
import PublishScreen from './Pages/PublishScreen';
import { AntDesign } from '@expo/vector-icons';
import Constants from './config';

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
      <NavigationContainer onReady={onLayoutRootView} >
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: Constants.colors.primaryDark,
          }}
        >
          <Tab.Screen
            name="homeScreen"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />,
              headerShown: false,
              title: 'Início',
            }}
          />
          <Tab.Screen
            name="publishScreen"
            component={PublishScreen}
            options={{
              tabBarIcon: ({ color, size }) => <AntDesign name="camerao" size={size} color={color} />,
              headerShown: false,
              title: 'Publicar',
            }}
          />
          <Tab.Screen
            name="settingsScreen"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color }) => <AntDesign name="setting" size={24} color={color} />,
              headerShown: false,
              title: 'Ajustes',
            }}
          />
        </Tab.Navigator>
        <StatusBar style="dark" />
      </NavigationContainer>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
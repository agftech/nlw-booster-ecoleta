import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { useFonts, Ubuntu_700Bold  } from '@expo-google-fonts/ubuntu'
import { Inter_900Black } from '@expo-google-fonts/inter';

import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Routes />
    </>
  );
}
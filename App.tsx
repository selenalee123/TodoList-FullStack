import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

//Apollo
import { client } from './apollo'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ApolloProvider client={client}>

          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </ApolloProvider>

      </SafeAreaProvider>
    );
  }
}

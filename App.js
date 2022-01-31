import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import MeuComponent from './MeuComponent';

export default function App() {
  // Layout da aplicação
  
  return (
    <View style={styles.container}>
      {/* Para mudar o visual do bar (superior) */}
      <StatusBar style="light" /> 

      <Text style={styles.title}>Hello World! With React Native in Android Studio.</Text>

<ScrollView>
      <MeuComponent />
      <MeuComponent />
      <MeuComponent />
      <MeuComponent />
      <MeuComponent />
      <MeuComponent />
      <MeuComponent />
</ScrollView>

    </View>
  );
}

//Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  title: {
    color: '#FFF',
  },
});

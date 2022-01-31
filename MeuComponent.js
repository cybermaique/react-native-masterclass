import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MeuComponent(){
    return(
        <View style={styles.card}>
            <Text style={styles.cardTitle}>React Native</Text>
            <Text style={styles.cardSubtitle}>Testando a minha primeira aplicação em React Native.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  card: {
      backgroundColor: '#FFF',
      padding: 12,
      borderRadius: 3,
      marginVertical: 12
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    cardSubtitle: {
      color: '#999',
      fontSize: 14
    }
})


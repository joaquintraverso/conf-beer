import React from 'react'
import { View, Text, StyleSheet } from 'react-native';


export default function Header({title, subtitle}) {
  return (
    <View style={styles.containerHeader}>
        <Text style={styles.textTitle}>{title}</Text>
        <View>
          <Text style={styles.text}>{subtitle}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({ 
  containerHeader: {
    marginTop: 80,
    padding: 5,
  },
  textTitle: {
    textAlign: 'center',
    padding: 5,
    fontSize: 30,
    fontWeight: 'bold'
  },
  text: {
    color: 'gray',
    textAlign: 'center',
  }
})
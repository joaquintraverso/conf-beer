import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native'

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 20,
  }
  // containerButton: {
    
  // },
  // button: {

  // },
  // icon: {
    
  // }
})
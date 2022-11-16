import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ConfCard({ data }) {
  const navigation = useNavigation();
  const { img, chef, time, type } = data.data();

  return (
    <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.textChef}>{chef}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {navigation.navigate('Conference', {data: data.data()})}}
        >
          <Image style={styles.img} source={{uri: img}}/>
        </TouchableOpacity>
        <View style={styles.containerFooter}>
          <Text style={styles.textType}>{type}</Text>
          <Text style={styles.textTime}>Duración: {time}</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '50%',
    marginBottom: 22,
  },
  containerHeader: {
    alignItems: 'center',
    margin: 5
  },
  textChef: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  containerFooter: {
    margin: 5
  },
  textType: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  textTime: {
    color: 'gray',
  },
  img: {
    width: 100,
    height: 100,
    padding: 5,
    borderRadius: 5
  }
})
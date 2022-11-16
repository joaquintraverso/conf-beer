import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

export default function ConferenceScreen({ route }) {

  const { data }  = route.params;
  const { img, chef, type, info } = data;

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: img}}/>
      <View style={styles.containerChef}>
        <Text style={styles.textChef}>{chef}</Text>
      </View>
      <View>
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>{type}</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.textInfo}>{info}</Text>
        </View>
      </View>
      <View style={styles.containerSkill}>
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>Skill</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.textInfo}>
            <FontAwesome5 name="check-circle" size={15} color="#ef6c00" />
            Soluciones de alta calidad, brindando lo mejor para nuestros clientes
          </Text>
          <Text style={styles.textInfo}>
            <FontAwesome5 name="check-circle" size={15} color="#ef6c00" />
            Fermentación, etc.
          </Text>
          <Text style={styles.textInfo}>
            <FontAwesome5 name="check-circle" size={15} color="#ef6c00" />
            La seguridad es lo primero
          </Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: 300,
  },
  containerChef: {
    width: '95%',
    borderBottomWidth: 1,
    borderColor: 'gray',
    margin: 15,
  },
  textChef: {
    paddingBottom: 15,
    paddingHorizontal: 15,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  containerTitle: {
    justifyContent: 'flex-start',
    marginBottom: 15,
    marginHorizontal: 15,
  },
  textTitle: {
    textAlign: 'left',
    fontSize: 22,
    fontWeight: 'bold',
  },
  textInfo: {
    marginHorizontal: 5,
    marginBottom: 5,
    color: 'gray',
    fontSize: 18,
    textAlign: 'justify',
  },
  containerSkill: {
    marginTop: 10,
  }
})
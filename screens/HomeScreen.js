import React, { useEffect, useState } from 'react'
import { FlatList, TextInput, View, Text, Button, TouchableOpacity, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import { doc, getDoc, getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';
import ConfCard from '../components/ConfCard'



export default function HomeScreen() {
  
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app);

  const [data, setData] = useState();
  
  async function loadData(){
    try {
      const conferences = await getDocs(collection(db, "conferences"));
      //console.log(conferences.docs)
      setData(conferences.docs)
      // conferences.forEach((doc) => {
      //   //console.log(doc.data());
      // });
    } catch (e) {
      console.log(e)
    }
  }
  
  useEffect(() => {
    loadData()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.textTitle}>
          Conferencias
        </Text>
      </View>
      <FlatList 
        data = {data}
        numColumns={2}
        renderItem = {({ item }) => (
          <>
            <ConfCard
              data = { item }
            />
          </>
        )}
        keyExtractor = {item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerHeader: {
    width: '90%',
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  textTitle: {
    textAlign: 'center',
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 80,
  },
})
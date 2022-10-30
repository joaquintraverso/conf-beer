import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { doc, getDoc, getFirestore} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';

export default function ConferenceScreen({ route }) {
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app);
  const { id } = route.params;
  
  async function loadDoc() {
  
    console.log(id);
    const docRef = doc(db, "conferences", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("Undefined data");
    }  
  }

  
useEffect(() => {
  loadDoc()
}, [])

  return (
    <View>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({})
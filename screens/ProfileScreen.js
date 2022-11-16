import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { signOut, getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  
  const navigation = useNavigation();
  
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);
  const user = auth.currentUser;
  
  const handleLogout = async () => {
    await logout()
    navigation.navigate('Login')
    console.log('LogOut')
  };
  
  const logout = () => signOut(auth)

  return (
    <View style={styles.container}>
      <View style={styles.containerPhoto}>
        <Image style={styles.img} source={{uri: user.photoURL}}/>
      </View>
      <View style={styles.containerName}>
        <Text style={styles.textName}>{user.displayName}</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogout}
        >
          <Text style={styles.textButton}>Cerrar sesión</Text>    
        </TouchableOpacity>
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
  containerName: {
    width: '95%',
    borderBottomWidth: 1,
    borderColor: 'gray',
    margin: 15,
  },
  textName: {
    paddingBottom: 15,
    paddingHorizontal: 15,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 5,
  },
  button: {
    borderColor: '#e65100',
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#ef6c00',
  },
  textButton: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  containerPhoto: {
    marginTop: 200,
  },
  img: {
    width: 100,
    height: 100,
    padding: 5,
    borderRadius: 5
  }
})
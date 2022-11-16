import React, {useState} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import Form from '../components/Form';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();

  const [name, setName] = useState([])
  const [lastName, setLastName] = useState([])
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  const noPhoto = 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png'

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Register')
      const user = userCredential.user;
      updateProfile(user, {
        displayName: `${name} ${lastName}`, photoURL: `${noPhoto}`
      }).then(() => {
        navigation.navigate('Login')
      }).catch((error) => {
        console.log(error)
        Alert.alert(error.message)
      });  
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }
  
  return (
    <View style={styles.container}>
      <Header 
        title= 'Bienvenido a ConfBeer'
        subtitle= 'Por favor, ingrese sus datos'
      />
      <ScrollView>
        <Form
          setForm = {setName}
          placeholder = 'Nombre/s'
        />
        <Form
          setForm = {setLastName}
          placeholder = 'Apellido/s'
        />
        <Form
          setForm = {setEmail}
          placeholder = 'example@email.com'
        />
        <Form
          setForm = {setPassword}
          placeholder = 'contraseña (mayor a 6)'
        />
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button} 
            onPress={handleCreateAccount}
          >
            <Text style={styles.textButton}>Registrarse</Text>    
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  }
})
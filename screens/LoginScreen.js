import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';
import { useNavigation } from '@react-navigation/native';
import Form from '../components/Form';
import Header from '../components/Header';
import { AntDesign } from '@expo/vector-icons';

export default function LoginScreen() {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);
  
  const provider = new GoogleAuthProvider();
  
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      navigation.navigate('Home')
      console.log('Login')
      const user = result.user;
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(errorCode, errorMessage, email, credential)
    })
  }
  
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
      console.log('Login')
      const user = userCredential.user;
      navigation.navigate('Home');
      //console.log(user)
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  };
  
  return (
    <View style={styles.container}>
      <Header 
        title= 'Bienvenido a ConfBeer'
        subtitle= 'Por favor, ingrese con su cuenta'
        />
      <ScrollView>
        <Form
          setForm = {setEmail}
          placeholder = 'example@email.com'
          />
        <Form
          setForm = {setPassword}
          placeholder = 'contraseña'
        />
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSignIn}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.text}>O continúe con Google</Text>
          <TouchableOpacity 
            style={styles.buttonGoogle}
            onPress={() => {loginWithGoogle()}}  
          >
            <Text style={styles.textButton}>
              <AntDesign name="google" size={15} color="white" /> Google
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerRegister}>
          <Text style={styles.text}>No tiene cuenta ?</Text>
          <TouchableOpacity
            onPress={() => {navigation.navigate('Register')}}>
            <Text style={styles.textRegister}>Registrarse aquí</Text>
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
  text: {
    color: 'gray',
    textAlign: 'center',
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
  buttonGoogle: {
    borderColor: '#ff6d00',
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
    marginTop: 5,
    width: '100%',
    backgroundColor: '#ff9100',
  },
  containerRegister: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 5,
  },
  textRegister: {
    color: '#ef6c00',
    fontWeight: 'bold'
  }
});

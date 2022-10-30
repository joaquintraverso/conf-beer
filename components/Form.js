import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

export default function Form({setForm, placeholder}) {

  const isPassword = value => {
    return (value === 'contraseña') || (value === 'contraseña (mayor a 6)')
  }

  return (
    <View style={styles.containerForm}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setForm(text)}
          placeholder={placeholder}
          secureTextEntry={isPassword(placeholder)}/>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  containerForm: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 5,
  },
  containerInput: {
    width: '100%'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    marginTop: 10,
    padding: 10,
    color: 'gray',
    width: 250
  }
});
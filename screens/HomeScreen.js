import { useNavigation } from '@react-navigation/core'
import React, {useEffect, useState} from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { addColonne } from '../database';
import { auth } from '../firebase';

const HomeScreen = () => {
  const navigation = useNavigation()
  const [nom, setNom] =  useState('');

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Text>Add colonne</Text>
      <TextInput
            placeholder="Nom Colonne"
            value={nom}
            onChangeText={text => setNom(text)}
            style={styles.input}
          />
          <TouchableOpacity
        onPress={addColonne(auth.currentUser?.email, {nom})}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Ajouter colonne</Text>
      </TouchableOpacity>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    justifyContent: 'flex-end'
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    justifyContent: 'flex-end'
  },
})
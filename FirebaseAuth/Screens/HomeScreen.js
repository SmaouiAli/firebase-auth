
console.disableYellowBox = true;
import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native';
import {useNavigation} from '@react-navigation/core'
import React from 'react'
import { getAuth} from "firebase/auth";

const HomeScreen = () => {
  const navigation = useNavigation();
  const Auth = getAuth();
  const signOut = ()=> {
    Auth.signOut()
    navigation.replace('Login')
  }
  return (
    <View style = {styles.container}>
      <Text>Email : {Auth.currentUser?.email}</Text>
      <TouchableOpacity style = {styles.button} 
      onPress = {signOut}
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
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
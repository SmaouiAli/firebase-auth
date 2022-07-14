import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import auth from '../firebase.js'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const handleSignIn = () => {
    createUserWithEmailAndPassword(auth, email, password) // promise
      .then((userCredentilas) => {
        const user = userCredentilas;
        console.log(user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const loginUser = ()=> {
signInWithEmailAndPassword(auth,email,password)
.then((userCreds)=> {
  const user = userCreds.user
  console.log(user.email)
})
.catch((err)=>{
  alert(err.code)
})
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonOutline]}
        onPress = {loginUser}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignIn}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "hsl(0, 2%, 12%) ",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 12,
    borderColor: "#0782F9",
    borderWidth: 3,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonOutlineText: { color: "#0782F9", fontWeight: "700", fontSize: 16 },

  buttonOutline: {
    backgroundColor: "hsl(0, 0%, 0%)",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});

import { StatusBar, StyleSheet, Text, View ,Dimensions} from "react-native";
import React from "react";
import {Video} from "expo-av"
// COMPONENT
import Header from '../components/Header/Header'
import LoginScreen from '../components/LoginScreen.jsx'
const Quiz = () => { 


  return (

    <View style={styles.wrapper}>
     <Header/>
    </View>

  );
};

export default Quiz;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
  },

});

import { router } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import React from 'react'

export default function Index() {
  const [loader,setLoader] = React.useState(false)

  React.useEffect(()=>{
    setTimeout(()=>{
      setLoader(!loader)
   },1500)
  },[])

  const handlePress = () => {
    router.replace("/Quiz");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#235",
      }}
    >
      <StatusBar hidden={true} />
      <View style={style.wrapper}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 28,
              color: "#ddd",
            }}
          >
            Welcome to
          </Text>
          <Text
            style={{
              fontWeight: "900",
              fontSize: 45,
              color: "#fff",
            }}
          >
            QuiZZLEr
          </Text>
        </View>
      </View>

     {
      loader ? (
        <TouchableOpacity
        style={{
          marginVertical: 26,
          backgroundColor: "#247",
          paddingHorizontal: 100,
          paddingVertical: 16,
          borderRadius: 12, 
      
        }}
        onPress={handlePress}
      >
        <Text style={{ color: "#fff", fontWeight: "700" }}>Continue</Text>
      </TouchableOpacity>
      )
      :
      (<Text  style={{ color: "#fff", fontWeight: "400",marginTop:50,color:"slategray" }}> Login successful , Please wait ...</Text>)
     }
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
});

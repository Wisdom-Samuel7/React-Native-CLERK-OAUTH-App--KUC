import { StyleSheet, Text, View,StatusBar,TouchableOpacity } from 'react-native'
import { router } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import React from "react";
import * as WebBrowser from "expo-web-browser"
 import useWarmUpBrowser from '../hooks/useWarmUpBrowser'
WebBrowser.maybeCompleteAuthSession()

import {useOAuth} from '@clerk/clerk-expo'
const LoginScreen = () => {
    useWarmUpBrowser()
    const  {startOAuthFlow} = useOAuth({strategy:"oauth_google"})
    const Oauth = React.useCallback(async()=>{
        try {
            const {createdSessionId,signIn,signUp,setActive} = await startOAuthFlow()

            if(createdSessionId){
                setActive({session:createdSessionId})
          
            }else{

            }
        } catch (error) { 
            console.log("Oath error",error)
        }
    })
  return (
    <View style={styles.main} 
    >
           <StatusBar />
      <Text style={{fontWeight:"900",fontSize:28,marginHorizontal:16,marginTop:26,color:"#fff",}}>Welcome to quiZZler</Text>

      <TouchableOpacity
        style={{
          marginVertical: 26,
          backgroundColor: "orange",
          paddingHorizontal: 50,
          paddingVertical: 8,
          borderRadius: 12,
          alignItems:"center",
          justifyContent:"center",
          height:"fit-content",
          marginVertical:20,
      
        }}
        onPress={Oauth}
      >
        <View style={{fontWeight: "700",height:'fit-content',alignItems:"center",justifyContent:"center",gap:6,flexDirection:"row"}}>
          <Text style={{alignSelf:"center",fontWeight:"bold",color:"#345"}}> Sign in with google </Text> 
          <Entypo name="google-" size={28} style={{fontWeight:"bold"}} color="red"/> 
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  main:{
    paddingTop:36,
    backgroundColor:"#000",
    alignItems:"center",
    justifyContent:"center",
    flex:1
  }
})
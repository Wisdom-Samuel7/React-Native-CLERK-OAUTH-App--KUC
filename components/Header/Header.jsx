import { StatusBar, StyleSheet, Text, View,Image ,TextInput} from "react-native";
import React from "react";
import {useUser} from "@clerk/clerk-expo"

import AntDesign from '@expo/vector-icons/AntDesign';

const Header = () => { 
    const [show,setShow] = React.useState(true)
    const {user} = useUser()
  return (

  <View style={{heught:"fit-content",   backgroundColor: "#235",}}>
        <View style={styles.wrapper}>
                <View style={styles.top}>
                    <Image source={{uri:user?.imageUrl}} 
                    style={{
                        width:54,
                        height:54,
                        borderRadius:50,
                        resuzeMode:"cover"
                    }}
                    />
                </View>

                <View>
                    <Text style={{color:"slategray",fontSize:15,fontWeight:"600"}}>Welcome Back</Text>
                    <Text style={{color:"#fff",fontSize:18,fontWeight:"900"}}>{user?.fullName}</Text>
                </View>
       </View>

       <View style={{
        position:"relative",
        display:"flex",

       }}>
         <TextInput style={[
            {
            backgroundColor:"#fff",
            borderRadius:12,
            paddingVertical:8,
            paddingHorizontal:10,
            marginHorizontal:10
          },
          
        ]} 
          onFocus={()=>{setShow(!show)}}
         />

         <AntDesign style={[
            {
              position:"abslute",
              bottom:34,
              left:20,
              display: show ? "hidden" : "block"
            },
           
          ]} 
            name="search1" 
            size={18} 
            color="gray" />
       </View>
  </View>

  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop:60,
    paddingHorizontal:12,
    paddingBottom: 20,
    flexDirection:"row",
    gap:6,
    alignItems:"center",
    justifyContent:"flex-start",
  },
 top:{
    alignItems:"center",
    
 }
});
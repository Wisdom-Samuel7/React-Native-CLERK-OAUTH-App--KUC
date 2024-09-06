import React from 'react'
import * as WebBrowser from "expo-web-browser"

import { View, Text } from 'react-native'


const useWarmUpBrowser = () => {
React.useEffect(()=>{
    void WebBrowser.warmUpAsync()
    return () =>{
      void WebBrowser.coolDownAsync()
    }
},[])
}

export default useWarmUpBrowser
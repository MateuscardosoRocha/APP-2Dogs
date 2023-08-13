import React from 'react'

import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";

import {AntDesign} from '@expo/vector-icons'

export default function Menu() {
return(
    <View style={styles.menuContainer}>
        
      

        <View style={styles.containerIcon}>
        <TouchableOpacity style={styles.buttonStyle}>
        <AntDesign style={styles.icon} name="solution1"  size={20} color='#000'/>
            {/* <Text>Home</Text> */}
        </TouchableOpacity>

        </View>

        <View style={styles.containerIcon}>
        <TouchableOpacity style={styles.buttonStyle}>
        <AntDesign style={styles.icon} name="Safety"  size={20} color='#000'/>
            {/* <Text>Home</Text> */}
        </TouchableOpacity>
        </View>

        <View style={styles.containerIcon}>
        <TouchableOpacity style={styles.buttonStyle}>
        <AntDesign style={styles.icon} name="export"  size={20} color='#000'/>
            {/* <Text>Home</Text> */}
        </TouchableOpacity>
        </View>
      
      
      




      
    
  </View>
)

}


const styles = StyleSheet.create({
    menuContainer: {
        height: 65,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    containerIcon:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
  
})


    
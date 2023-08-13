import React from 'react'

import { StyleSheet, Image, Text, View } from "react-native";

export default function About() {
return(
    <View style={styles.container}>
        <View style={styles.master}>

        <Text  style={styles.title}>Sobre</Text>
    <Image source={require("../../../assets/pliage.png")} style={styles.img} />

    <View style={styles.containerDetails}> 
      <Text style={styles.titleDetails}>Chassi:</Text>
      <Text style={styles.titleDetail}>HXJ937HAHG0-3</Text>
    </View>
   
    <View style={styles.containerDetailsInfos}> 
      <Text style={styles.titleDetails}>Informações do Item:</Text>
      <Text style={styles.titleDetail}>Marca: <Text style={styles.span}>Two Dogs</Text></Text>
      <Text style={styles.titleDetail}>Modelo: <Text style={styles.span}>Pliage Alloy Elétrica</Text></Text>
      <Text style={styles.titleDetail}>Ano: <Text style={styles.span}>2022</Text></Text>
      <Text style={styles.titleDetail}>Modificações: <Text style={styles.span}>Canote</Text></Text>
      <Text style={styles.titleDetail}>Documento: <Text style={styles.span}>Two Dogs</Text></Text>
      <Text style={styles.titleDetail}>Data da Compra: <Text style={styles.span}>10/08/2023</Text></Text>
      <Text style={styles.titleDetail}>Proprietário: <Text style={styles.span}>Lucas Henrique Zeferino</Text></Text>
      <Text style={styles.titleDetail}>Valor: <Text style={styles.span}>R$ 8.350,50 </Text></Text>
    </View>
   
        </View>
   
    
   
     
  </View>
)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: "#121212",
      width: '100%',
      alignItems: "center",
        justifyContent: "center",
    },

    master:{
        width: 370,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        
    },
    img: {
      height: 300,
      width: '100%',
      resizeMode: "contain",
      backgroundColor: '#313131',
      borderRadius: 6
    },

    containerDetails:{
        backgroundColor: '#313131',
      width: '100%',
      height: 88,
      marginTop: 21,
      paddingStart: 21,
      justifyContent: 'center',
      borderRadius: 6
    },

    containerDetailsInfos:{
        backgroundColor: '#313131',
        width: '100%',
        marginTop: 12,
        padding: 21,
        justifyContent: 'center',
        borderRadius: 6
    },


    title: {
      color: "#FFF",
      fontSize: 26,
      fontWeight: 'bold',
      marginTop: 20,
      textAlign: 'center',
      marginBottom: 31,
    },
    span:{
        fontWeight: 'bold'
    },

    titleDetails: {
      color: "#FFF",
        alignSelf: 'flex-start',
        fontSize: 24,
      fontWeight: 'bold',
      
    },
    titleDetail:{
        fontSize: 16,
        color: '#fff',
        marginTop: 5
    },
    btn: {
      marginTop: 80,
      backgroundColor: "#E2443B",
      paddingHorizontal: 140,
      paddingVertical: 10,
      borderRadius: 30,
    },
    text: {
      fontSize: 30,
      color: "#FFF",
    },
   
  });
  
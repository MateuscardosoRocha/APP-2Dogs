import React from 'react'

import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";



export default function About() {
return(
    <View style={styles.container}>
        <View style={styles.master}>

        <Text  style={styles.title}>Termo de Transferência </Text>
    <Image source={require("../../../assets/pliage.png")} style={styles.img} />

    <View style={styles.containerDetails}> 
      <Text style={styles.titleDetails}>Chassi:</Text>
      <Text style={styles.titleDetail}>HXJ937HAHG0-3</Text>
    </View>
   
    <View style={styles.containerDetailsInfos}> 
      <Text style={styles.titleDetails}>Termo de Transferência:</Text>
      <Text style={styles.titleDetail}>Declaram-se para os devidos fins e efeitos que TWO DOGS LTDA, inscrita no CNPJ: 41.678.958/0001-13 transfere a posse da Bicicleta Pliage Alloy Elétrica, Número de Série: HXJ937HAHG0-3, - para Lucas Henrique Zeferino. Por essa transferência foi pago o valor de R$ 8.350,50 (Oito Mil Trezentos e Cinquenta Reais e Cinquenta Centavos) em 14/08/2023  </Text>
        <TouchableOpacity style={styles.btn}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Transferir</Text>
        </TouchableOpacity>
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
      height: 267,
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
        padding: 12,
        justifyContent: 'center',
        borderRadius: 6
    },


    title: {
      color: "#FFF",
      fontSize: 26,
      marginTop: 26,
      fontWeight: 'bold',
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
      height: 46.9,
      marginTop: 48,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      width: '100%',
      borderRadius: 5,
      backgroundColor: "#fff",
     
    },

    btnText:{
        color: '#242424',
        fontWeight: 'bold',
        fontWeight: 16
    },
 
  });
  
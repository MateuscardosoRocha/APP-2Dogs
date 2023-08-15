import React from 'react'

import { StyleSheet, Image, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>

      <View style={styles.titleView}>
        <Text style={styles.title}>Sobre</Text>
      </View>

      <View style={styles.imageView}>
        <Image source={require("../../../assets/pliage.png")} style={styles.image} />
      </View>

      <View style={styles.chassiView}>
        <Text style={styles.titleDetails}>Chassi:</Text>
        <Text style={styles.infoDetails}>HXJ937HAHG0-3</Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.titleDetails}>Informações do Item:</Text>
        <Text style={styles.infoDetails}>Marca: <Text style={styles.span}>Two Dogs</Text></Text>
        <Text style={styles.infoDetails}>Modelo: <Text style={styles.span}>Pliage Alloy Elétrica</Text></Text>
        <Text style={styles.infoDetails}>Ano: <Text style={styles.span}>2022</Text></Text>
        <Text style={styles.infoDetails}>Modificações: <Text style={styles.span}>Canote</Text></Text>
        <Text style={styles.infoDetails}>Documento: <Text style={styles.span}>Two Dogs</Text></Text>
        <Text style={styles.infoDetails}>Data da Compra: <Text style={styles.span}>10/08/2023</Text></Text>
        <Text style={styles.infoDetails}>Proprietário: <Text style={styles.span}>Lucas Henrique Zeferino</Text></Text>
        <Text style={styles.infoDetails}>Valor: <Text style={styles.span}>R$ 8.350,50 </Text></Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: "#121212",
    padding: '5%',
    height: '100%',
  },
  titleView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: "#ffffff",
  },
  imageView: {
    backgroundColor: '#313131',
    height: '40%',
    borderRadius: 6,
    marginBottom: '5%',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  chassiView: {
    backgroundColor: '#313131',
    borderRadius: 6,
    padding: '3%',
    marginBottom: '5%',
  },
  infoView: {
    backgroundColor: '#313131',
    borderRadius: 6,
    padding: '3%',
  },
  titleDetails: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#ffffff",
  },
  infoDetails: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: '0.5%'
  },
  span: {
    fontWeight: 'bold'
  }
});

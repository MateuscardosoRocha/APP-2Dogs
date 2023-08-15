import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";



export default function About() {
  return (
    <View style={styles.container}>

      <View style={styles.titleView}>
        <Text style={styles.title}>Serviços</Text>
      </View>

      <View style={styles.imageView}>
        <Image source={require("../../../assets/pliage.png")} style={styles.image} />
      </View>

      <View style={styles.seguroView}>
        <Text style={styles.titleDetails}>Seguro:</Text>
        <Text style={styles.infoDetails}>Plano mensal 24,90/mês</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Gerenciar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.garantiaView}>
        <Text style={styles.titleDetails}>Garantia:</Text>
        <Text style={styles.infoDetails}>12 meses</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Entre em contato</Text>
        </TouchableOpacity>
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
  seguroView: {
    marginBottom: '5%',
    backgroundColor: '#313131',
    borderRadius: 6,
    padding: '3%',
  },
  garantiaView: {
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
  },
  btn: {
    color: "#ffffff",
    backgroundColor: "#fff",
    color: '#242424',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '3%',
    borderRadius: 5,
    marginTop: '3%'
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

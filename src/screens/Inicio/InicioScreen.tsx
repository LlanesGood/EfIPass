import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, Dimensions, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width, height } = Dimensions.get('window');

export const InicioScreen = () => {
  const nav = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor:'white',flex: 1}}>
      <ScrollView>

        <Text style={styles.firstText}>EFIPAAS</Text>

        <View style={styles.container}></View>

        <Text style={styles.segunText}>Bienvenido </Text>

        <View>

        <ImageBackground 
          source={require('../../assets/images/fondotarjeta.png')} // Cambia por la URL de tu imagen
          style={styles.TarContainer}
          resizeMode="cover" // Ajusta la imagen (cover, contain, stretch)
        >
          {/* Puedes agregar otros elementos dentro del contenedor */}
          <Text style={styles.textInsideImage1}>Texto sobre la imagen</Text>
        </ImageBackground>
        </View>

      <View style={styles.Modulecontainer}>
      <ImageBackground 
          source={require('../../assets/images/fondotarjeta.png')} // Cambia por la URL de tu imagen
          style={styles.Container1}
          resizeMode="cover" // Ajusta la imagen (cover, contain, stretch)
        >
          {/* Puedes agregar otros elementos dentro del contenedor */}
          <Text style={styles.textInsideImage}>Estados</Text>
        </ImageBackground>

        <ImageBackground 
          source={require('../../assets/images/fondotarjeta.png')} // Cambia por la URL de tu imagen
          style={styles.Container2}
          resizeMode="cover" // Ajusta la imagen (cover, contain, stretch)
        >
          {/* Puedes agregar otros elementos dentro del contenedor */}
          <Text style={styles.textInsideImage}>Paquetes</Text>
        </ImageBackground>
      </View>

      <View>
      <Text style={styles.thirdText}>Lugares más visitados </Text>
      </View>

    <TouchableOpacity style={styles.buttonContainer}>
    <Text style={styles.bottomText1}>Vuelvete Efifantastico </Text>
                  <Text style={styles.bottomText}>Se parte de nuestra familia no solo te asegura llegar a tu destino, sino hacerlo con estilo, comodidad y ventajas únicas</Text>
                </TouchableOpacity>
    
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  firstText: {
    color: '#black',
    fontSize: width * 0.09, // Tamaño de la letra
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: height * 0.024,
    margin: width * 0.022,
    marginLeft: 20, // Separación lateral
  },
  segunText: {
    color: 'black',
    fontSize: width * 0.08,
    fontWeight: 'bold',
    marginTop: height * 0.00005, // Espacio superior
    lineHeight: height * 0.10,
    marginLeft: 26,
  },
  thirdText:{
    color: 'black',
    fontSize: width * 0.057,
    fontWeight: 'bold',
    marginTop: height * 0.001, // Espacio superior
    lineHeight: height * 0.10,
    marginLeft: 26,
  },
  container: {
    borderWidth: 0.90,
    borderColor: 'grey',
  },
  TarContainer: {
    alignSelf: 'center',
    width: width * 0.85,
    height: height * 0.23,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, // Redondea los bordes
    overflow: 'hidden', // Evita que la imagen sobresalga del borde
  },
  Modulecontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  Container1: { 
    width: width * 0.37,
    height: height * 0.042,
    justifyContent: 'center',
    marginTop: height * 0.025,
    marginLeft: 26,
    alignItems: 'center',
    borderRadius: 19, // Redondea los bordes
    overflow: 'hidden', // Evita que la imagen sobresalga del borde
  },
  Container2: {
    width: width * 0.37,
    height: height * 0.042,
    justifyContent: 'center',
    marginTop: height * 0.025,
    marginRight: 40,
    alignItems: 'center',
    borderRadius: 19, // Redondea los bordes
    overflow: 'hidden', // Evita que la imagen sobresalga del borde
  },
  textInsideImage1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    
    padding: 10,
    borderRadius: 5,
  },
  textInsideImage: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer:{
    backgroundColor: '#7257FF',
    width: '90%',
    height: height * 0.10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: height * 0.04,
    borderRadius: 10,
  },
  bottomText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.029,
    marginLeft: 16,
  },
  bottomText1:{
    color: 'white',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: width * 0.04,
    height: height * 0.037,
  },
});

export default InicioScreen;  
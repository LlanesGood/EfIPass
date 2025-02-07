import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, Dimensions, View, TextInput, ViewBase, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width, height } = Dimensions.get('window')

export const ForgotPassword = () => {
  const nav = useNavigation();

  return (
        <SafeAreaView>

          <ScrollView>
            <Text style={styles.firstText}>Ingresar Nueva Contraseña</Text>
            <Text style={styles.secondText}>Debe tener al menos 8 caracteres.</Text>
        
            <View style={styles.inputContainer}>
                  <Text style={styles.thirdText}>Nueva Contraseña</Text>
                  <TextInput
                  style={styles.input}
                  placeholder='Escribe tu contraseña'
                  placeholderTextColor={'grey'}
                  secureTextEntry={true}
                  />
            </View>

            <View style={styles.inputContainer}>
                  <Text style={styles.thirdText}>Confirma Contraseña</Text>
                  <TextInput
                  style={styles.input}
                  placeholder='Escribe tu contraseña'
                  placeholderTextColor={'grey'}
                  secureTextEntry={true}
                  />
            </View>

            


            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.bottomText}>Cambiar</Text>
            </TouchableOpacity>


            <View style={styles.loginContainer}>
            <TouchableOpacity onPress={() => nav.goBack ()}>
                    <Text style={styles.loginText}>Regresar</Text>
                    </TouchableOpacity>
                  </View>


          </ScrollView>
          
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  firstText: {
    color: '#252525',
    fontSize: width * 0.067,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: height * 0.24,
  },
  secondText:{
    color: '#575454',
    fontSize: width * 0.03,
    textAlign: 'center',
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
  },
  loginText:{
    color: 'grey',
    fontSize: width * 0.035,
    margin : width * 0.07,
    textAlign: 'center',
    marginTop: height * 0.001,
    marginBottom: height * 0.0,
  },
  loginContainer: {
    marginTop: height * 0.05,
    alignSelf: 'center',
  },
  thirdText:{
    color: '#252525',
    width: '83%',
    fontWeight: 'bold',
    fontSize: width * 0.03,
  },
  inputContainer:{
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  input: {
    borderWidth: 1,
    borderColor: '#AAB7B7',
    width: width * 0.85,
    height: height * 0.055,
    borderRadius: 10,
    marginTop: height * 0.005,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  buttonContainer:{
    backgroundColor: '#7257FF',
    width: '90%',
    height: height * 0.06,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: height * 0.04,
    borderRadius: 10,
  },
  bottomText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
})

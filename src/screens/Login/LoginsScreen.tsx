import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, Dimensions, View, TextInput, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

export const LoginScreen = () => {
  const nav = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image
        source={require('../../assets/images/logoEfipass.png')}
        style={styles.image}
      />

      <Text style={styles.firstText}>hola como estas</Text>
      <Text style={styles.secondText}>Ingrese sus datos para iniciar sesión</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.thirdText}>Correo</Text>
        <TextInput
          style={styles.input}
          placeholder='Escribe tu email'
          placeholderTextColor={'grey'}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.thirdText}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder='Escribe tu contraseña'
          placeholderTextColor={'grey'}
        />
      </View>

      <TouchableOpacity style={styles.bottom}>
        <Text style={styles.bottomText}>Iniciar</Text>
      </TouchableOpacity>

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>He olvidado mi contraseña</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.registerContainer}>
        <Text style={styles.text}>¿No tienes cuenta? </Text>
        <TouchableOpacity onPress={() => nav.navigate('RegisterScreen' as never)}>
          <Text style={styles.textRegister}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    alignSelf: 'center',
    marginTop: height * 0.04,
  },
  firstText: {
    color: '#252525',
    fontSize: width * 0.08,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondText: {
    color: '#575454',
    fontSize: width * 0.03,
    textAlign: 'center',
    marginBottom: height * 0.03,
  },
  thirdText: {
    color: '#252525',
    width: '82%',
    fontWeight: 'bold',
    fontSize: width * 0.033,
  },
  inputContainer: {
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
  bottom: {
    backgroundColor: '#7257FF',
    width: '90%',
    height: height * 0.06,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: height * 0.05,
    borderRadius: 10,
  },
  bottomText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
  forgotContainer: {
    marginTop: height * 0.05,
    alignSelf: 'center',
  },
  forgotText: {
    color: '#252525',
    textAlign: 'right',
    fontWeight: '500',
    fontSize: width * 0.033,
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: height * 0.02,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textRegister: {
    color: '#252525',
    fontWeight: 'bold',
    fontSize: width * 0.033,
  },
  text: {
    color: '#252525',
    fontSize: width * 0.033,
  },
});
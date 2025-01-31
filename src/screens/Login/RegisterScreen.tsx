import React, { useState } from 'react'
import { StyleSheet, Text, Dimensions, View, TextInput, ViewBase, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dropdown } from 'react-native-element-dropdown'

const { width, height } = Dimensions.get('window')

export const RegisterScreen = () => {

  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  //CAMBIAR CON EL CONSUMO DE API
  const data = [
    { label: '+52', value: '1' },
    { label: '+55', value: '2' },
    { label: '+33', value: '3' },
    { label: '+81', value: '4' },
    { label: '+222', value: '5' },
    { label: '+442', value: '6' },
    { label: '+229', value: '7' },
    { label: '+981', value: '8' },
    { label: '+473', value: '9' },
  ];



  return (
        <SafeAreaView>

          <ScrollView>
            <Text style={styles.firstText}>Registro</Text>
            <Text style={styles.secondText}>Crea una cuenta para acceder a los beneficios</Text>
        
            <View style={styles.inputContainer}>
                  <Text style={styles.thirdText}>Nombre completo</Text>
                  <TextInput
                  style={styles.input}
                  placeholder='Escribe tu nombre completo'
                  placeholderTextColor={'grey'}
                  />
            </View>

            <View style={styles.inputContainer}>
                  <Text style={styles.thirdText}>Telefono</Text>
                        <View style={styles.inputContainerRow}>
                          <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? ' ' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                              setValue(item.value);
                              setIsFocus(false);
                            }}
                          />
                          <TextInput
                          style={styles.inputRow}
                          placeholder='Escribe tu telefono'
                          placeholderTextColor={'grey'}
                          />
                        </View>
            </View>

            <View style={styles.inputContainer}>
                  <Text style={styles.thirdText}>Email</Text>
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
                  secureTextEntry={true}
                  />
            </View>


            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.bottomText}>Registrarse</Text>
            </TouchableOpacity>

          </ScrollView>
          
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  firstText: {
    color: '#252525',
    fontSize: width * 0.10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: height * 0.1,
  },
  secondText:{
    color: '#575454',
    fontSize: width * 0.03,
    textAlign: 'center',
    marginBottom: height * 0.03,
  },
  thirdText:{
    color: '#252525',
    width: '85%',
    fontWeight: 'bold',
    fontSize: width * 0.03,
  },
  inputContainer:{
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  input: {
    borderWidth: 1,
    borderColor: '#AAB7B7',
    width: width * 0.85,
    height: height * 0.055,
    borderRadius: 10,
    marginTop: height * 0.005,
  },
  inputRow: {
    borderWidth: 1,
    borderColor: '#AAB7B7',
    width: width * 0.6,
    height: height * 0.055,
    borderRadius: 10,
    marginTop: height * 0.005,
  },
  inputContainerRow:{
    alignItems: 'center',
    marginTop: height * 0.003,
    flexDirection: 'row',
  },
  dropdown: {
    height:  height * 0.055,
    width: width * 0.23,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: height * 0.005,
    marginRight: width * 0.02,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
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
    marginTop: height * 0.05,
    borderRadius: 10,
  },
  bottomText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },

})
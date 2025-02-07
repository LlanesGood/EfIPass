import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/Login/LoginsScreen";
import { RegisterScreen } from "../screens/Login/RegisterScreen";
import React from 'react';
import { ForgotPassword } from "../screens/Login/ForgotPassword";
import { InicioScreen } from "../screens/Inicio/InicioScreen";

const Stack  = createStackNavigator();

export function LoginStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} id={undefined}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="InicioScreen" component={InicioScreen} />
    </Stack.Navigator>
  );
}

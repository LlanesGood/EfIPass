import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView,StyleSheet,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LoginStackNavigator } from './src/navigator/LoginStackNavigator';




function App(): React.JSX.Element {

  return (
   <NavigationContainer>
       <SafeAreaView style={styles.mainContainer}>
        <LoginStackNavigator/>
      </SafeAreaView>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 mainContainer: {

  flex: 1,

 }
});

export default App;

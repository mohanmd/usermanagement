/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, View ,StatusBar,  StyleSheet  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Login from './screens/login/index';
import SignUp from './screens/signup/index';
import Home from './screens/home/index';

const Stack = createStackNavigator();


const App = () => {

  return ( 
       <NavigationContainer>
         <StatusBar barStyle="dark-content" />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
              {/* <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="Login" component={Login} /> */}
              <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator> 
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

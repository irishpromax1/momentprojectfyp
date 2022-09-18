import React, {useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native';

import Splash from '/Users/imanirishdaniel-dev/Desktop/MomentProject/src/screens/auth/Splash'
import SignUp from '/Users/imanirishdaniel-dev/Desktop/MomentProject/src/screens/auth/SignUp'
import SignIn from '/Users/imanirishdaniel-dev/Desktop/MomentProject/src/screens/auth/SignIn'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/utils/colors';



const Stack = createNativeStackNavigator();

const theme  ={
  colors:{
    background: colors.white,
  }
}


const App = () => {

    return(

      <NavigationContainer theme={theme}>
          <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
          </Stack.Navigator>
      </NavigationContainer>

    );
};

export default App;

import React from 'react';
import {Text,Image, View, Pressable} from 'react-native';
import Button from '../../../components/Buttons';

import {styles} from './styles';


const Splash = ({navigation}) => {

    console.log('This splash screen >> ', navigation);

    const onSignUp = () => {
        navigation.navigate('SignUp')
    }

    const onSignIn = () => {
        navigation.navigate('SignIn')
    }

    return(
        <View style = {styles.container}>
            <Image resizeMode='contain' style = {styles.image} source = {require ('../../../assets/MomentAppIcon.png')}/>
               
            <View style = {styles.titleContainer}>
                <Text style = {styles.title}>Moment</Text>
                <Text style = {styles.subtitle}>Save every moment here</Text>
            </View>
    
            <Button onPress={onSignUp} title= "Sign Up"/>

            <Pressable onPress={onSignIn} hitSlop={20} style = {styles.login}>
                <Text style = {styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    )
}

export default React.memo(Splash);
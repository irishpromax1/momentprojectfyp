import React, {useState} from 'react';
import {Text, View} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Buttons';


import { Checkbox } from '../../../components/Checkbox';

import  Input from '../../../components/Input'; 

import {styles} from './styles';


const SignUp = ({navigation}) => {

    const [checked, setChecked] = useState(false);

    const onSignIn = () => {
        navigation.navigate('SignIn')
    }

    const onBack = () => {
        navigation.navigate('Splash')
    }

    return(
        

        <View style = {styles.container}>
            <AuthHeader onBackPress={onBack} title = "Sign Up"/>

            <Input label = "Name" placeholder="John Appleseed"/>

            <Input label = "E-mail" placeholder="johnappleseed@gmail.com"/>

            <Input isPassword label = "Password" placeholder="*******"/>

            <View style = {styles.agreement}>
                <Checkbox checked={checked} onCheck={setChecked}/>

                <Text style = {styles.agreementText}>I agree with the Terms & Conditions</Text>
            </View>

            <Button style={styles.button} title='Sign Up'/>

            <Text style={styles.footer}>Already have an account? 
                <Text onPress={onSignIn} style={styles.link}> Sign In</Text>
            </Text>
        </View>

    )
}

export default React.memo(SignUp);


import React, {useState} from 'react';

import {Text, View} from 'react-native';
import {styles} from './styles';

import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Buttons';
import Input from '../../../components/Input';

const SignIn = ({navigation}) => {

    const [checked, setChecked] = useState(false);

    const onSignUp = () => {
        navigation.navigate('SignUp')
    }

    const onBack = () => {
        navigation.navigate('Splash')
    }

    return(
        
        <View style = {styles.container}>
            <AuthHeader onBackPress={onBack} title = "Sign In"/>
            <Input label = "E-mail" placeholder="johnappleseed@gmail.com"/>
            <Input isPassword label = "Password" placeholder="*******"/>

            <Button style={styles.button} title='Sign In'/>

            <Text style={styles.footer}>Don't have an account? 
                <Text onPress={onSignUp} style={styles.link}> Sign Up</Text>
            </Text>
        </View>

    )
}

export default React.memo(SignIn);

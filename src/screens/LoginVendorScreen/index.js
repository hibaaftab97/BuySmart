import React from 'react';
import { View, Image, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import LabelText from '../../components/Text'
import Input from '../../components/Input'

import { images } from '../../assets/images'
import { vh } from '../../utils/units';

const Login = props => {
    return (
        <ImageBackground source={images.bg}
            style={styles.container}>

            <LabelText title="SHOP LOGIN" />
            <LabelText title="Login to your account"
            />
            <View style={{ marginTop: 5 * vh }}>


                <Input
                    label="Email Address"
                    placeholder="Your Email Address here"
                />
                <View style={{ marginTop: 5 * vh }}>
                    <Input
                        label="Password"
                        secureTextEntry
                        placeholder="Your Password here"
                    />
                </View>

                <TouchableOpacity style={{ alignItems: 'flex-end' }}
                    onPress={()=>props?.navigation.navigate('ForgotPasswordScreen')}
                    >
                    <LabelText title="Forgot Password?"
                    />
                </TouchableOpacity>
                <View style={{ marginTop: 4 * vh }}>
                    <Button title="LOGIN" 
                    onPress={()=>props?.navigation.navigate('VendorNavigator')}/>
                    <TouchableOpacity 
                    onPress={()=>props?.navigation.navigate('SignUpScreen')}
                    style={{ alignItems: 'center', marginTop: 5 * vh }}>
                        <LabelText title="Don't have an account? Sign Up!"
                        />
                    </TouchableOpacity>

                </View>


            </View>
        </ImageBackground>
    );
};

export default Login;
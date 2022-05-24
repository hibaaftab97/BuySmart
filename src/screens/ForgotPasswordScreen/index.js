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

            <LabelText title="FORGOT PASSWORD" />
            <LabelText title="Enter your email below"
            />
            <View style={{ marginTop: 5 * vh }}>


                <Input
                    label="Email Address"
                    placeholder="Your Email Address here"
                />
              

                <View style={{ marginTop: 4 * vh }}>
                    <Button title="RESET PASSWORD" />
                    

                </View>


            </View>
        </ImageBackground>
    );
};

export default Login;
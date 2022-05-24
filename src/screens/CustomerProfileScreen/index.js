import React from 'react';
import { View, Image, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import LabelText from '../../components/Text'
import Input from '../../components/Input'

import { images } from '../../assets/images'
import { vh, vw } from '../../utils/units';

const Login = props => {
    return (
        <ImageBackground source={images.bg}
            style={styles.container}>
                <View   style={{alignItems:'center'}}>
                <Image source={images.use}
                style={styles.img} />
            <LabelText title="Your Name" />
                </View>
          

            <View style={{ marginTop: 5 * vh,paddingHorizontal:8*vw, }}>
                <LabelText title="Full Name" />

                <LabelText title="Test" textStyle={{ color: 'grey' }} />


                <View style={{ marginTop: 3 * vh }}>
                    <LabelText title="Email Address" />

                    <LabelText title="Test@mailinator.com" textStyle={{ color: 'grey' }} />
                </View>

                <View style={{ marginTop: 3 * vh }}>
                    <LabelText title="Registration ID" />

                    <LabelText title="123456" textStyle={{ color: 'grey' }} />
                </View>
                <View style={{ marginTop: 3 * vh }}>
                    <LabelText title="Contact Number" />

                    <LabelText title="123456" textStyle={{ color: 'grey' }} />
                </View>
                <View style={{ marginTop: 3 * vh }}>
                    <LabelText title="Designation" />

                    <LabelText title="123456" textStyle={{ color: 'grey' }} />
                </View>
                <View style={{ marginTop: 3 * vh }}>
                    <LabelText title="Address" />

                    <LabelText title="test" textStyle={{ color: 'grey' }} />
                </View>
              


            </View>
        </ImageBackground>
    );
};

export default Login;
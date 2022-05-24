import React from 'react';
import { View, Image, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import LabelText from '../../components/Text'

import { images } from '../../assets/images'
import { vh } from '../../utils/units';

const Login = props => {
    return (
        <ImageBackground source={images.bg}
            style={styles.container}
            imageStyle={styles.container}>

            <LabelText title="WELCOME IN BuySmart" />

            <View style={{ alignItems: 'center' }}>
                <Image source={images.logo}
                    style={styles.img} />
                <LabelText title="SELECT LOGIN TYPE"
                />
                <View style={{ marginTop: 4 * vh }}>
                    <Button title="VENDOR"
                    onPress={()=>props.navigation.navigate('LoginVendorScreen')}
                    />
                    <Button title="CUSTOMER"
                    onPress={()=>props.navigation.navigate('LoginCustomerScreen')}
                        style={{ marginTop: 1 * vh }} />
                </View>

            </View>
        </ImageBackground>
    );
};

export default Login;
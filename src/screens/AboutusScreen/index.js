import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import LabelText from '../../components/Text'
import { aboutus } from '../../StateManagement/UserSlice/index';
import { connect, useDispatch, useSelector } from 'react-redux';
import { images } from '../../assets/images'
import { vh, vw } from '../../utils/units';

const Login = props => {
  

 

    return (
        <ImageBackground source={images.bg}
            style={styles.container}
            imageStyle={styles.container}>

            <LabelText title="ABOUT US"
                textStyle={{
                    fontWeight: 'bold',

                    marginTop: 7 * vh
                }} />

            <View style={{ alignItems: 'center', width: 92 * vw }}>
            <LabelText title="BuySmart is an android application where you can get information about the promotion taking place at that point of time and which shop is available in mall for shopping."/>

            <LabelText title="Furthermore, it also helps you to locate the shops by route map by just searching that specific area." 
           />
           <View    style={{marginTop:4*vh}}>
           <LabelText   title="2021 - BuySmart"/>
           <LabelText   title="All Rights Reserved."/>
           <LabelText   title="Bahria University"/>
           </View>

            </View>
        </ImageBackground>
    );
};

export default Login;
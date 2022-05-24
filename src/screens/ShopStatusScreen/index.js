import React from 'react';
import { View, Image, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import LabelText from '../../components/Text'

import { images } from '../../assets/images'
import { vh, vw } from '../../utils/units';

const Login = props => {
    return (
        <ImageBackground source={images.bg}
            style={styles.container}
            imageStyle={styles.container}>

            <LabelText title="SHOP STATUS" 
            textStyle={{
                fontWeight: 'bold',
                
marginTop:7*vh
            }}/>

            <View style={{ alignItems: 'center',width:95*vw }}>
           
           
           <View    style={{marginTop:4*vh,}}>
           <LabelText   title="Don't go anywhere, just check the availability of every SHOP IN MALL"/>
          
           </View>
     


            </View>
        </ImageBackground>
    );
};

export default Login;
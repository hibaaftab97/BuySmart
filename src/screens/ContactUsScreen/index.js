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

            <LabelText title="CONTACT US"
            textStyle={{
                fontWeight: 'bold'

            }}
             />
            <LabelText title="NEED HELP? WRITE TO US!"
            />
            <View style={{ marginTop: 5 * vh }}>


                <Input
                    label="Your Name"
                    placeholder="Your Name here"
                />
                  <View style={{ marginTop: 5 * vh }}>
                  <Input
                    label="Email Address"
                    placeholder="Your Email Address here"
                />
                </View>
                <View style={{ marginTop: 5 * vh }}>
                    <Input
                        label="Message Title"
                        
                        placeholder="Enter Title here"
                    />
                </View>
                <View style={{ marginTop: 5 * vh }}>
                    <Input
                        label="Your Message/Equiry"
                        
                        placeholder="Enter detailed message here"
                    />
                </View>

              
                <View style={{ marginTop: 4 * vh }}>
                    <Button title="SUBMIT" 
                    
                    onPress={() => props?.navigation.pop()}
                    />
                   

                </View>


            </View>
        </ImageBackground>
    );
};

export default Login;
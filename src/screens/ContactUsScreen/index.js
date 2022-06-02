import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import LabelText from '../../components/Text'
import Input from '../../components/Input'
import { store } from '../../StateManagement/store';
import { images } from '../../assets/images'
import { vh } from '../../utils/units';
import { ContactUs } from '../../StateManagement/UserSlice/index';
import { connect, useDispatch, useSelector } from 'react-redux';
import { showToast, validateEmail } from '../../utils';

const Login = props => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const data = store.getState();

    const contact = async () => {

        if (email == '') {
            showToast('Please Enter a Valid email');
            return;
        }
        else if (message == '') {
            showToast('Please Enter a password');
            return;
        }


        else if (!validateEmail(email)) {
            showToast('Please Enter a Valid Email');
            return;
        }


        dispatch(
            ContactUs({
                email: email,
                message: message,

            }),
        )
            .then(res => {
                console.log('resss', res)
                if (!res?.error) {
                    props.navigation.pop()
                }
                // props.navigation.pop()
            })
            .catch(e => console.log('error in catch promise', e));
    };
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
                        onChangeText={setEmail}

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
                        onChangeText={setMessage}

                        placeholder="Enter detailed message here"
                    />
                </View>


                <View style={{ marginTop: 4 * vh }}>
                    <Button title="SUBMIT"

                        onPress={() => contact()}
                    />


                </View>


            </View>
        </ImageBackground>
    );
};

export default Login;
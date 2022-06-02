import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import LabelText from '../../components/Text'
import Input from '../../components/Input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { images } from '../../assets/images'
import { vh, vw } from '../../utils/units';
import { RegisterUser } from '../../StateManagement/UserSlice/index';
import { connect, useDispatch, useSelector } from 'react-redux';
import { showToast, validateEmail } from '../../utils';

const Login = props => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [type, setType] = useState(0)

    const dispatch = useDispatch();

    const handleSignUp = async () => {
        if (phoneNumber == '') {
            showToast('Please Enter a Valid Phone number');
            return;
        }
        else if (name == '') {
            showToast('Please Enter a full Name');
            return;
        }
        else if (password == '') {
            showToast('Please Enter a password');
            return;
        }
        else if (confirmPassword == '') {
            showToast('Please confirm password');
            return;
        }
        else if (email == '') {
            showToast('Please Enter a Valid email');
            return;
        }
        else if (!validateEmail(email)) {
            showToast('Please Enter a Valid Email');
            return;
        }

        if (password !== confirmPassword) {
            return showToast('Passwords donot match!');
        }


        dispatch(
            RegisterUser({
                name: name,
                email: email,
                phone: phoneNumber,
                password: password,
                type:type
            }),
        )
            .then(res => {
                console.log('resresresres',res);
                if (res.payload.message === 'User Registered Successfully') {
                    if(type==0){
                    props.navigation.navigate('LoginVendorScreen');
                        
                    }
                    else{
                        props.navigation.navigate('LoginCustomerScreen');

                    }
                }
                else {
                    showToast(res.message)
                }
            })
            .catch(e => console.log('error in catch promise', e));
    };


    return (
        <ImageBackground source={images.bg}
            style={styles.container}>
            <KeyboardAwareScrollView contentContainerStyle={{}}>
                <View style={{ alignItems: 'center' }}>
                    <LabelText title="SIGNUP" />
                    <LabelText title="Signup to your account"
                    />
                    <View style={{ marginTop: 5 * vh }}>


                        <Input
                            label="Cellphone Number"
                            placeholder="03123456789"
                            onChangeText={setPhoneNumber}
                        />
                        <View style={{ marginTop: 5 * vh }}>
                            <Input
                                label="Full Name"
                                onChangeText={setName}

                                placeholder="Your Name here"
                            />
                        </View>

                        <View style={{ marginTop: 5 * vh }}>
                            <Input
                                label="Password"
                                secureTextEntry
                                onChangeText={setPassword}

                                placeholder="Your Password here"
                            />
                        </View>
                        <View style={{ marginTop: 5 * vh }}>
                            <Input
                                label="Confirm"
                                secureTextEntry
                                onChangeText={setConfirmPassword}

                                placeholder="Your Confirm Password here"
                            />
                        </View>
                        <View style={{ marginTop: 5 * vh }}>
                            <Input
                                label="Email Address"
                                onChangeText={setEmail}

                                placeholder="Your Email Address here"
                            />
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 4 * vw, marginTop: 4 * vh }}>
                    <Text style={styles.label}>CATOGERY</Text>
                    <View style={{ flexDirection: 'row', marginTop: 2 * vh }}>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => setType(0)}
                                    style={[styles.circle, { borderColor: type == 0 ? '#8BC34A' : 'grey' }]}>
                                    {type == 0 && <View style={styles.innercircle}>

                                    </View>}
                                </TouchableOpacity>
                                <LabelText title="SHOP"
                                    textStyle={styles.labelText}
                                />
                            </View>

                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', marginLeft: 4 * vw }}>
                                <TouchableOpacity
                                    onPress={() => setType(1)}
                                    style={[styles.circle, { borderColor: type == 1 ? '#8BC34A' : 'grey' }]}>
                                    {type == 1 && <View style={styles.innercircle}>

                                    </View>}
                                </TouchableOpacity>
                                <LabelText title="CUSTOMER"
                                    textStyle={styles.labelText}
                                />
                            </View>

                        </View>

                    </View>
                </View>
                <View style={{ marginTop: 4 * vh, alignItems: 'center' }}>
                    <Button title="SIGN UP"
                        onPress={() => handleSignUp()} />
                    <TouchableOpacity
                        onPress={() => props?.navigation.navigate('LoginCustomerScreen')}
                        style={{ alignItems: 'center', marginTop: 5 * vh }}>
                        <LabelText title="Already a member? Login here!"
                        />
                    </TouchableOpacity>

                </View>



            </KeyboardAwareScrollView>
        </ImageBackground>
    );
};

export default Login;
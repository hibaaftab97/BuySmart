import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import LabelText from '../../components/Text'
import Input from '../../components/Input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { images } from '../../assets/images'
import { vh, vw } from '../../utils/units';

const Login = props => {
    const [type, setType] = useState(1)

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
                        />
                        <View style={{ marginTop: 5 * vh }}>
                            <Input
                                label="Full Name"

                                placeholder="Your Name here"
                            />
                        </View>

                        <View style={{ marginTop: 5 * vh }}>
                            <Input
                                label="Password"
                                secureTextEntry
                                placeholder="Your Password here"
                            />
                        </View>
                        <View style={{ marginTop: 5 * vh }}>
                            <Input
                                label="Confirm"
                                secureTextEntry
                                placeholder="Your Confirm Password here"
                            />
                        </View>
                        <View style={{ marginTop: 5 * vh }}>
                            <Input
                                label="Email Address"

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
                                onPress={()=> setType(1)}
                                style={[styles.circle,{borderColor:type==1?'#8BC34A':'grey'}]}>
                                    {type==1&&<View style={styles.innercircle}>

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
                                onPress={()=> setType(2)}
                                style={[styles.circle,{borderColor:type==2?'#8BC34A':'grey'}]}>
                                    {type==2&&<View style={styles.innercircle}>

                                    </View>}
                                </TouchableOpacity>
                                <LabelText title="CUSTOMER"
                                    textStyle={styles.labelText}
                                />
                            </View>

                        </View>

                    </View>
                </View>
                <View style={{ marginTop: 4 * vh,alignItems:'center' }}>
                    <Button title="SIGN UP" />
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
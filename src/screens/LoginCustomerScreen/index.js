import React,{useState} from 'react';
import { View, Image, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import LabelText from '../../components/Text'
import Input from '../../components/Input'
import { LoginUser } from '../../StateManagement/UserSlice/index';
import { connect, useDispatch, useSelector } from 'react-redux';
import { showToast, validateEmail } from '../../utils';
import { images } from '../../assets/images'
import { vh } from '../../utils/units';

const Login = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async () => {
       
        if (email == '') {
            showToast('Please Enter a Valid email');
            return;
        }
        else if (password == '') {
            showToast('Please Enter a password');
            return;
        }
       
       
        else if (!validateEmail(email)) {
            showToast('Please Enter a Valid Email');
            return;
        }


        dispatch(
            LoginUser({
                email: email,
                password: password,
            
            }),
        )
            .then(res => {
                if (res.token) {
                    props.navigation.navigate('ShopStackNavigator');
                }
                else {
                }
            })
            .catch(e => console.log('error in catch promise', e));
    };
    return (
        <ImageBackground source={images.bg}
            style={styles.container}>

            <LabelText title="CUSTOMER LOGIN" />
            <LabelText title="Login to your account"
            />
            <View style={{ marginTop: 5 * vh }}>


                <Input
                    label="Email Address"
                    onChangeText={setEmail}

                    placeholder="Your Email Address here"
                />
                <View style={{ marginTop: 5 * vh }}>
                    <Input
                        label="Password"
                        secureTextEntry
                        onChangeText={setPassword}

                        placeholder="Your Password here"
                    />
                </View>

                <TouchableOpacity style={{ alignItems: 'flex-end' }}
                    onPress={() => props?.navigation.navigate('ForgotPasswordScreen')}
                >
                    <LabelText title="Forgot Password?"
                    />
                </TouchableOpacity>
                <View style={{ marginTop: 4 * vh }}>
                    <Button title="LOGIN" 
                    
                    onPress={() => 
                        {handleLogin()}
                        }
                    />
                    <TouchableOpacity
                        onPress={() => props?.navigation.navigate('SignUpScreen')}
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
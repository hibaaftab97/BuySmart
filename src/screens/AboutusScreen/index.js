import React,{useEffect, useState} from 'react';
import { View, Image, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import LabelText from '../../components/Text'
import { aboutus } from '../../StateManagement/UserSlice/index';
import { connect, useDispatch, useSelector } from 'react-redux';
import { images } from '../../assets/images'
import { vh, vw } from '../../utils/units';

const Login = props => {
    const [about,setAbout]=useState('')
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(
            aboutus(),
        )
            .then(res => {
                setAbout(res?.payload?.about)
            })
            .catch(e => console.log('error in catch promise', e));
    }, [])

    return (
        <ImageBackground source={images.bg}
            style={styles.container}
            imageStyle={styles.container}>

            <LabelText title="ABOUT US" 
            textStyle={{
                fontWeight: 'bold',
                
marginTop:7*vh
            }}/>

            <View style={{ alignItems: 'center',width:92*vw }}>
           
            <LabelText title={about} 
           />
        
            </View>
        </ImageBackground>
    );
};

export default Login;
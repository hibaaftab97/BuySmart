import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, Text, FlatList } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import LabelText from '../../components/Text'
import { getAllshops } from '../../StateManagement/UserSlice/index';
import { connect, useDispatch, useSelector } from 'react-redux';
import { images } from '../../assets/images'
import { vh, vw } from '../../utils/units';

const Login = props => {

    const [shops, setShops] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(
            getAllshops(),
        )
            .then(res => {
                setShops(res?.payload?.data)
            })
            .catch(e => console.log('error in catch promise', e));
    }, [])




    const renderMenus = ({ item, index }) => {
        return (
            <View style={{ marginTop: 3 * vh, alignItems: 'center' }}>

                <LabelText title={item?.name} textStyle={{ fontWeight: 'bold' }} />


                <View style={{ marginTop: 0 * vh }}>

                    <LabelText title={item?.status} textStyle={{ color: 'grey' }} />
                </View>
            </View>
        )
    }

    const header = () => {
        return (
            <View>
                <LabelText title="SHOP STATUS"
                    textStyle={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 7 * vh
                    }} />
                <View style={{ marginTop: 4 * vh, width: 85 * vw,alignItems:'center' }}>
                    <LabelText title="Don't go anywhere, just check the availability of every SHOP IN MALL" />
                </View>
            </View>
        )
    }

    return (
        <ImageBackground source={images.bg}
            style={styles.container}
            imageStyle={styles.container}>

            <View style={{ alignItems: 'center', }}>

                <View style={{ marginTop: 0 * vh, }}>

                    <FlatList data={shops}
                        showsVerticalScrollIndicator={false}
                        style={{
                        }}
                        ListHeaderComponent={header}
                        contentContainerStyle={{
                            alignItems: 'center',
                        }}
                        keyExtractor={(item) => item._id}
                        renderItem={renderMenus}
                    />


                </View>

            </View>
        </ImageBackground>
    );
};

export default Login;
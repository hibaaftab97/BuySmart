import React from 'react';
import { View, Image, TouchableOpacity, ScrollView, ImageBackground, Text, FlatList } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import LabelText from '../../components/Text'
import Input from '../../components/Input'
import { images } from '../../assets/images'
import { logout, } from '../../StateManagement/UserSlice/index';
import { GetProfile, getUser, } from '../../StateManagement/UserSlice/index';
import { connect, useDispatch, useSelector } from 'react-redux';
import { icons } from '../../assets/icons'
import { vh, vw } from '../../utils/units';
import BluetoothStateManager from 'react-native-bluetooth-state-manager';


const Login = props => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    console.log('userrserrr', user)

    const menus = [{
        name: "Bluetooth",
        image: icons.bluetooth1
    },
    {
        name: "SHOP Status",
        image: icons.time1,
        route: "ShopStatusScreen"
    },
    {
        name: "My Profile",
        image: icons.profile1,
        route: "CustomerProfileScreen"
    },
    {
        name: "Mall Map",
        image: icons.map1,
        route: "MapScreen"

    },
    {
        name: "About",
        image: icons.info1,
        route: "AboutusScreen"
    },
    {
        name: "Contact Us",
        image: icons.contact1,
        route: "ContactUsScreen"
    },
    {
        name: "BuySmart Team",
        image: icons.team,
        route: "TeamScreen"
    },
    {
        name: "Rate Our App",
        image: icons.rate
    },
    ]

    const onClick = (item) => {
        if(item?.name=='Bluetooth'){
            BluetoothStateManager.requestToEnable().then((result) => {
                // result === true -> user accepted to enable bluetooth
                // result === false -> user denied to enable bluetooth
            })
        }
        else{
            props.navigation.navigate(item?.route)
          
        }
    }
    const renderMenus = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ width: '35%', alignItems: 'center' }}
                onPress={onClick}>
                <Image source={item?.image}
                    style={styles.img} />
                <Text style={{ fontWeight: 'bold', fontSize: 2 * vh }}>{item?.name}</Text>
            </TouchableOpacity>
        )
    }

    const header = () => {
        return (
            <View>
                <LabelText title="CUSTOMER DASHBOARD" textStyle={{
                    fontWeight: 'bold'

                }} />
                <LabelText title="Explore whatever you want to!"
                />
                <View style={{ alignItems: 'center' }}>
                    <Image source={icons.p1}
                        style={styles.img} />
                    <Text style={{ fontWeight: 'bold', fontSize: 2 * vh }}>PROMOTIONS</Text>
                </View>
            </View>
        )
    }
    const footer = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    dispatch(logout())
                    props.navigation.navigate('AuthNavigator')
                }
                }
                style={{ alignItems: 'center' }}>
                <Image source={icons.logout1}
                    style={styles.img} />
                <Text style={{ fontWeight: 'bold', fontSize: 2 * vh }}>Log Out</Text>
            </TouchableOpacity>
        )
    }
    return (

        <ImageBackground source={images.bg}
            style={styles.container}>
            {/* <ScrollView 
    
            contentContainerStyle={{ alignItems: 'center' }}
            > */}

            <View style={{ marginTop: 3 * vh }}>


                <FlatList data={menus}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    style={{
                        width: 100 * vw
                    }}
                    ListHeaderComponent={header}
                    ListFooterComponent={footer}
                    contentContainerStyle={{
                        alignItems: 'center',
                    }}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMenus}
                />





            </View>
            {/* </ScrollView> */}
        </ImageBackground>


    );
};

export default Login;
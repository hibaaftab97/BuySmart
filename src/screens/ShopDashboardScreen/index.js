import React from 'react';
import { View, Image, TouchableOpacity, ScrollView, ImageBackground, Text, FlatList, Platform, PermissionsAndroid, Linking } from 'react-native';
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
import BleManager from 'react-native-ble-manager';


const Login = props => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);

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
        console.log(item);
        if (item?.name == 'Bluetooth') {
            BleManager.start({ showAlert: false });
            // BluetoothStateManager.requestToEnable().then((result) => {


            //     // result === true -> user accepted to enable bluetooth
            //     // result === false -> user denied to enable bluetooth
            // })
            if (Platform.OS === 'android' && Platform.Version >= 23) {
                PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
                    if (result) {
                        console.log("Permission is OK");
                        BleManager.enableBluetooth()
                            .then(() => {
                                // Success code
                                console.log("The bluetooth is already enabled or the user confirm");
                            })
                            .catch((error) => {
                                // Failure code
                                console.log("The user refuse to enable bluetooth");
                            });

                    } else {
                        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
                            if (result) {
                                console.log("User accept");
                                BleManager.enableBluetooth()
                                    .then(() => {
                                        // Success code
                                        console.log("The bluetooth is already enabled or the user confirm");
                                    })
                                    .catch((error) => {
                                        // Failure code
                                        console.log("The user refuse to enable bluetooth");
                                    });
                            } else {
                                console.log("User refuse");
                            }
                        });
                    }
                });
            }
        }
        else if(item?.name=='Rate Our App'){
            Linking.openURL('https://play.google.com/store/apps/details?id=com.facebook.katana&hl=en&gl=US')
}
        else if(item?.route){
            props.navigation.navigate(item?.route)

        }
        
    }
    const renderMenus = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ width: '35%', alignItems: 'center' }}
                onPress={() => onClick(item)}>
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
                <TouchableOpacity style={{ alignItems: 'center' }}
                onPress={() => {
                    props.navigation.navigate('Promotions')
                }
                }>
                    <Image source={icons.p1}
                        style={styles.img} />
                    <Text style={{ fontWeight: 'bold', fontSize: 2 * vh }}>PROMOTIONS</Text>
                </TouchableOpacity>
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
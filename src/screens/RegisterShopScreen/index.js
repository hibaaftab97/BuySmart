import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import LabelText from '../../components/Text'
import Input from '../../components/Input'
import { registerShop } from '../../StateManagement/VendorSlice/index';
import { connect, useDispatch, useSelector } from 'react-redux';
import { images } from '../../assets/images'
import { vh, vw } from '../../utils/units';
import { showToast, } from '../../utils';
import { GetProfile, selectUser, } from '../../StateManagement/UserSlice/index';


const Login = props => {
    const [activeindex, setIndex] = useState(0)
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setdescription] = useState('');
    const [shopstatus, setstatus] = useState('Available');

    const status = [{
        title: "Available"
    },
    {
        title: "Not Available"
    },
    {
        title: "At lunch"
    },
    {
        title: "Or Write your own"
    }
    ]

    const _registerShop = async () => {

        if (name == '') {
            showToast('Please Enter shop Name');
            return;
        }
        else if (description == '') {
            showToast('Please Enter description');
            return;
        }

else{

        dispatch(
            registerShop({
                name: name,
                description: description,
                status: shopstatus,
            
            }),
        )
            .then(res => {
                console.log('ressss',res)
                if (res?.payload?.message === 'Shop Registered Successfully') {
                    
                    props.navigation.navigate('VendorNavigator');

                }
                else {
                    showToast(res.message)
                }
            })
            .catch(e => console.log('error in catch promise', e));
        }
    };
    return (
        <ImageBackground source={images.bg}
            style={styles.container}>

            <LabelText title="REGISTER SHOP"
                textStyle={{
                    fontWeight: 'bold'

                }}
            />

            <View style={{ marginTop: 5 * vh }}>


                <Input
                    label="Shop Name"
                    onChangeText={setName}

                    placeholder="Shop Name here"
                />
                <View style={{ marginTop: 5 * vh }}>
                    <Input
                        label="Description"
                        onChangeText={setdescription}

                        placeholder="Shop Description here"
                    />
                </View>
                <LabelText title="Add Status"
                    textStyle={{
                        // fontWeight: 'bold'

                    }}
                />
                <View style={{ width: 90 * vw }}>

                    {status.map((item, index) => {
                        return (
                            <View>
                                <View style={{ flexDirection: 'row', marginTop: 3 * vh }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setIndex(index)
                                            setstatus(item?.title)
                                        }
                                        }
                                        style={[styles.circle, { borderColor: activeindex == index ? '#8BC34A' : 'grey' }]}>
                                        {activeindex == index && <View style={styles.innercircle}>

                                        </View>}
                                    </TouchableOpacity>
                                    <LabelText title={item?.title}
                                        textStyle={styles.labelText}
                                    />
                                </View>

                            </View>
                        )
                    })}

                    {activeindex == 3 ? <Input
                        onChangeText={setstatus}

                        placeholder="okay, write your own here..."
                    /> : null}

                    <Button title="SAVE"
                        style={{ marginTop: 4 * vh }}
                        onPress={()=>_registerShop()} />


                </View>

            </View>
        </ImageBackground>
    );
};

export default Login;
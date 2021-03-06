import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import LabelText from '../../components/Text'
import Input from '../../components/Input'
import { updateStatus } from '../../StateManagement/VendorSlice/index';
import { connect, useDispatch, useSelector } from 'react-redux';
import { selectUser,getUser } from '../../StateManagement/UserSlice/index';

import { images } from '../../assets/images'
import { vh, vw } from '../../utils/units';

const Login = props => {
    const [activeindex, setIndex] = useState(0)
    const dispatch = useDispatch();
    const [shopstatus,setStatus]=useState('Available')
    const user = useSelector(getUser);
console.log('userrr',user);

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

const update=async()=>{
    dispatch(
        updateStatus({
            
            status:shopstatus,
            shop_id:user?.user?.shop_id
        }),
    )
        .then(res => {
            console.log('resresresres',res);
            if (res.payload?.shop_data) {
                
                props.navigation.pop()
                    
                
                
            }
            else {
                // showToast(res.message)
            }
        })
        .catch(e => console.log('error in catch promise', e));
}
    return (
        <ImageBackground source={images.bg}
            style={styles.container}
            imageStyle={styles.container}>

            <LabelText title="CHOOSE YOUR STATUS"
                textStyle={{
                    fontWeight: 'bold',

                    marginTop: 7 * vh
                }} />
            <View style={{ marginTop: 4 * vh, }}>
                <LabelText title="Your status will be visible to all Customers" />

            </View>
            <View style={{ width: 90 * vw }}>

                {status.map((item, index) => {
                    return (
                        <View>
                            <View style={{ flexDirection: 'row', marginTop: 3 * vh }}>
                                <TouchableOpacity
                                    onPress={() => 
                                        {
                                            setIndex(index)
                                            setStatus(item?.title)
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
                    placeholder="okay, write your own here..."
                /> : null}

                <Button title="SAVE"
                style={{marginTop:4*vh}}
                    onPress={() =>
                        update()
               } />
                

            </View>
        </ImageBackground>
    );
};

export default Login;
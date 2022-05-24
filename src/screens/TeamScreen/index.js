import React from 'react';
import { View, Image, TouchableOpacity, ImageBackground, Text ,FlatList} from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import LabelText from '../../components/Text'

import { images } from '../../assets/images'
import { vh, vw } from '../../utils/units';
import { icons } from '../../assets/icons';

const Login = props => {


    const menus = [{
        name: "Safwan Riaz",
        image: images.safwan
    },
    {
        name: "Chris Haris",
        image: images.chris
    },
    {
        name: "Khizar Javed",
        image: images.khizar
    },
   
    ]
    const header=()=>{
        return(
            <LabelText title="MEET OUR TEAM" textStyle={{
                fontWeight: 'bold',textAlign:'center',fontSize:4*vh

            }} />
        )
    }
    const renderMenus = ({ item, index }) => {
        return (
            <View style={{ width: '35%', alignItems: 'center' }}
            >
                <Image source={item?.image}
                    style={styles.img} />
                <Text style={{ fontWeight: 'bold', fontSize: 2 * vh }}>{item?.name}</Text>
            </View>
        )
    }
    return (
        <ImageBackground source={images.bg}
            style={styles.container}
            imageStyle={styles.container}>

         


            <View style={{ marginTop: 3 * vh }}>


                <FlatList data={menus}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    style={{
                        // width: 100 * vw
                    }}
                    ListHeaderComponent={header}
                    contentContainerStyle={{
                        // alignItems: 'center',
                    }}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMenus}
                />





            </View>
        </ImageBackground>
    );
};

export default Login;
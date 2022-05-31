import React ,{ useEffect, useState }from 'react';
import { View, Image, TouchableOpacity, ImageBackground, ScrollView,RefreshControl } from 'react-native';
import styles from './styles';
import LabelText from '../../components/Text'
import { GetProfile ,selectUser} from '../../StateManagement/UserSlice/index';
import { connect, useDispatch, useSelector } from 'react-redux';
import { images } from '../../assets/images'
import { vh, vw } from '../../utils/units';

const Login = props => {

    const [profile,setProfile]=useState({})
    const [refreshing, setRefreshing] = React.useState(false);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(()=>{
        dispatch(GetProfile());
          
    },[])
    console.log(user, 'user in myProfile');

    // const onRefresh = React.useCallback(() => {
    //     setRefreshing(true);
    //     dispatch(
    //         GetProfile(),
    //     )
    //         .then(res => {
    // console.log('=====data',res)
    // setRefreshing(false);

    // setProfile(res)
              
    //         })
    //         .catch(e => console.log('error in catch promise', e));
    //   }, []);

    return (
        // <ScrollView  refreshControl={
        //     <RefreshControl
        //       refreshing={refreshing}
        //     //   onRefresh={onRefresh}
        //     />
        //   }>
        <ImageBackground source={images.bg}
            style={styles.container}>
                <View   style={{alignItems:'center'}}>
                <Image source={images.use}
                style={styles.img} />
            <LabelText title="Your Name" />
                </View>
          

            <View style={{ marginTop: 5 * vh,paddingHorizontal:8*vw, }}>
                <LabelText title="Full Name" />

                <LabelText title={user?.name} textStyle={{ color: 'grey' }} />


                <View style={{ marginTop: 3 * vh }}>
                    <LabelText title="Email Address" />

                    <LabelText title={user?.email} textStyle={{ color: 'grey' }} />
                </View>

                <View style={{ marginTop: 3 * vh }}>
                    <LabelText title="Registration ID" />

                    <LabelText title="123456" textStyle={{ color: 'grey' }} />
                </View>
                <View style={{ marginTop: 3 * vh }}>
                    <LabelText title="Contact Number" />

                    <LabelText title={user?.phone} textStyle={{ color: 'grey' }} />
                </View>
                <View style={{ marginTop: 3 * vh }}>
                    <LabelText title="Designation" />

                    <LabelText title="123456" textStyle={{ color: 'grey' }} />
                </View>
                <View style={{ marginTop: 3 * vh }}>
                    <LabelText title="Address" />

                    <LabelText title="test" textStyle={{ color: 'grey' }} />
                </View>
              


            </View>
        </ImageBackground>
        // </ScrollView>
    );
};

export default Login;
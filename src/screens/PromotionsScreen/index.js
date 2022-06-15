import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Text,
  FlatList,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import LabelText from '../../components/Text';
import Input from '../../components/Input';
import {images} from '../../assets/images';
import {logout, getUser} from '../../StateManagement/UserSlice/index';
import {connect, useDispatch, useSelector} from 'react-redux';
import {icons} from '../../assets/icons';
import {vh, vw} from '../../utils/units';
import BluetoothStateManager from 'react-native-bluetooth-state-manager';
import BleManager from 'react-native-ble-manager';
import ImagePicker from '../../components/ImagePicker';
import {updatePhotos, getPhotos} from '../../StateManagement/VendorSlice/index';

import {showToast, validateEmail} from '../../utils';

const Login = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [profile, setProfile] = useState('');
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const user = useSelector(getUser);
  const [data, setData] = useState([]);

  console.log('userr', user);
  const onPress = profile => {
    if (name == '') {
      showToast('Please select file');
    } else {
      dispatch(
        updatePhotos({
          image: profile,
          filename: name,
        }),
      )
        .then(res => {
          console.log('ressss', res);
          if (res?.payload?.message === 'Profile Updated Successfully') {
            showToast(res?.payload?.message);
          } else {
            showToast(res?.payload?.message);
          }
        })
        .catch(e => console.log('error in catch promise', e));
    }
  };

  const footer = () => {
    return (
      <View
        style={{
          borderTopColor: 'grey',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: 'transparent',

          borderWidth: 0.2 * vh,
          // height:40*vh,
          alignItems: 'center',
          marginBottom: 2 * vh,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          {user?.user?.type == 0 && (
            <Button title="UPLOAD" style={{width: 25 * vw}} />
          )}
          <TouchableOpacity
            style={{marginLeft: 10 * vw}}
            onPress={() => showUpload()}>
            <LabelText title="Show Uploads" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderMenus = ({item, index}) => {
    return <Image source={{uri: item?.image}} style={styles.img} />;
  };

  // useEffect(() => {
  //     showUpload()
  // }, [])

  const showUpload = () => {
    dispatch(getPhotos())
      .then(res => {
        console.log('resss', res);
        if (res?.payload?.message == 'Success') {
          let photos = res?.payload?.data;
          if (user?.user?.type == 0) {
            photos = res?.payload?.data.filter(
              item => item?.user_id == user?.user?._id,
            );
          }
          setData(photos);
        }
      })
      .catch(e => console.log('error in catch promise', e));
  };

  return (
    <ImageBackground source={images.bg} style={styles.container}>
      {/* <ScrollView 
    
            contentContainerStyle={{ alignItems: 'center' }}
            > */}
      <ImagePicker
        modalVisible={modalVisible}
        profilepicture={onPress}
        setModalVisible={setModalVisible}
      />
      {user?.user?.type == 0 && (
        <View style={{marginTop: 3 * vh, flexDirection: 'row'}}>
          <Button
            title="CHOOSE FILE"
            onPress={() => setModalVisible(true)}
            style={{width: 30 * vw}}
          />
          <Input
            value={name}
            onChangeText={setName}
            placeholder="Enter File name"
          />
        </View>
      )}
      <FlatList
        data={data}
        style={
          {
            // flex: 1
          }
        }
        keyExtractor={item => item._id}
        renderItem={renderMenus}
        // ListFooterComponent={footer}
      />
      <View style={{justifyContent: 'flex-end'}}>{footer()}</View>

      {/* </ScrollView> */}
    </ImageBackground>
  );
};

export default Login;

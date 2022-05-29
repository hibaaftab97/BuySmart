import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {View, Text, Modal, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLoader} from '../../StateManagement/LoaderSlice';
import {vh} from '../../utils/units';
import styles from './styles';

const LoadingComponent = () => {
  const loader = useSelector(selectLoader);

  return (
    <Modal transparent visible={loader}>
      <BlurView
        style={styles.container}
        blurType="light"
        blurAmount={5}
        blurRadius={10}></BlurView>
      <View style={styles.loader}>
        <ActivityIndicator color={'#8BC34A'} size={vh * 5} />
      </View>
    </Modal>
  );
};

export default LoadingComponent;
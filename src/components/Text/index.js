import React from 'react';
import {Image, View,TouchableOpacity,Text} from 'react-native';
import styles from './styles';


export default TextButton = props => {
 

  return (
   
        <Text style={[styles.text, props?.textStyle]}>
          {props?.title}
        </Text>
 
  );
};
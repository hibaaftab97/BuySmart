import React from 'react';
import {Image, View,TouchableOpacity,Text,TextInput} from 'react-native';
import styles from './styles';


export default TextButton = props => {
 

  return (
  <View>
      {props?.label&&<Text style={styles.label}>{props?.label}</Text>}
      <View style={styles.container}>
      <TextInput    
      {...props}
      secureTextEntry={props.secureTextEntry}
      placeholder={props.placeholder}/>
      </View>
    
  </View>
  );
};
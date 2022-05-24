import React from 'react';
import {Image, View,TouchableOpacity,Text,TextInput} from 'react-native';
import styles from './styles';


export default TextButton = props => {
 

  return (
  <View>
      <Text style={styles.label}>{props?.label}</Text>
      <View style={styles.container}>
      <TextInput    
      secureTextEntry={props.secureTextEntry}
      placeholder={props.placeholder}/>
      </View>
    
  </View>
  );
};
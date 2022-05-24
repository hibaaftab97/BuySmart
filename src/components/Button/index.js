import React from 'react';
import {Image, View,TouchableOpacity,Text} from 'react-native';
import styles from './styles';


export default TextButton = props => {
  const handleOnPress = () => {
    if (props?.onPress) {
      props.onPress();
    }
  };

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, props?.style]}
      onPress={handleOnPress}
      >
        {props.icon && (
          <Image
            source={props?.icon}
            style={[styles.iconStyle, props.iconStyle]}
          />
        )}
        <Text style={[styles.text, props?.textStyle]}>
          {props?.title}
        </Text>
    </TouchableOpacity>
  );
};
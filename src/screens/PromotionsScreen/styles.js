import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  button:{
      width:80*vw,
      backgroundColor:'green',
      padding:4*vh
  },
  img:{
      width:100*vw,height:40*vh,resizeMode:'contain',
      marginTop:4*vh
  }
});

export default styles;
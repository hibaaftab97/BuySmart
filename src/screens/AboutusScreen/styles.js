import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent:'center'
  },
  button:{
      width:80*vw,
      backgroundColor:'green',
      padding:4*vh
  },
  img:{
      width:80*vw,height:50*vw,resizeMode:'cover',
      marginTop:4*vh
  }
});

export default styles;
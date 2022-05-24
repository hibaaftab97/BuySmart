import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  button:{
      width:80*vw,
      backgroundColor:'green',
      padding:4*vh
  },
  labelText:{
fontSize:2*vh
  },
  img:{
      width:80*vw,height:50*vw,resizeMode:'cover',
      marginTop:4*vh
  },
  label: {
    fontSize: vw * 4,
    color: '#111111',
  },
  circle:{
      width:5*vw,
      height:5*vw,
      borderRadius:2.5*vw,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:0.2*vh,
      borderColor:'#8BC34A'
  },
  innercircle:{
    width:3*vw,
    height:3*vw,
    borderRadius:1.5*vw,

    backgroundColor:'#8BC34A'
  }
});

export default styles;
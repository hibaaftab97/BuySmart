import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';

export default StyleSheet.create({
  container: {
    width: vw * 90,
    height: vh * 6,
borderBottomColor:'light grey',
borderWidth:0.2*vh,
borderTopColor:'transparent',
borderLeftColor:'transparent',
borderRightColor:'transparent',

    backgroundColor: 'transparent',
  },
  label: {
    fontSize: vw * 4,
    color: '#111111',
  },
  iconStyle: {
    width: vw * 3.5,
    height: vw * 3.5,
    resizeMode: 'contain',
    marginRight: vw * 1,
  },
});
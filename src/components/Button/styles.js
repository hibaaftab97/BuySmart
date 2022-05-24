import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';

export default StyleSheet.create({
  container: {
    width: vw * 90,
    height: vh * 6,
    borderRadius: vw * 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8BC34A',
  },
  text: {
    fontSize: vw * 4,
    color: 'white',
  },
  iconStyle: {
    width: vw * 3.5,
    height: vw * 3.5,
    resizeMode: 'contain',
    marginRight: vw * 1,
  },
});
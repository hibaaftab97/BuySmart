import {StyleSheet} from 'react-native';
import {vh} from '../../utils/units';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    position: 'absolute',
    alignSelf: 'center',
    top: vh * 50,
    transform: [
      {
        translateY: -vh * 1,
      },
    ],
  },
});
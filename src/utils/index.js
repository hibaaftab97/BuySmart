import toast from 'react-native-simple-toast';
import {Platform} from 'react-native';

export const showToast = message => {
  console.log("mmm",message);
  if (Platform.OS == 'android') {
    return toast.show(message);
  } else {
    return setTimeout(() => toast.show(message), 800);
  }
};

export const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};
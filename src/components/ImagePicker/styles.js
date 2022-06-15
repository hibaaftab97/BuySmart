import { StyleSheet } from "react-native";
import {vw,vh} from "../../utils/units";

export default styles = StyleSheet.create({
  modalTouchable: {
    backgroundColor: "rgba(0,0,0,.5)",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: 100*vw,
    width: 100*vh,
  },
  modalContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10*vh,
    paddingTop: 8*vh,
    paddingBottom: 8*vh,
    alignItems: "center",
    paddingHorizontal: 10*vw,
  },
  check: {
    width: 10*vw,
    height: 10*vh,
    marginBottom: 10*vh,
  },
  title: {
    fontSize: 10*vh,
    marginVertical: 10*vh,
  },
  Message: {
    color: "#333333",
    fontSize: 10*vh,
    width: "80%",
    alignSelf: "flex-start",
    marginVertical: 10*vh,
  },
  redirect: {
    fontSize: 10*vh,
    marginTop: 10*vh,
  },
  
  cross: { width: 10*vh, height: 10*vh },
  imageBg: {
    backgroundColor: "white",
    borderTopRightRadius: 10*vh,
    borderTopLeftRadius: 10*vh,
    position: "absolute",

    paddingBottom: 10*vh,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    bottom: 0,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height:30*vh,
    width: 100*vw
    // minHeight:vh*20,
  },

  facebooktext: {
    fontSize: 1.5*vh,
    textAlign: "center",

    color: "black",
  },
  crossContainer: {
    alignItems: "flex-end",
    alignSelf: "flex-end",
    paddingTop: 10*vh,
    paddingRight: 10*vw,
  },
  // cross:{
  //   width: vw * 3,

  // },
 
 
  

});

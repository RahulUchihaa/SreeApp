import {StyleSheet, Dimensions} from 'react-native';
import {COLORS,BORDERRADIUS,FONTSIZE,SPACING} from './Constants';

const {width} = Dimensions.get('window');
export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:COLORS.White
  },
  lottieView: {
    width: 400,
    height: 400,
  },
 
});

export const Registrationstyles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.theme,
  
  },
  secondContainer:{
    backgroundColor:COLORS.White,
    marginTop:90,
    flex:1,
    borderTopLeftRadius:40,
    borderTopRightRadius:40
  },
  Heading:{
    color:"#8b3740",
    fontSize:30,
    padding:30,
    fontWeight:'bold'
  },
  SubHeading:{
    color:COLORS.Black,
    marginLeft:10,
    padding:30,
    fontSize:25,
    fontWeight:'bold',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: width * 0.1,
    alignItems: 'center',
  },
  signupButton: {
    width: width * 0.8,
    elevation: 6,
    backgroundColor: '#f6cb9c',
    height: width * 0.12,
    borderRadius: width * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: width * 0.05,
  },
  signupButtonText: {
    color: '#8b3740',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
  loginText: {
    color: '#8b3740',
  },
  login: {
    fontWeight: 'bold',
    fontSize: 14,
  },
})


export const OTPstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.theme,
  },
  secondContainer: {
    backgroundColor: '#ffffff',
    marginTop: 90,
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: width * 0.1,
  },
  SubHeading: {
    color: '#000000',
    marginLeft: 10,
    padding: 30,
    fontSize: 25,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    
  },
  signupButton: {
    width: width * 0.8,
    elevation: 6,
    backgroundColor: '#f6cb9c',
    height: width * 0.12,
    borderRadius: width * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: width * 0.05,
  },
  signupButtonText: {
    color: '#8b3740',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  otpInput: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.02,
    borderWidth: 1,
    borderColor: '#000000',
    fontSize: width * 0.05,
    textAlign: 'center',
  },
  subheading2: {
    fontSize: 16,
    
    marginTop: 10,
    textAlign: 'center',
  },
  resendCode: {
    color: '#8b3740',

    marginStart: 5,
  },
  resendCodeText: {
    marginStart: 10,
    fontSize: 15,
  },
  resendCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subheading: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'left',
    marginTop: 10,
  },
  OTPButton2: {
    width: '91%',
    borderRadius: 30,
    height: 50,
    marginBottom: 20,
    marginTop: 40,
    backgroundColor: '#0077b6',
    textAlign: 'center',
  },
});


export const OnBoardingstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
   
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width,
    height: width,
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: width * 0.1,
    color: COLORS.Black,
    marginBottom: width * 0.02,
  },
  subText: {
    flexWrap: 'wrap',
    fontSize: width * 0.05,
    width: width * 0.75,
    textAlign: 'center',
    lineHeight: width * 0.1,
    fontWeight: '400',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: width * 0.1,
    alignItems: 'center',
  },
  signupButton: {
    width: width * 0.8,
    elevation: 3,
    backgroundColor: '#f6cb9c',
    height: width * 0.12,
    borderRadius: width * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: width * 0.05,
  },
  signupButtonText: {
    color: '#8b3740',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
  loginText: {
    color: '#8b3740',
  },
  login: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export const Loginstyles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.theme,
  
  },
  secondContainer:{
    backgroundColor:COLORS.White,
    marginTop:90,
    flex:1,
    borderTopLeftRadius:40,
    borderTopRightRadius:40
  },
  Heading:{
    color:"#8b3740",
    fontSize:30,
    padding:30,
    fontWeight:'bold'
  },
  SubHeading:{
    color:COLORS.Black,
    marginLeft:10,
    padding:30,
    fontSize:25,
    fontWeight:'bold',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButton: {
    width: width * 0.8,
    elevation: 6,
    backgroundColor: '#f6cb9c',
    height: width * 0.12,
    borderRadius: width * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: width * 0.05,
  },
  signupButtonText: {
    color: '#8b3740',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
  loginText: {
    color: '#8b3740',
  },
  login: {
    fontWeight: 'bold',
    fontSize: 14,
  },
})


export const Profilestyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GreyBg,
    flex: 1,
    padding: 15,
  },
  Usernamestyle: {
    color: COLORS.Black,

    fontSize: 21,
  },
  Emailstyle: {
    color: COLORS.Black,

    fontSize: 14,
  },
  icon: {
    marginRight: 10,
    marginTop: 5,
  },
  Container: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: COLORS.White,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Containerwithourflex: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: COLORS.White,
    padding: 20,
  },
  Title: {
    color: COLORS.Black,
    fontWeight: '600',
    fontSize: 17,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  username: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.Black,
  },
});



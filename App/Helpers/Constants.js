import { Dimensions } from "react-native";


export const BASE_URL = `http://192.168.2.102:8000/api/`

export const ScreenNames = {
    HomeScreen : "Home",
    SplashScreen : "Splash",
    DetailsScreen:"Details",
    RegistrationScreen :"Registration",
    OnboardingScreen : "Onboarding",
    OTPScreen:"OTP",
    BottomTabScreen:"Bottom",
    Dashboard:"Dashboard",
    ProfileScreen:"Profile",
    LoginScreen:'Login'
}

export const header_shown_false = {
    headerShown:false
}


export const COLORS = {
    primaryBg : "#192023",
    Blue:"#1f87dc",
    White:"#FFFFFF",
    GreyBg:"#f5f5f5",
    Black:"#5c5c5c",
    DarkBlack:"#000000",
    buttonBg: "#1c87de",
    theme:"#f6cb9c",
    DarkGrey:"#3d3d3d",
    Transparent:"transparent",
    RedText:"#8b3740",
    primaryRedHex: '#DC3535',
    primaryOrangeHex: '#D17842',
    primaryBlackHex: '#0C0F14',
    primaryDarkGreyHex: '#141921',
    secondaryDarkGreyHex: '#21262E',
    primaryGreyHex: '#252A32',
    secondaryGreyHex: '#252A32',
    primaryLightGreyHex: '#52555A',
    secondaryLightGreyHex: '#AEAEAE',
    primaryWhiteHex: '#FFFFFF',
    primaryBlackRGBA: 'rgba(12,15,20,0.5)',
    secondaryBlackRGBA: 'rgba(0,0,0,0.7)'
}


// Onchange value for custom form input
export const onChangeByValueType = (inputProps, value, props) => {
    switch (props.inputName) {
        default:
            inputProps.field.onChange(value);
            break;
    }
};

export const INPUT_FIELD_NAME = {
    PHONE_NUMBER: `phoneNumber`,
    Full_NAME: `fullname`,
    EMAIL: `email`,
};

export const INPUT_PLACE_HOLDER_CONSTANTS = {
    PHONE_NUMBER: `Phone Number                                                            `,
    Full_NAME: `Full name                                                                    `,
    EMAIL: `Email                                                                   `,

};

export const FORM_INPUT_RULES = {
    phoneNumberRule: {
        required: {
            value: true,
            message: `Please enter the phone number`,
        },
        minLength: {
            value: 10,
            message: `Please enter 10 digit mobile number only`,
        },
        maxLength: {
            value: 10,
            message: `Please enter 10 digit mobile number`,
        },
    },

    emailAddressRule: {
        required: {
            value: true,
            message: `Please enter the email address`,
        },
        pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
            message: `Entered value does not match email format`
        }
    },

    fullnameRule: {
        required: {
            value: true,
            message: `Please enter your full name`,
        },
        minLength: {
            value: 3,
            message: `Full name should be of atleast 3 characters`,
        },
    },
};

export const stringConstants = {
    EMPTY: ``,
    SPACE: ` `
}
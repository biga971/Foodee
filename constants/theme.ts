import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    white: "#fff",
    black: "#000000",
    pink: '#F28482',
    pinkPercent: 'rgba(242, 132, 130, 0.25)',
    darkText: '#3D405B',
    green: '#84A59D',
    yellow: '#FFEF92',
    yellowNotification: '#FFFFF2',
    shadowNotificationColor: 'rgba(214, 211, 192, 0.4)',
    greenShadowColor: 'rgba(129, 178, 154, 0.4)',
    yellowShadowColor: 'rgba(242, 204, 143, 0.4)',
    tabShadowColor: 'rgba(194, 191, 172, 0.6)',
    pinkBox: '#F5CAC3',
    pinkButton: '#F7EDE2',

};
export const SIZES = {
    // font sizes
    largeTitle: 32,
    h1: 24,
    h2: 20, 
    h3: 16,
    h4: 14,
    h5: 13,
    small: 12,
    xsmall: 11,
    button: 17,
    headline: 17,
    body: 17,
    callout: 15,
    captation1: 13,
    captation2: 11,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Unbounded-Regular", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Unbounded-Regular", fontSize: SIZES.h1, lineHeight: 30 },
    h1Bold: { fontFamily: "Unbounded-Bold", fontSize: SIZES.h1, lineHeight: 30 },
    h2: { fontFamily: "Unbounded-Light", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Unbounded-Light", fontSize: SIZES.h3, lineHeight: 22 },
    h3Bold: { fontFamily: "Unbounded-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Unbounded-Regular", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Unbounded-Regular", fontSize: SIZES.h5, lineHeight: 22 },
    small: { fontFamily: "Unbounded-Regular", fontSize: SIZES.small, lineHeight: 20 },
    smallLight: { fontFamily: "Unbounded-Light", fontSize: SIZES.small, lineHeight: 20 },
    xsmall: { fontFamily: "Unbounded-Regular", fontSize: SIZES.xsmall, lineHeight: 22 },
    xsmallLight: { fontFamily: "Unbounded-Light", fontSize: SIZES.xsmall, lineHeight: 22 },
   
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;

import {Dimensions, StatusBar, Platform} from 'react-native';
const platform = Platform.OS;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const STATUS_BAR = StatusBar.currentHeight || 24;
export default {
    window: {
        width,
        height: platform == 'android' ? height - STATUS_BAR : height,
    },
    heightPercentageUnit: height * 0.01,
    widthPercentageUnit: width * 0.01,
    screenProportion: height / width,
    headerHeight: 0.1 * height,
    appBarHeight: 0.1 * height,
    isSmallDeviceWidth: width < 375,
    padding: 20,
    icon: 24
};

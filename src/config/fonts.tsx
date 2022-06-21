import DeviceUiInfo from './device';

const iconFontSizes = {
    smallIconFontSize: DeviceUiInfo.platform == 'ios' ? 11 : 13,
    mediumIconFontSize: DeviceUiInfo.platform == 'ios' ? 17 : 19,
    largeIconFontSize: DeviceUiInfo.platform == 'ios' ? 26 : 28,
    xLargeIconFontSize: DeviceUiInfo.platform == 'ios' ? 33 : 35,
};
const fontSizes = {
    smallFontSize: DeviceUiInfo.moderateScale(11),
    mediumSmallFontSize: DeviceUiInfo.moderateScale(12),
    mediumFontSize: DeviceUiInfo.moderateScale(13),
    mediumLargeFontSize: DeviceUiInfo.moderateScale(15),
    largeFontSize: DeviceUiInfo.moderateScale(16),
    xLargeFontSize: DeviceUiInfo.moderateScale(25),
};

export default {
    ...iconFontSizes,
    ...fontSizes,
};

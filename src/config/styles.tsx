import colors from './colors';
import fonts from './fonts';

export default {
    shadowPattern: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    page: {
        flex: 1,
        backgroundColor: colors.white,
        paddingVertical: 24,
    },
    colorTextLight: {
        color: colors.white,
    }
};

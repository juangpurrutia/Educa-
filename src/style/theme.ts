import { extendTheme } from "native-base";

export const theme = extendTheme({
    config: {
        useSystemColorMode: false,
        initialColorMode: 'Light',
    },
    colors: {
        light: {
            body: '#F5F5F5'
        },
        dark: {
            body: 'blueGray.800'
        },
    },
    shadows: {
        '10': {
            shadowColor: "#F5F5F5",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.6,
            shadowRadius: 6,
            elevation: 4,
        },
    },
});
import React from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import DrawerRoutes from './drawer.routes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignIn from '../pages/Entities/Credentials/SigIn';
import { useColorMode } from 'native-base';
import Dashboard from '../pages/Dashboard';

export type StackParamList = {
    SignIn: undefined;
    Dashboard: undefined;
};

export default function Routes() {

    const Drawer = createDrawerNavigator();
    const { colorMode } = useColorMode();

    return (
        <NavigationContainer theme={colorMode === 'light' ? DefaultTheme : DarkTheme}>
            <Drawer.Navigator drawerContent={DrawerRoutes} >
                <Drawer.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                <Drawer.Screen name="Central" component={Dashboard} options={{ headerShown: false }} />
                <Drawer.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

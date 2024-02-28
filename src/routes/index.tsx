import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import DrawerRoutes from './drawer.routes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignIn from '../pages/Entities/Credentials/SigIn';
import { theme } from '../style/theme';
import { useColorMode } from 'native-base';

export default function Routes() {

    const Drawer = createDrawerNavigator();
    const { colorMode } = useColorMode();

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={DrawerRoutes} screenOptions={{ drawerActiveBackgroundColor: colorMode === "light" ? theme.colors.light.body : theme.colors.dark.body }}>
                <Drawer.Screen name="OtherScreen" component={SignIn} options={{ headerShown: false }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

import React from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import DrawerRoutes from './drawer.routes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignIn from '../pages/Entities/Credentials/SigIn';
import { useColorMode } from 'native-base';
import Dashboard from '../pages/Dashboard';
import Campaign from '../pages/Entities/Campaign';
import CampaignCreate from '../pages/Entities/Campaign/Create';
import CampaignAlter from '../pages/Entities/Campaign/Alter';
import Central from '../pages/Entities/Central';
import CentralCreate from '../pages/Entities/Central/Create';
import CentralAlter from '../pages/Entities/Central/Alter';

export type StackParamList = {
    SignIn: undefined;
    Dashboard: undefined;
    Campaign: undefined;
    CampaignCreate: undefined;
    CampaignAlter: undefined;
    Central: undefined;
    CentralCreate: undefined;
    CentralAlter: undefined;
};

export default function Routes() {

    const Drawer = createDrawerNavigator();
    const { colorMode } = useColorMode();

    return (
        <NavigationContainer theme={colorMode === 'light' ? DefaultTheme : DarkTheme}>
            <Drawer.Navigator drawerContent={DrawerRoutes} >
                <Drawer.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                <Drawer.Screen name="Central" component={Central} options={{ headerShown: false }} />
                <Drawer.Screen name="CentralCreate" component={CentralCreate} options={{ headerShown: false }} />
                <Drawer.Screen name="CentralAlter" component={CentralAlter} options={{ headerShown: false }} />
                <Drawer.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
                <Drawer.Screen name="Campaign" component={Campaign} options={{ headerShown: false }} />
                <Drawer.Screen name="CampaignCreate" component={CampaignCreate} options={{ headerShown: false }} />
                <Drawer.Screen name="CampaignAlter" component={CampaignAlter} options={{ headerShown: false }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

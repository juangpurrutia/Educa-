import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HStack, Text, View, useColorMode } from "native-base";
import { TouchableOpacity } from "react-native";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '.';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';

type TabParamList = {
    Dashboard: undefined;
    SignIn: undefined;
};

type ProfileScreenNavigationDashboardProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, 'Dashboard'>,
    StackNavigationProp<StackParamList>
>;

type ProfileScreenNavigationSignInProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, 'SignIn'>,
    StackNavigationProp<StackParamList>
>;

type PropsTabCentral = {
    setCurrentRoute: (currentRoute: string) => void;
    currentRoute: string;
}

export default function TabCentral({ setCurrentRoute, currentRoute }: PropsTabCentral) {
    const { colorMode } = useColorMode();

    const navigationDashboard = useNavigation<ProfileScreenNavigationDashboardProp>();
    const navigationSignIn = useNavigation<ProfileScreenNavigationSignInProp>();

    return (
        <View style={{ marginTop: 16, paddingHorizontal: 16 }}>
            <HStack space={2} alignItems="center">
                <MaterialCommunityIcons name="thought-bubble" size={22} color={colorMode === 'light' ? "black" : "white"} />
                <Text style={{ fontWeight: 'bold' }} fontSize="24">Central</Text>
            </HStack>
            <TouchableOpacity onPress={() => {
                navigationSignIn.navigate('SignIn');
                setCurrentRoute("SignIn");
            }}>
                <Text marginLeft="40px" fontSize="16" color={currentRoute === "SignIn" ? "blue.400" : undefined}>Central</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigationDashboard.navigate('Dashboard');
                setCurrentRoute("Dashboard");
            }}>
                <Text marginLeft="40px" fontSize="16" color={currentRoute === "Dashboard" ? "blue.400" : undefined}>Dashboard</Text>
            </TouchableOpacity>
        </View>
    );
}
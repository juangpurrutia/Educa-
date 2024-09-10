import { Entypo } from '@expo/vector-icons';
import { HStack, Text, View, useColorMode } from "native-base";
import { TouchableOpacity } from "react-native";
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '.';

type TabParamList = {
    Campaign: undefined;
};

type ProfileScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, 'Campaign'>,
    StackNavigationProp<StackParamList>
>;

type PropsTabCampaign = {
    setCurrentRoute: (currentRoute: string) => void;
    currentRoute: string;
}

export default function TabCampaign({ setCurrentRoute, currentRoute }: PropsTabCampaign) {
    const { colorMode } = useColorMode();
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    return (
        <View style={{ marginTop: 16, paddingHorizontal: 16 }}>
            <HStack space={2} alignItems="center">
                <Entypo name="new-message" size={22} color={colorMode === 'light' ? "black" : "white"} />
                <Text style={{ fontWeight: 'bold' }} fontSize="24">Cadastro</Text>
            </HStack>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Campaign');
                setCurrentRoute("Campaign");
            }}>
                <Text marginLeft="40px" fontSize="16" color={currentRoute === "Campaign" ? "blue.400" : undefined}>Cursos</Text>
            </TouchableOpacity>
        </View>
    );
}
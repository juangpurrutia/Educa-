import { MaterialCommunityIcons } from '@expo/vector-icons';
import SignIn from '../pages/Entities/Credentials/SigIn';
import Dashboard from '../pages/Dashboard';
import { HStack, Text, View } from "native-base";
import { TouchableOpacity } from "react-native";

export default function TabCentral() {

    return (
        <View style={{ marginTop: 16, paddingHorizontal: 16 }}>
            <HStack space={2} alignItems="center">
                <MaterialCommunityIcons name="thought-bubble" size={22} color={"black"} />
                <Text style={{ fontWeight: 'bold' }} fontSize="24">Central</Text>
            </HStack>
            <TouchableOpacity onPress={() => { SignIn }}>
                <Text marginLeft="40px" fontSize="16">SignIn</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { Dashboard }}>
                <Text marginLeft="40px" fontSize="16">Dashboard</Text>
            </TouchableOpacity>
        </View>
    );
}
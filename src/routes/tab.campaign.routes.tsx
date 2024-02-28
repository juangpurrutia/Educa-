import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HStack, Text, View } from "native-base";
import { TouchableOpacity } from "react-native";
import Dashboard from '../pages/Dashboard';


export default function TabCampaign() {

    return (
        <View style={{ marginTop: 16, paddingHorizontal: 16 }}>
            <HStack space={2} alignItems="center">
                <MaterialCommunityIcons name="floor-lamp" size={24} color={"black"} />
                <Text style={{ fontWeight: 'bold' }} fontSize="24">Cadastro</Text>
            </HStack>
            <TouchableOpacity onPress={() => Dashboard}>
                <Text marginLeft="40px" fontSize="16">Campanhas</Text>
            </TouchableOpacity>
        </View>
    );
}
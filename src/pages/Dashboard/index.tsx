import { Text } from "native-base";
import BodyColorMode from "../../components/BodyColorMode";
import Header from "../../components/Header";
import ColorModeButton from "../../components/ColorModeButton";

type Props = {
    navigation: any
}

export default function Dashboard({ navigation }: Props) {
    return (
        <BodyColorMode>
            <Header navigation={navigation} />
            <Text textAlign="center">
                Dashboard
            </Text>
            <ColorModeButton />
        </BodyColorMode>
    );
}
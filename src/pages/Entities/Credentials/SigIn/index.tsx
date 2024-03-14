import Header from "../../../../components/Header";
import ColorModeButton from "../../../../components/ColorModeButton";
import BodyColorMode from "../../../../components/BodyColorMode";
import { Text } from "native-base";

type Props = {
    navigation: any
}

export default function SignIn({ navigation }: Props) {



    return (
        <BodyColorMode>
            <Header navigation={navigation} />
            <Text textAlign="center">
                SignIn
            </Text>
            <ColorModeButton />
        </BodyColorMode>
    )
}
import Header from "../../../../components/Header";
import ColorModeButton from "../../../../components/ColorModeButton";
import BodyColorMode from "../../../../components/BodyColorMode";

type Props = {
    navigation: any
}

export default function SignIn({ navigation }: Props) {



    return (
        <BodyColorMode>
            <Header navigation={navigation} />
            <ColorModeButton />
        </BodyColorMode>
    )
}
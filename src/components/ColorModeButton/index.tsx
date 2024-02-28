import { Button, useColorMode } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

export default function ColorModeButton() {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <>
            {
                colorMode === 'light' ?
                    (
                        <>
                            <Button onPress={toggleColorMode}
                                backgroundColor="yellow.300"
                                w="60" h="60"
                                borderRadius="full"
                                alignItems="center"
                                right="30"
                                bottom="60"
                                position="absolute"
                                shadow="9">
                                <MaterialIcons name="dark-mode" size={30} color="black" />
                            </Button>
                        </>

                    )
                    : (
                        <>
                            <Button onPress={toggleColorMode}
                                backgroundColor="yellow.300"
                                w="60" h="60"
                                borderRadius="full"
                                alignItems="center"
                                right="30"
                                bottom="60"
                                position="absolute"
                                shadow="10">
                                <MaterialIcons name="light-mode" size={30} color="black" />
                            </Button>
                        </>

                    )
            }
        </>
    );
}
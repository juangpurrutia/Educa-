import { Flex, HStack, Image, Text, useColorMode } from "native-base";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
    navigation: any;
}

export default function Header({ navigation }: HeaderProps) {
    const { colorMode } = useColorMode();


    return (
        <>
            {
                colorMode === 'light' ?
                    (
                        <>
                            <Flex backgroundColor="white" shadow="9">
                                <HStack justifyContent="start" marginTop="20" marginLeft="4" space={5}>
                                    <AntDesign name="bars" size={50} color="black" onPress={() => navigation.toggleDrawer()} />
                                    <HStack space={2} marginLeft="2">
                                        <Image source={require("../../../assets/ideia_logo_lampada_2.png")} alt="LogoLamp" resizeMode="contain" width={60} height={60} />
                                        <Text bold fontSize="2xl" color="black" marginY="auto">
                                            Gestão de Ideias
                                        </Text>
                                    </HStack>
                                </HStack>
                            </Flex>
                        </>

                    )
                    : (
                        <>
                            <Flex backgroundColor="white" shadow={10}>
                                <HStack justifyContent="start" marginTop="20" marginLeft="4" space={5}>
                                    <AntDesign name="bars" size={50} color="black" onPress={() => navigation.toggleDrawer()} />
                                    <HStack space={2} marginLeft="2">
                                        <Image source={require("../../../assets/ideia_logo_lampada_2.png")} alt="LogoLamp" resizeMode="contain" width={60} height={60} />
                                        <Text bold fontSize="2xl" color="black" marginY="auto">
                                            Gestão de Ideias
                                        </Text>
                                    </HStack>
                                </HStack>
                            </Flex>
                        </>
                    )
            }
        </>
    );
}
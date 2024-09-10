import { Button, Flex, HStack, Image, StatusBar, Text, useColorMode } from "native-base";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import React from "react";

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
                        <Flex backgroundColor="#e8e8e8" shadow="9">
                            <StatusBar animated={true} barStyle="dark-content" showHideTransition="fade" backgroundColor="white" />
                            <HStack justifyContent="space-between" marginTop="20" marginLeft="4" marginRight="4" space={2}>
                                <AntDesign name="bars" size={50} color="black" onPress={() => navigation.toggleDrawer()} />
                                <HStack space={2}>
                                    <Image marginBottom={3} source={require("../../../assets/ideia_logo_lampada_1.png")} alt="LogoLamp" resizeMode="contain" width={50} height={50} />
                                    <Text bold fontSize="2xl" color="black" marginY="auto">
                                        Educa+
                                    </Text>
                                </HStack>
                                <AntDesign name="poweroff" size={30} color="black" marginTop={15} onPress={() => {
                                        navigation.navigate('SignIn'); 
                                    }} />
                            </HStack>
                        </Flex>
                    </>

                )
                : (
                    <>
                        <Flex backgroundColor="#292929" shadow="9">
                            <StatusBar animated={true} barStyle="light-content" showHideTransition="fade" backgroundColor="black" />
                            <HStack justifyContent="space-between" marginTop="20" marginLeft="4" marginRight="4" space={2}>
                                <AntDesign name="bars" size={50} color="white" onPress={() => navigation.toggleDrawer()} />
                                <HStack space={2}>
                                    <Image marginBottom={3} source={require("../../../assets/ideia_logo_lampada_1.png")} alt="LogoLamp" resizeMode="contain" width={50} height={50} />
                                    <Text bold fontSize="2xl" color="white" marginY="auto">
                                        Educa+
                                    </Text>
                                </HStack>
                                <AntDesign name="poweroff" size={30} color="white" marginTop={15} marginLeft={70} onPress={() => {
                                        navigation.navigate('SignIn'); 
                                    }} />
                            </HStack>
                        </Flex>
                    </>
                )
            }
        </>
    );
}
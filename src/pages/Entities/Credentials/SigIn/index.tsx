import Header from "../../../../components/Header";
import ColorModeButton from "../../../../components/ColorModeButton";
import BodyColorMode from "../../../../components/BodyColorMode";
import { Button, Image, Input, Text, useColorMode, View } from "native-base";
import React, { useState } from "react";
import { useLogin } from "../../../../hooks/useLogin";
import { Alert } from "react-native";

type Props = {
    navigation: any
}

export default function SignIn({ navigation }: Props) {

    const { colorMode } = useColorMode();

    return (
        <BodyColorMode>
            <Header navigation={navigation} />
            {
            colorMode === 'light' ?
            (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: 'white',
                alignItems: 'center',
            }}>
                <View style={{
                    width: '80%',
                    backgroundColor: '#FB2D2D',
                    alignItems: 'center',
                    paddingVertical: 30,
                }}>
                    <Image
                        source={require('../../../../../assets/ideia_logo1.png')}
                        alt="Logo"
                        style={{
                            width: 150,
                            height: 150,
                            resizeMode: 'contain',
                        }} />
                </View>
                <View style={{
                    width: '80%',
                    backgroundColor: '#eeece6',
                    alignItems: 'center',
                    paddingVertical: 30,
                    padding: 10
                }}>
                    <Input
                        placeholder="Matrícula"
                        marginBottom={5}
                        style={{
                            backgroundColor: '#eeece6',
                            width: '70%',
                            padding: 10,
                            marginTop: 20,
                        }}
                    />
                    <Input
                        placeholder="Senha"
                        style={{
                            backgroundColor: '#eeece6',
                            width: '70%',
                            padding: 10,
                            marginTop: 20,
                        }}
                    />
                    <Button
                        style={{
                            backgroundColor: '#FB2D2D',
                            marginTop: 20,
                            padding: 10,
                            width: '70%',
                            borderRadius: 10,
                        }}>
                        <Text>Entrar</Text>
                    </Button>
                    <Text style={{
                            marginTop: 20,
                        }}>
                        Crie sua Conta
                    </Text>
                </View>
            </View>
            )
            : (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: 'black',
                alignItems: 'center',
            }}>
                <View style={{
                    width: '80%',
                    backgroundColor: '#FB2D2D',
                    alignItems: 'center',
                    paddingVertical: 30,
                }}>
                    <Image
                        source={require('../../../../../assets/ideia_logo1.png')}
                        alt="Logo"
                        style={{
                            width: 150,
                            height: 150,
                            resizeMode: 'contain',
                        }} />
                </View>
                <View style={{
                    width: '80%',
                    backgroundColor: '#292929',
                    alignItems: 'center',
                    paddingVertical: 30,
                    padding: 10
                }}>
                    <Input
                        placeholder="Matrícula"
                        placeholderTextColor="#d6d6d6"
                        marginBottom={5}
                        style={{
                            backgroundColor: '#292929',
                            width: '70%',
                            padding: 10,
                            marginTop: 20,
                        }}
                    />
                    <Input
                        placeholder="Senha"
                        placeholderTextColor="#d6d6d6"
                        style={{
                            backgroundColor: '#292929',
                            width: '70%',
                            padding: 10,
                            marginTop: 20,
                        }}
                    />
                    <Button
                        style={{
                            backgroundColor: '#FB2D2D',
                            marginTop: 20,
                            padding: 10,
                            width: '70%',
                            borderRadius: 10,
                        }}>
                        <Text color="black">Entrar</Text>
                    </Button>
                    <Text style={{
                            marginTop: 20,
                        }}>
                        Entre como anônimo: Matrícula = 10
                    </Text>
                </View>
            </View>
            )
            }
        </BodyColorMode>
    );
}
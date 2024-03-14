import Header from "../../../../components/Header";
import ColorModeButton from "../../../../components/ColorModeButton";
import BodyColorMode from "../../../../components/BodyColorMode";
import { Button, Image, Input, Text, View } from "native-base";
import React from "react";

type Props = {
    navigation: any
}

export default function SignIn({ navigation }: Props) {



    return (
        <BodyColorMode>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: 'white',
                alignItems: 'center',
            }}>
                <View style={{
                    width: '80%',
                    backgroundColor: '#fcc42c',
                    alignItems: 'center',
                    paddingVertical: 30,
                }}>
                    <Image
                        source={require('../../../../../assets/ideia_logo.png')}
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
                }}>
                    <Input
                        placeholder="Matrícula"
                        style={{
                            backgroundColor: '#f0f0f0',
                            width: '70%',
                            padding: 10,
                            marginTop: 20,
                        }}
                    />
                    <Button
                        onPress={() => {
                            // Adicione aqui a função para lidar com o clique no botão "Entrar"
                        }}
                        style={{
                            backgroundColor: '#fcc42c',
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
                        Entre como anônimo: Matrícula = 10
                    </Text>
                </View>
            </View>
        </BodyColorMode>
    )
}
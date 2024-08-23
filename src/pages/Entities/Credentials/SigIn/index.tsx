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
    const [matricula, setMatricula] = useState<string>('');

    const { mutate: login, status } = useLogin();  

    const isLoading = status === "pending"; 

    const handleLogin = () => {
        if (!matricula) {
            Alert.alert("Erro", "Por favor, insira sua matrícula.");
            return;
        }
    
        console.log("Matricula digitada:", matricula); 
    
        login(
            { matricula },
            {
                onSuccess: (data) => {
                    console.log("Dados de sucesso:", data); 
                    Alert.alert("Bem-vindo", `Olá, ${data.usuario.nome}!`);
                },
                onError: (error) => {
                    console.error("Erro na requisição:", error.message); 
                    //console.error("Detalhes do erro:", error.toJSON()); 
                    Alert.alert("Erro", "Não foi possível conectar ao servidor.");
                }
            }
        );
    };

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
                    backgroundColor: '#fcc42c',
                    alignItems: 'center',
                    paddingVertical: 30,
                }}>
                    <Image
                        source={require('../../../../../assets/ideia_logo.png')}
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
                }}>
                    <Input
                        placeholder="Matrícula"
                        value={matricula}
                        onChangeText={setMatricula}
                        style={{
                            backgroundColor: '#eeece6',
                            width: '70%',
                            padding: 10,
                            marginTop: 20,
                        }}
                    />
                    <Button
                        onPress={handleLogin}
                        isLoading={isLoading} // Use 'isLoading' aqui
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
                    backgroundColor: '#fcc42c',
                    alignItems: 'center',
                    paddingVertical: 30,
                }}>
                    <Image
                        source={require('../../../../../assets/ideia_logo.png')}
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
                }}>
                    <Input
                        placeholder="Matrícula"
                        placeholderTextColor="#d6d6d6"
                        value={matricula}
                        onChangeText={setMatricula}
                        style={{
                            backgroundColor: '#292929',
                            width: '70%',
                            padding: 10,
                            marginTop: 20,
                        }}
                    />
                    <Button
                        onPress={handleLogin}
                        isLoading={isLoading} // Use 'isLoading' aqui
                        style={{
                            backgroundColor: '#fcc42c',
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
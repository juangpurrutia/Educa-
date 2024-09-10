import { Text, View, TouchableOpacity, TextInput, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BodyColorMode from "../../../../components/BodyColorMode";
import Header from "../../../../components/Header";
import ColorModeButton from "../../../../components/ColorModeButton";
import React from "react";
import { useColorMode } from "native-base";

type Props = {
    navigation: any
}

export default function CampaignCreate({ navigation }: Props) {

    const { colorMode } = useColorMode();
    
    return (
        <BodyColorMode>
            <Header navigation={navigation} />
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
                colorMode === 'light' ?
                (
                <>
                <View style={{ backgroundColor: 'white', width: '100%' }}>
                    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Campanhas - Nova Campanha</Text>
                        <View style={{ height: 1, backgroundColor: '#fcc42c', marginTop: 10 }} />
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', width: '100%' }}>   
                    {/* Botão de Ativar/Desativar */}
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                        <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#5cb85c', borderRadius: 5, marginRight: 10 }}>
                            <Text style={{ color: 'white' }}>Ativada</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#d9534f', borderRadius: 5 }}>
                            <Text style={{ color: 'white' }}>Desativada</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Imagem */}
                    <Image source={require('../../../../../assets/ideia_logo_lampada_1.png')} style={{ width: '100%', height: 100, marginTop: 20 }} alt="Logo" resizeMode="contain" />

                    {/* Campos de Input */}
                    <View style={{ width: '80%', marginTop: 20 }}>
                        <TextInput placeholder="Título" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Descrição" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Conteúdo" multiline style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5, height: 100 }} />
                    </View>

                    {/* Botões Salvar e Cancelar */}
                    <View style={{ width: '80%', marginBottom: 20, marginTop: 20 }}>
                        <TouchableOpacity style={{ backgroundColor: '#FB2D2D', padding: 15, borderRadius: 5, marginBottom: 10, alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#FB2D2D', padding: 15, borderRadius: 5, alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </>
                )
                : (
                <>
                <View style={{ backgroundColor: 'black', width: '100%' }}>
                    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Campanhas - Nova Campanha</Text>
                        <View style={{ height: 1, backgroundColor: '#fcc42c', marginTop: 10 }} />
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', width: '100%' }}>   
                    {/* Botão de Ativar/Desativar */}
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                        <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#5cb85c', borderRadius: 5, marginRight: 10 }}>
                            <Text style={{ color: 'white' }}>Ativada</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#d9534f', borderRadius: 5 }}>
                            <Text style={{ color: 'white' }}>Desativada</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Imagem */}
                    <Image source={require('../../../../../assets/ideia_logo_lampada_1.png')} style={{ width: '100%', height: 100, marginTop: 20 }} alt="Logo" resizeMode="contain" />

                    {/* Campos de Input */}
                    <View style={{ width: '80%', marginTop: 20 }}>
                        <TextInput placeholder="Título" placeholderTextColor="#d6d6d6" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Descrição" placeholderTextColor="#d6d6d6" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Conteúdo" placeholderTextColor="#d6d6d6" multiline style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5, height: 100 }} />
                    </View>

                    {/* Botões Salvar e Cancelar */}
                    <View style={{ width: '80%', marginBottom: 20, marginTop: 20 }}>
                        <TouchableOpacity style={{ backgroundColor: '#fcc42c', padding: 15, borderRadius: 5, marginBottom: 10, alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#fcc42c', padding: 15, borderRadius: 5, alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </>
                )
            }
            </ScrollView>
            <ColorModeButton />
        </BodyColorMode>
    );
}
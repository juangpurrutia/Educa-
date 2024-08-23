import { Text, View, TouchableOpacity, TextInput, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BodyColorMode from "../../../../components/BodyColorMode";
import Header from "../../../../components/Header";
import ColorModeButton from "../../../../components/ColorModeButton";
import React, { useState } from "react";
import { useColorMode } from "native-base";

type Props = {
    navigation: any
}
 
export default function CentralCreate({ navigation }: Props) {

    const { colorMode } = useColorMode();
    const [isChecked, setIsChecked] = useState(false);

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
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Central - Nova Ideia</Text>
                        <View style={{ height: 1, backgroundColor: '#fcc42c', marginTop: 10 }} />
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', width: '100%' }}>   

                    {/* Imagem */}
                    <Image source={require('../../../../../assets/ideia_logo.png')} style={{ width: '100%', height: 100, marginTop: 20 }} resizeMode="contain" />

                    {/* Campos de Input */}
                    <View style={{ width: '80%', marginTop: 20 }}>
                        <TextInput placeholder="Título" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Situação" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Criado em" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Campanha" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Tema" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Responsável" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Descrição" multiline style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5, height: 100 }} />
                    </View>

                    <View style={{ paddingHorizontal: 10, paddingTop: 10, paddingBottom: 20 }}>
                        <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ width: 24, height: 24, borderWidth: 2, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                            {isChecked && <AntDesign name="check" size={18} color="black" />}
                        </View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20}}>Mensurável</Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{ width: '80%', marginBottom: 30 }}>
                        <TextInput placeholder="Inicio da Implantação" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Data Término" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Valor Atingido" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="O Que?" multiline style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5, height: 100 }} />
                        <TextInput placeholder="Onde?" multiline style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5, height: 100 }} />
                        <TextInput placeholder="Como?" multiline style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5, height: 100 }} />
                        <TextInput placeholder="Por que?" multiline style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5, height: 100 }} />
                    </View>

                    <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Autores</Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10 }}>
                        <View style={{ backgroundColor: 'rgba(174, 174, 189, 0.1)', width: 300, height: 400, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Arquivo</Text>
                            <View style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 10, width: '100%' }} />
                            <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10, padding: 20 }}></Text>
                            
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Tamanho</Text>
                            <View style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 10, width: '100%' }} />
                            <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10, padding: 20 }}></Text>

                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Data de Upload</Text>
                            <View style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 10, width: '100%' }} />
                            <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10, padding: 5 }}></Text>
                        </View>
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
                : (
                <>
                <View style={{ backgroundColor: 'black', width: '100%' }}>
                    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: "white" }}>Central - Nova Ideia</Text>
                        <View style={{ height: 1, backgroundColor: '#fcc42c', marginTop: 10 }} />
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', width: '100%' }}>   

                    {/* Imagem */}
                    <Image source={require('../../../../../assets/ideia_logo_lampada_2.png')} style={{ width: '100%', height: 100, marginTop: 20 }} resizeMode="contain" />

                    {/* Campos de Input */}
                    <View style={{ width: '80%', marginTop: 20 }}>
                        <TextInput placeholder="Título" placeholderTextColor="#d6d6d6" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Situação" placeholderTextColor="#d6d6d6" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Criado em" placeholderTextColor="#d6d6d6" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Campanha" placeholderTextColor="#d6d6d6" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Tema" placeholderTextColor="#d6d6d6" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Responsável" placeholderTextColor="#d6d6d6" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Descrição" multiline placeholderTextColor="#d6d6d6" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5, height: 100 }} />
                    </View>

                    <View style={{ paddingHorizontal: 10, paddingTop: 10, paddingBottom: 20 }}>
                        <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ width: 24, height: 24, borderWidth: 2, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10, borderColor: 'white' }}>
                            {isChecked && <AntDesign name="check" size={18} color="white" />}
                        </View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: "white"}}>Mensurável</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '80%', marginBottom: 30 }}>
                        <TextInput placeholder="Inicio da Implantação" placeholderTextColor="#d6d6d6" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Data Término" placeholderTextColor="#d6d6d6" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="Valor Atingido" placeholderTextColor="#d6d6d6" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }} />
                        <TextInput placeholder="O Que?" multiline placeholderTextColor="#d6d6d6" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5, height: 100 }} />
                        <TextInput placeholder="Onde?" multiline placeholderTextColor="#d6d6d6" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5, height: 100 }} />
                        <TextInput placeholder="Como?" multiline placeholderTextColor="#d6d6d6" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5, height: 100 }} />
                        <TextInput placeholder="Por que?" multiline placeholderTextColor="#d6d6d6" style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5, height: 100 }} />
                    </View>

                    <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10, color: 'white' }}>Autores</Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10 }}>
                        <View style={{ backgroundColor: '#292929', width: 300, height: 400, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Arquivo</Text>
                            <View style={{ height: 1, backgroundColor: '#858282', marginTop: 10, width: '100%' }} />
                            <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10, padding: 20 }}></Text>
                            
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Tamanho</Text>
                            <View style={{ height: 1, backgroundColor: '#858282', marginTop: 10, width: '100%' }} />
                            <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10, padding: 20 }}></Text>

                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Data de Upload</Text>
                            <View style={{ height: 1, backgroundColor: '#858282', marginTop: 10, width: '100%' }} />
                            <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10, padding: 5 }}></Text>
                        </View>
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
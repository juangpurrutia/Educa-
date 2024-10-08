import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons"; 
import { MaterialIcons } from '@expo/vector-icons';
import BodyColorMode from "../../../components/BodyColorMode";
import Header from "../../../components/Header";
import ColorModeButton from "../../../components/ColorModeButton";
import React from "react";
import { useColorMode } from "native-base";
import { addWhitelistedNativeProps } from "react-native-reanimated/lib/typescript/ConfigHelper";

type Props = {
    navigation: any
}

export default function Central({ navigation }: Props) {
    const { colorMode } = useColorMode();
    
    return (
        <BodyColorMode>
            <Header navigation={navigation} />
            <ScrollView >
            {
                colorMode === 'light' ?
                (
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Central</Text>
                        <View style={{ height: 1, backgroundColor: '#fcc42c', marginTop: 10 }} />
                    </View>
                    
                    {/* Botão Nova Curso */}
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 20 }}
                        onPress={() => {
                            navigation.navigate('CentralCreate'); 
                        }}
                    >
                        <AntDesign name="plus" size={24} color="black" />
                        <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 20 }}>Novo Estudo</Text>
                    </TouchableOpacity>

                    <View style={{ paddingHorizontal: 20, paddingTop: 30, marginTop: 30 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: "center" }}>Meus Estudos</Text>
                        <View style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 10 }} />
                    </View>

                    {/* Div retangular com informações */}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10, marginTop: 50, marginBottom: 10 }}>
                        <View style={{ backgroundColor: '#e8e8e8', width: 400, height: 500, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 25 }}> <MaterialIcons name="lightbulb" size={24} color="yellow" /> Estudar 2° Guerra Mundial</Text>

                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Situação</Text>
                            <View style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 10, width: '100%' }} />
                            <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10, padding: 20 }}>Em Análise</Text>

                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Tema</Text>
                            <View style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 10, width: '100%' }} />
                            <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10, padding: 20 }}>História</Text>

                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Curso</Text>
                            <View style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 10, width: '100%' }} />
                            <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 1, padding: 20 }}> Curso associado para ajudar no Estudo - História - Entenda tudo sobre a 2° Guerra mundial </Text>
                        
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                            <TouchableOpacity
                                style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 20 }}
                                onPress={() => {
                                    navigation.navigate('CentralAlter'); 
                                }}
                            >
                                <AntDesign name="edit" size={25} color="black" /> 
                            </TouchableOpacity>
                                Visualizar
                            </Text>
                        </View>
                    </View>
                </View>
                )
                : (
                
                    <View style={{ flex: 1, backgroundColor: 'black' }}>
                    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Central</Text>
                        <View style={{ height: 1, backgroundColor: '#fcc42c', marginTop: 10 }} />
                    </View>
                    
                    {/* Botão Nova Curso */}
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 20 }}
                        onPress={() => {
                            navigation.navigate('CentralCreate'); 
                        }}
                    >
                        <AntDesign name="plus" size={24} color="white" />
                        <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 20, color: 'white' }}>Novo Estudo</Text>
                    </TouchableOpacity>

                    <View style={{ paddingHorizontal: 20, paddingTop: 30, marginTop: 30 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: "center", color: 'white' }}>Meus Estudos</Text>
                        <View style={{ height: 1, backgroundColor: '#858282', marginTop: 10 }} />
                    </View>

                    {/* Div retangular com informações */}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10, marginTop: 50, marginBottom: 10 }}>
                        <View style={{ backgroundColor: '#292929', width: 400, height: 500, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 25, color: 'white' }}> <MaterialIcons name="lightbulb" size={24} color="yellow" /> Estudar 2° Guerra Mundial</Text>

                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Situação</Text>
                            <View style={{ height: 1, backgroundColor: '#858282', marginTop: 10, width: '100%' }} />
                            <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10, padding: 20, color: 'white' }}>Em Análise</Text>

                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Tema</Text>
                            <View style={{ height: 1, backgroundColor: '#858282', marginTop: 10, width: '100%' }} />
                            <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10, padding: 20, color: 'white' }}>História</Text>

                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Curso</Text>
                            <View style={{ height: 1, backgroundColor: '#858282', marginTop: 10, width: '100%' }} />
                            <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 1, padding: 20, color: 'white' }}> Curso associado para ajudar no Estudo - História - Entenda tudo sobre a 2° Guerra mundial </Text>
                        
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                            <TouchableOpacity
                                style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 20 }}
                                onPress={() => {
                                    navigation.navigate('CentralAlter'); 
                                }}
                            >
                                <AntDesign name="edit" size={25} color="white" /> 
                            </TouchableOpacity>
                                Visualizar
                            </Text>
                        </View>
                    </View>
                </View>
                )
            }
            </ScrollView>
            <ColorModeButton />
        </BodyColorMode>
    );
}
import { Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BodyColorMode from "../../../components/BodyColorMode";
import Header from "../../../components/Header";
import ColorModeButton from "../../../components/ColorModeButton";
import React, { useState } from "react";
import { useColorMode } from "native-base";
import { useCampaigns } from "../../../hooks/useCampaigns";

type Props = {
    navigation: any;
};

export default function Campaign({ navigation }: Props) {
    const { colorMode } = useColorMode();
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    const paginationSize = 10;

    // Use o hook personalizado para buscar campanhas
    const { data: campaigns, isLoading, isError, error } = useCampaigns();

    return (
        <BodyColorMode>
            <Header navigation={navigation} />
            <ScrollView>
                {colorMode === 'light' ? (
                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}> 
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Campanhas</Text>
                            <View style={{ height: 1, backgroundColor: '#fcc42c', marginTop: 10 }} />
                        </View>

                        {/* Botão Nova Campanha */}
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 20 }}
                            onPress={() => {
                                navigation.navigate('CampaignCreate');
                            }}
                        >
                            <AntDesign name="plus" size={24} color="black" />
                            <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 20 }}>Nova Campanha</Text>
                        </TouchableOpacity>

                        {/* Mostrar carregando ou erro */}
                        {isLoading ? (
                            <ActivityIndicator size="large" color="#0000ff" />
                        ) : isError ? (
                            <Text>Error: {error.message}</Text>
                        ) : (
                            // Mostrar campanhas
                            campaigns?.map((campaign) => (
                                <View key={campaign.id} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10, marginTop: 50, marginBottom: 10 }}>
                                    <View style={{ backgroundColor: '#e8e8e8', width: 300, height: 300, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{campaign.titulo}</Text>
                                        <View style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 10, width: '100%' }} />
                                        <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10, padding: 20 }}>{campaign.descricao}</Text>
                                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                            <TouchableOpacity
                                                style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 20 }}
                                                onPress={() => {
                                                    navigation.navigate('CampaignAlter', { id: campaign.id });
                                                }}
                                            >
                                                <AntDesign name="edit" size={25} color="black" />
                                            </TouchableOpacity>
                                            {campaign.ativo ? 'Ativada' : 'Desativada'}
                                        </Text>
                                    </View>
                                </View>
                            ))
                        )}
                    </View>
                ) : (
                    <View style={{ flex: 1, backgroundColor: 'black' }}>
                        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Campanhas</Text>
                            <View style={{ height: 1, backgroundColor: '#fcc42c', marginTop: 10 }} />
                        </View>

                        {/* Botão Nova Campanha */}
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 20 }}
                            onPress={() => {
                                navigation.navigate('CampaignCreate');
                            }}
                        >
                            <AntDesign name="plus" size={24} color="white" />
                            <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 20, color: 'white' }}>Nova Campanha</Text>
                        </TouchableOpacity>

                        {/* Mostrar carregando ou erro */}
                        {isLoading ? (
                            <ActivityIndicator size="large" color="#ffffff" />
                        ) : isError ? (
                            <Text style={{ color: 'white' }}>Error: {error.message}</Text>
                        ) : (
                            // Mostrar campanhas
                            campaigns?.map((campaign) => (
                                <View key={campaign.id} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10, marginTop: 50, marginBottom: 10 }}>
                                    <View style={{ backgroundColor: '#292929', width: 300, height: 300, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>{campaign.titulo}</Text>
                                        <View style={{ height: 1, backgroundColor: '#858282', marginTop: 10, width: '100%' }} />
                                        <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10, padding: 20, color: 'white' }}>{campaign.descricao}</Text>
                                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                                            <TouchableOpacity
                                                style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 20 }}
                                                onPress={() => {
                                                    navigation.navigate('CampaignAlter', { id: campaign.id });
                                                }}
                                            >
                                                <AntDesign name="edit" size={25} color="white" />
                                            </TouchableOpacity>
                                            {campaign.ativo ? 'Ativada' : 'Desativada'}
                                        </Text>
                                    </View>
                                </View>
                            ))
                        )}
                    </View>
                )}
            </ScrollView>
            <ColorModeButton />
        </BodyColorMode>
    );
}
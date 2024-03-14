import { Text, View } from "native-base";
import BodyColorMode from "../../components/BodyColorMode";
import Header from "../../components/Header";
import ColorModeButton from "../../components/ColorModeButton";
import React from "react";

type Props = {
    navigation: any
}

export default function Dashboard({ navigation }: Props) {
    return (
        <BodyColorMode>
            <Header navigation={navigation} />
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Dashboard</Text>
                        <View style={{ height: 1, backgroundColor: '#fcc42c', marginTop: 10 }} />
                    </View>
                    <View style={{ paddingHorizontal: 20, paddingTop: 80, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15}}>0</Text>
                            <Text style={{ fontSize: 15 }}>Ideias</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15}}>0</Text>
                            <Text style={{ fontSize: 15}}>Pontos</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15}}>0</Text>
                            <Text style={{ fontSize: 15}}>Aprovadas</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20, paddingTop: 80 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Medalhas</Text>
                    </View>
                    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, padding: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15}}>🥇</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 15}}>0 Medalhas de Ouro</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, padding: 10  }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15}}>🥈</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 15}}>0 Medalhas de Prata</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10  }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15}}>🥉</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 15}}>0 Medalhas de Bronze</Text>
                        </View>
                    </View>
                </View>
            <ColorModeButton />
        </BodyColorMode>
    );
}
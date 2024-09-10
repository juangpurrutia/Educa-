import axios, { AxiosResponse, AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, useColorMode, View } from 'native-base';
import BodyColorMode from '../../components/BodyColorMode';
import Header from '../../components/Header';
import ColorModeButton from '../../components/ColorModeButton';

type Props = {
  navigation: any;
};

interface DashboardData {
    ideiasCount: number;
    pontosCount: number;
    aprovadasCount: number;
    medalhasOuroCount: number;
    medalhasPrataCount: number;
    medalhasBronzeCount: number;
  }
  

const Dashboard = ({ navigation }: Props) => {
  const [cursosCount, setCursossCount] = useState<number>(0);
  const [pontosCount, setPontosCount] = useState<number>(0);
  const [aprovadasCount, setAprovadasCount] = useState<number>(0);
  const [medalhasOuroCount, setMedalhasOuroCount] = useState<number>(0);
  const [medalhasPrataCount, setMedalhasPrataCount] = useState<number>(0);
  const [medalhasBronzeCount, setMedalhasBronzeCount] = useState<number>(0);

  const { colorMode } = useColorMode();
  
  return (
    
    <BodyColorMode>
      <Header navigation={navigation} />
      {
      colorMode === 'light' ?
      (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Dashboard</Text>
          <View style={{ height: 1, backgroundColor: '#fcc42c', marginTop: 10 }} />
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 80, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{cursosCount}</Text>
            <Text style={{ fontSize: 15 }}>Cursos</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{pontosCount}</Text>
            <Text style={{ fontSize: 15 }}>Pontos</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{aprovadasCount}</Text>
            <Text style={{ fontSize: 15 }}>Aprovadas</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 80 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Medalhas</Text>
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, padding: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>🥇</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{medalhasOuroCount} Medalhas de Ouro</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, padding: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>🥈</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{medalhasPrataCount} Medalhas de Prata</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>🥉</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{medalhasBronzeCount} Medalhas de Bronze</Text>
          </View>
        </View>
      </View>
      )
      : (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Dashboard</Text>
          <View style={{ height: 1, backgroundColor: '#fcc42c', marginTop: 10 }} />
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 80, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>{cursosCount}</Text>
            <Text style={{ fontSize: 15, color: 'white' }}>Ideias</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>{pontosCount}</Text>
            <Text style={{ fontSize: 15, color: 'white' }}>Pontos</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>{aprovadasCount}</Text>
            <Text style={{ fontSize: 15, color: 'white' }}>Aprovadas</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 80 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Medalhas</Text>
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, padding: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>🥇</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>{medalhasOuroCount} Medalhas de Ouro</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, padding: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>🥈</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>{medalhasPrataCount} Medalhas de Prata</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>🥉</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>{medalhasBronzeCount} Medalhas de Bronze</Text>
          </View>
        </View>
      </View>
      )
      }
      <ColorModeButton />
    </BodyColorMode>
  );
};

export default Dashboard;
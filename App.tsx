import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { NativeRouter as Router } from 'react-router-native';
import { LogBox } from "react-native";
import { theme } from "./src/style/theme";
import Routes from './src/routes';

export default function App() {
  //BUG NativeBase
  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <Routes />
    </NativeBaseProvider>
  );
}

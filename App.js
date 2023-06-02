import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import { Provider as PaperProvider } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  LogBox.ignoreAllLogs(true)
  useEffect(() => {
    Name()

  }, []);
  const Name = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('Gender')
    } catch (e) {
      // error
    }
  }
  return (
    <PaperProvider>
      <StackNavigator />
    </PaperProvider>
  );
};
export default App;




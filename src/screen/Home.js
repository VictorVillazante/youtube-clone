import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Search } from '../components/Search';
import Constant from 'expo-constants';

export function Home() {

  return (
    <View style={{marginTop: Constant.statusBarHeight}}>
      {/* <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView> */}
        {/* <Search /> */}
     
        <Header />
    </View>
  );
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import Constant from 'expo-constants';

export function Search() {

  return (
    <View style={{marginTop: Constant.statusBarHeight}}>
        <Text>Search Screen</Text>
    </View>
  );
}
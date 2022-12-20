import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView, FlatList } from 'react-native';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Search } from '../components/Search';
import Constant from 'expo-constants';
import { useSelector, useDispatch} from "react-redux";

export function Home({navigation}) {
  const cardData=useSelector(state=>{
    return state
  })
  return (
    <View style={{marginTop: Constant.statusBarHeight}}>
      <Header />
      <FlatList
        data={cardData}
        renderItem={({item})=>{
          return <Card 
            videoId={item.id.videoId}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
          />
        }}
        keyExtractor={item=>item.id.videoId}
      />
      {/* <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView> */}
        {/* <Search />*/}
     
    </View>
  );
}
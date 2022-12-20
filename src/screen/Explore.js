import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,FlatList } from 'react-native';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import Constant from 'expo-constants';
import { useSelector, useDispatch} from "react-redux";

export function Explore() {
  const mcd=useSelector(state=>{
    return state.cardData
  })
  const LittleCard=({name})=>{
    return(
      <View style={{
        backgroundColor:"red",
        height:50,
        width:180,
        borderRadius:4,
        margin:5
      }}>
        <Text style={{
          textAlign:"center",
          fontSize:22,
          color:"white",
          marginTop:5
        }}>
          {name}
        </Text>
      </View>

    )
  }
  return (
    <View style={{marginTop: Constant.statusBarHeight,flex:1}}>
        <Header />
        <ScrollView>
        <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}}>
          <LittleCard name="Gaming" />  
          <LittleCard name="Trading"/>  
          <LittleCard name="Music"/>  
          <LittleCard name="Views"/>  
          <LittleCard name="Movies"/>  
          <LittleCard name="Fashion"/>  
          <Text style={{margin:8,fontSize:24,borderBottomWidth:2,width:"100%"}}>
            Trending Videos
          </Text>
          <FlatList
            data={mcd}
            renderItem={({item})=>{
                return <Card 
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                />
            }}
            keyExtractor={item=>item.id.videoId}
        />
        </View>
        </ScrollView>
    </View>
  );
}
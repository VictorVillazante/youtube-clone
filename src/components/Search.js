import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator
} from "react-native";
import Constant from "expo-constants";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useState } from "react";
import { MiniCard } from "./MiniCard";
import { useSelector, useDispatch} from "react-redux";
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyCJP8tXBoieNhAZWLYGX-6XUdSkaVJtJqw




export function Search({navigation}) {
  const [value, setValue] = useState("");
  // let [mcd,setMCD]=useState([]);
  const mcd=useSelector(state=>{
    return state.cardData
  })
  const dispatch=useDispatch();
  const [loading,setLoading]=useState(false);
  let lista=[];
  const fetchData=()=>{
    setLoading(true);
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyA1dr4jRLDiAD90ji1NC7E8aK8pft4GHXQ`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.items)
        // setMCD(data.items)
        lista=data.items
        console.log("----------------------------------------------------------------------------")
        // mcd=lista;
        dispatch({type:"add",payload:data.items})
        console.log(mcd)
        setLoading(false);

    })
  }
  return (
    <View style={{marginTop: Constant.statusBarHeight}}>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 5,
          backgroundColor: "white",
          height: 45,
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" onPress={()=>navigation.goBack()}/>
        <TextInput
          value={value}
          onChangeText={(text) => 
            setValue(text)
          }
          style={{
            width: "70%",
            backgroundColor: "e2e2e2",
          }}
        />
        <Ionicons name="send" size={24} color="black" onPress={()=>fetchData()} />
      </View>
      
      {/* <ScrollView>
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />

        </ScrollView> */}
        {loading?<ActivityIndicator size="large" color="red" style={{marginTop:10}} />: <Text></Text>}
        <FlatList
            data={mcd}
            renderItem={({item})=>{
                return <MiniCard 
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                />
            }}
            keyExtractor={item=>item.id.videoId}
        />
    </View>
  );
}

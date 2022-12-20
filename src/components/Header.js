import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants';
import { AntDesign,Entypo,FontAwesome,MaterialIcons } from '@expo/vector-icons'; 


import { useNavigation,useTheme } from '@react-navigation/native';
import { useSelector, useDispatch} from "react-redux";


export function Header() {
    const navigation = useNavigation();
  const {colors}=useTheme()
  const mycolor=colors.iconColor;
  const dispatch=useDispatch();
  const currentTheme=useSelector(state=>{
    return state.myDarMode
  })
  return (
    <View style={{
        marginTop: Constant.statusBarHeight,
        height: 45,
        elevation:4,
        backgroundColor:colors.headerColor,
        flexDirection:"row",
        justifyContent:"space-between"
    }}
    >
        <View
            style={{
                margin:5,
                flexDirection:"row"
            }}
        >
            <AntDesign name="youtube" size={24} color="red" style={{marginLeft:20}} />
            <Text style={{fontSize:22,marginLeft:5,fontWeight:"bold",color:mycolor}}>YouTube</Text>
        </View>
        <View
            style={{
                flexDirection:"row",
                justifyContent:"space-around",
                width:150,
                marginTop:5
            }}
        >
            <Entypo name="video-camera" size={24} color={mycolor} />
            <FontAwesome name="search" size={24} color={mycolor} onPress={()=>navigation.navigate("search")}/>
            <MaterialIcons name="account-circle" size={24} color={mycolor} 
            onPress={()=>dispatch({type:"change_theme",payload:!currentTheme})}
            />
        </View>
    </View>
  );
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Dimensions } from 'react-native';
import Constant from 'expo-constants';
import { AntDesign,Entypo,FontAwesome,MaterialIcons } from '@expo/vector-icons'; 
export function Card() {
  return (
    <View style={{
        margin: 10
    }}
    >
        <View>
            <Image
            source={{uri:"https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhaXNhamV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}}
            style={{ 
                width:"100%",
                height:200
            }}
            />
         </View>
         <View style={{
            flexDirection:"row",
            margin:5
         }}>
            <MaterialIcons name="account-circle" size={32} color="black" />
            <View style={{
                marginLeft:6
            }}>
                <Text style={{fontSize:20,fontWeight:"bold",width:Dimensions.get("screen").width-80}}  ellipsizeMode="tail" numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                <Text style={{fontSize:16,width:Dimensions.get("screen").width-80}}  ellipsizeMode="tail" numberOfLines={4}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                
            </View>   
         </View>
    </View>
  );
}
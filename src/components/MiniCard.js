import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
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

export function MiniCard(props) {
  return (
    <View style={{flexDirection:"row",margin:10,marginBottom:0,height:100}}>
      <Image
        source={{
          // uri: `https://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg`,
          uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,

        }}
        style={{
          width: "45%",
          height: 100,
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 15,
            width: Dimensions.get("screen").width/2,
            height:50,
            fontWeight:"bold"
          }}
          ellipsizeMode="tail"
          numberOfLines={3}
        >
          {props.title}
        </Text>
        <Text
          style={{ fontSize: 12,height:50}}
          ellipsizeMode="tail"
          numberOfLines={4}
        >
          {props.channel} 
        </Text>
      </View>
    </View>
  );
}

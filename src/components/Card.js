import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Constant from "expo-constants";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Card(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("videoPlayer", {
          videoId: props.videoId,
          title: props.title,
        })
      }
    >
      <View
        style={{
          margin: 10,
        }}
      >
        <View>
          <Image
            source={{
              uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
            }}
            style={{
              width: "100%",
              height: 200,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            margin: 5,
          }}
        >
          <MaterialIcons name="account-circle" size={32} color="black" />
          <View
            style={{
              marginLeft: 6,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                width: Dimensions.get("screen").width - 80,
              }}
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              {props.title}
            </Text>
            <Text
              style={{
                fontSize: 16,
                width: Dimensions.get("screen").width - 80,
              }}
              ellipsizeMode="tail"
              numberOfLines={4}
            >
              {props.channel}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

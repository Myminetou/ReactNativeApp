import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Section2() {
  return (
    <View
      style={{
        flex: 1,
        marginTop: -20,
        marginHorizontal: 10,
        padding: 5,
        borderRadius: 20,
        borderWidth : 1,
        backgroundColor : 'white',
        borderColor: 'gray',
      }}
    >
        <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 30, textAlign: "center" }}>
            Hilton San Francisco
            </Text>
        </View>

        <View style = {{alignItems : "center", flexDirection: "column",justifyContent: "space-between", marginVertical: 10}}>
            <View style={{ flexDirection: "row" }}>
            <FontAwesome name="star" size={20} color="orange" />
            <FontAwesome name="star" size={20} color="orange" />
            <FontAwesome name="star" size={20} color="orange" />
            <FontAwesome name="star" size={20} color="orange" />
            <FontAwesome name="star-half" size={20} color="orange" />
            </View>
        </View>

        <View style={{flexDirection: "column" }}>
          <Text style ={{fontSize: 15, textAlign: "center"}}>
            Facilities provided may range from a modest quality mattress in a small room to large suites{" "}
          </Text>
        </View>
    </View>
  );
}

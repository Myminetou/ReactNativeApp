import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Section5() {
    return(
        <View style={{padding:1, borderBottomWidth:1, marginHorizontal:30}}>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                <FontAwesome name="wifi" size={30} color="blue" />
                <FontAwesome name="coffee" size={30} color="blue" />
                <FontAwesome name="bath" size={30} color="blue" />
                <FontAwesome name="car" size={30} color="blue" />
                <FontAwesome name="paw" size={30} color="blue" />
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                <Text style = {{paddingLeft:7}}>wifi</Text>
                <Text style = {{paddingRight:5}}>coffee</Text>
                <Text style = {{paddingRight:10}}>bath</Text>
                <Text style = {{paddingRight:10}}>car</Text>
                <Text>paw</Text>
            </View>
        </View>
    );
}

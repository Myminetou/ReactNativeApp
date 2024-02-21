import React from "react";
import { Image, Text, View } from "react-native";
export default function Section6() {
    return(
        <View style={{flex:1,flexDirection: "column",marginTop: 10}}>
            <Text style={{marginHorizontal: 30}}>Location</Text>
            <Text style={{marginHorizontal: 30}}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et...</Text>
            <View style ={{alignItems:"center",marginTop: 10}}>
                <Image style={{ flex : 1, resizeMode : "cover" , aspectRatio: 2.8 }} source={require("../../assets/week3/map.jpg")} />
            </View>
        </View>
    );
}
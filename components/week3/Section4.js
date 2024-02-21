import React from "react";
import { Text, View } from "react-native";

export default function Section4() {
    return (
        <View style={{flex:1, borderTopWidth:1, borderBottomWidth:1, paddingHorizontal:10, paddingVertical:10, marginHorizontal:30}}>
            <View style={{flexDirection: "column"}}>
                <Text style={{fontSize:20}}>Hotel Description</Text>
                <Text style={{fontSize:15}}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
            </View>
        </View>
    );
}
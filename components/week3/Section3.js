import React from "react";
import { Image, Text, View } from "react-native";
export default function Section3() {
    return (
        <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ width: 50, height: 50, borderRadius: 50 / 2 ,backgroundColor : "orange", alignItems: "center"}}>
                    <Text style={{ fontSize: 15, marginTop: 13 }}>9.5</Text> 
                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Excellent</Text>
                    <Text style={{ fontSize: 15}}>See 801 reviews</Text>
                </View>
        </View>
    );
}
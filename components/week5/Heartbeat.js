import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {    
    const [number , setNumber] = useState(0);

    console.log("Heartbeat : ",number); 

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = number + 1;
        setNumber(output)
    };
    return (
        <View style ={{ flexDirection:'row', padding:20, justifyContent:"space-around"}}>
            <TouchableOpacity onPress={onPressButton}>
                <View>
                    <FontAwesome name="heart" size={40} color="orange" />
                </View>
            </TouchableOpacity>
            <Text style = {{ fontSize: 40 }}>{number}</Text>
        </View>
    );
}

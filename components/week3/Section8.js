import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Section8() {
    return (
        <View style ={{flex:1, flexDirection: "row", padding:20, borderTopWidth:1, marginHorizontal:30, marginTop: 20,justifyContent : 'space-between'}}>
            <View style ={{flexDirection: "column"}}>
                    <Text style={{fontSize: 15}}>Price</Text>
                    <Text style={{fontSize: 20, color:'red'}}>$399.99</Text>
                    <Text style={{fontSize: 15}}>AVG/Night</Text>
            </View>
            <View style ={{ marginHorizontal : 20, marginTop : 15}}>
                    <Button style={{width : 100,height : 80}} title='Book Now' color= 'red'/>
            </View>
        </View>
    );
}

import React from 'react';
import { View } from 'react-native';


export default function Extra() {
    return(
        <View style = {{flex:1, flexDirection:'column'}}>
            <View style={{ flex :1 , backgroundColor : '#FFEBB6'}}></View>
            <View style={{ flex :2, flexDirection : 'row'}}>
            <View style={{ flex :1 , backgroundColor : '#8BD7B1'}}></View>
            <View style={{ flex :2, flexDirection : 'column'}}>
            <View style={{ flex :1 , backgroundColor : '#FE706E'}}></View>
            <View style={{ flex :1, flexDirection : 'row'}}>
            <View style={{ flex :1 , backgroundColor : '#FFCB65'}}></View>
            <View style={{ flex :1 , backgroundColor : '#FE706E'}}></View>
            </View>
            </View>
            </View>
        </View>
    ); 
}
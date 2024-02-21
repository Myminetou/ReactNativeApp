import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Avatar, Button, Card, Divider, Icon, Text } from "react-native-paper";

export default function TestPaper() {
  return (
    <ScrollView style={{ paddingVertical: 25, flex: 1 }}>
      <Card>
        <Card.Title
          title="Steve Garrett"
          subtitle="5 hours ago | 100k views"
          left={(props) => <Avatar.Image size={40} source={require('../../assets/week3/profile-2.jpg')} /> }          
          subtitleStyle={{ color:"grey" }}
        />
        <Card.Cover style={{ borderRadius :0 }} source={require('../../assets/week3/trip-2.jpg')} />
        <Card.Title
          title="Overseas Adventure Travel In Nepal"
          subtitle="Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo"        
          subtitleStyle={{ color:"grey" }}
        />
      </Card>

      <Divider style={{ marginVertical : 10 }} />

      
    </ScrollView>
  );
}

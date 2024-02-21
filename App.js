import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Welcome from './screens/Welcome';
import Ex01 from './screens/week2/Ex01';
import Ex02 from './screens/week2/Ex02';
import Ex03 from './screens/week2/Ex03';
import Ex04 from './screens/week2/Ex04';
import Ex05 from './screens/week2/Ex05';
import Ex06 from './screens/week2/Ex06';
import Ex07 from './screens/week2/Ex07';
import Ex08 from './screens/week2/Ex08';
import Ex09 from './screens/week2/Ex09';
import Ex10 from './screens/week2/Ex10';
import Ex11 from './screens/week2/Ex11';
import Ex12 from './screens/week2/Ex12';
import Extra from './screens/week2/Extra';
import Greeting from './components/Greeting';
import Travel from './screens/week3/Travel';
import Signup from './components/week3/Signup';
import Resort from './screens/week3/Resort';
import { PaperProvider } from 'react-native-paper';
import TestPaper from './screens/week4/TestPaper';

export default function App() {
  return (
    //<Extra />
  // <View style = {{ flex:1, marginTop :25 }}>
  //     <TextInput
  //       keyboardType = "email-address"
  //       autoCapitalize = "none"
  //       autoCorrect = {false}
  //       maxLength= {30}
  //       multiline = {false}
  //       placeholder = "Please enter your email"
  //       returnKeyType = "next"
  //       onChangeText= {(text) => {}}
  //       defaultvalue = "Default text"
  //     />

  //   <Button
  //     title="Press me"
  //     onPress={() => Alert.alert("Simple Button pressed")}
  //     color="#665544"
  //   />

  //   <Text> Hello World </Text>
    
  //   <Image source={{ uri : 'https://reactnative.dev/img/tiny_logo.png'}} style={{ width:50, height:50}}/>

  //   <View style={{ flexDirection: "row", justifyContent: 'space-between', margin : 50}} >
  //   <Image style={{ width:150, height:100}} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png'}} />
  //   <Image style={{ width:150, height:150}} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png'}} />
  //   <Image style={{ width:150, height:150, borderRadius : 150 / 2}} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png'}} />
  //   </View>

  //   <FontAwesome name = "heart" size={32} color="orange" />
  //   <View style={{ alignItems: 'center', top: 50}}>
  //     <Greeting name= 'Rexxar' />
  //     <Greeting name= 'Jaina' />
  //     <Greeting name= 'Valeera' />
  //   </View>
  // </View>
  <Resort />
  // <PaperProvider>
  //   <TestPaper />
  // </PaperProvider>
   );
 }
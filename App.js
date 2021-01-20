import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/Components/Home';
import Status from './src/Components/Status';
import Call from './src/Components/Call';
import  Header  from "./src/Components/Header";




var obj1 ={
  Home:{
    screen:Home,
  },
  Status:{
    screen:Status,
  },
  Call:{
    screen:Call,
    }
}
var obj2 ={
  tabBarOptions:{
    labelStyle: {
      fontSize: 15,
    fontWeight:'bold'

      
    },
    style:{
      height:100,
      justifyContent: 'flex-end',
      backgroundColor:'green'
    },
    iconStyle:{
    }
  }

  }

const AppNavigator = createMaterialTopTabNavigator (obj1,obj2)

const AppStack = createStackNavigator(
  {
    Home:{
    screen:AppNavigator,
      navigationOptions: {
        header: <Header />
      }
    }
  },
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer (AppStack);
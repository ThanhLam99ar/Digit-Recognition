import React, { Component } from 'react';
import { StyleSheet, Text, Alert, View, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";
import { CommonActions, StackActions } from '@react-navigation/native';

export default class App extends Component {
    static navigationOptions = {
        title: 'Login'
    };

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    title: {
      fontSize: 30,
      color: 'red'
    },
    txtInput: {
      backgroundColor: 'rgba(0,0,0, 0.1)',
      width: DEVICE_WIDTH - 40,
  
      marginHorizontal: 20,
      padding: 8,
      borderRadius: 20,
      color: '#000',
      marginTop: 2
    },
    btnLogin: {
      width: DEVICE_WIDTH - 40,
      backgroundColor: 'rgba(0,145,234,1)',
      padding: 8,
      borderRadius: 20,
      marginTop: 2
  
    },
    txtLogin: {
      color: '#fff',
      textAlign: 'center'
    }
  
  });
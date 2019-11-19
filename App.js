//import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AppContainer from './src/navigation/DrawerNavigator'

export default class App extends Component{
  render(){
    return(
      <View  style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  }
})
import React, { Component } from 'react';
import { View, Button } from 'react-native';

import MenuButton from '../src/components/MenuButton'


export default class HomeScreen extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
          <MenuButton navigation={this.props.navigation} />
          <View style={{paddingTop: 100}}>
            <Button
              title="Ir para o profile de Carlos"
              onPress={() => navigate('Profile', {nome: 'Carlos', idade: 31})}
            />
          </View>
          
        </View>
      );
    }
  }
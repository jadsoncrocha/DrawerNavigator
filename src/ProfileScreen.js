import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import MenuButton from '../src/components/MenuButton'

export default class ProfileScreen extends Component {

    static navigationOptions = {
        title: 'ProfileScreen'
    };

    //no getParam o primeiro parâmetro nos parenteses fala qual parâmetro eu quero buscar,
    //o segundo me passa um valor padrão para este parâmetro caso eu não encontre nada.
    render() {
        return(
            <View>
                <MenuButton navigation={this.props.navigation} />
                <View style={{paddingTop: 100}}>
                    <Text>ProfileScreen</Text>

                    <Text>Nome: {this.props.navigation.getParam('nome', 'Nínguém')}</Text>
                    <Text>Idade: {this.props.navigation.getParam('idade', 0)} anos.</Text>

                    <Button title="Voltar"
                        onPress={() => this.props.navigation.goBack()} />
                </View>
                
            </View>
        );
    }

}
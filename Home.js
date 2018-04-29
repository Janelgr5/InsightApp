import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default class Home extends Component {
    constructor () {
        super();
        this.state = {
            text: ""
        }
    }
    render () {
        return (
            <View>
                <Text>HOME</Text>
                <TextInput
                    placeholder="Type here."
                    onChangeText={text => this.setState({text})}
                />
                <Button 
                    title="Get Insight"
                    onPress={() => this.props.navigation.navigate('Insight')}
                />
            </View>
        )
    }
}
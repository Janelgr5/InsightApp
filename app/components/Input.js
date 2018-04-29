import React, { Component, PropTypes } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class Input extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
        placeholder: PropTypes.string,
    }

    state = {
        text: ''
    }

    onChangeText = text => this.setState({text})

    onSubmitEditing = () => {
        const {onSubmit} = this.props
        const {text} = this.state

        if (!text) return

        onSubmit(text)
        this.setState({text: ''})
    }

    render() {
        const {onSubmit, placeholder} = this.props
        const {text} = this.state

        return (
            <TextInput 
                style={style.input}
                placeholder={placeholder}
                value={text}
                onChangeText={this.onChangeText}
                onSubmitEditing={this.onSubmitEditing}
                blurOnSubmit={false}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        padding: 15,
    }
})

// Input.js component to render our TextInput and manage its value in local state.
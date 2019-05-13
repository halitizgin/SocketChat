import React, { Component } from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'SocketChat - Giriş'
    }

    state = {
        name: ''
    }
    
    render() {
        const {name} = this.state;
        return (
            <View style={styles.nameContainer}>
                <TextInput value={name} onChangeText={name => this.setState({name})} style={styles.nameInput} placeholder="İsminizi giriniz" />
                <Button disabled={name.trim() !== "" ? false : true} onPress={() => this.props.navigation.navigate("Chat", {
                    "name": name.trim()
                })} title="Bağlan" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nameContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: 2
    },
    nameInput: {
        fontSize: 30,
        padding: 5
    }
});
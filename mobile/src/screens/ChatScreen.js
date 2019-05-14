import React, { Component } from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

import ChatItem from "../components/ChatItem";

import {observer} from 'mobx-react';

import IOStore from '../store/IOStore';
import io from 'socket.io-client';

@observer
export default class ChatScreen extends Component {
    static navigationOptions = {
        title: 'SocketChat - Sohbet'
    }

    state = {
        message: '',
        messages: []
    }

    componentWillUnmount(){
        this.io.disconnect();
    }  

    componentDidMount () {
        this.io = io.connect(`http://${IOStore.ip}:3000`, {
            timeout: 5000
        });

        IOStore.setIO(this.io);

        this.io.on('updateUser', data => {
            const newMessages = [...this.state.messages, data];
            this.setState({messages: newMessages});
        });

        this.io.on('unSeenMessages', messages => {
            this.setState({messages});
        });

        this.io.on('recievedMessage', data => {
            const newMessages = [...this.state.messages, data];
            this.setState({messages: newMessages});
        });

        this.io.on('connect_timeout', () => {
            alert("Sunucu ile bağlantı kurulamadı!\nBağlanılan adresin doğru olduğundan ya da bağlanılan sunucunun açık olduğundan emin olun.");
        });

        const name = this.props.navigation.getParam('name');
        this.io.emit('name', name);
        this.setState({nameAccept: true});
    }

    sendMessage = () => {
        const name = this.props.navigation.getParam('name');
        const data = { from: name, message: this.state.message };
        this.io.emit('sendMessage', data);
        const newMessages = [...this.state.messages, data];
        this.setState({
            message: '',
            messages: newMessages
        });
    }
    render() {
      const {messages} = this.state;
        return (
            <View style={styles.chatContainer}>
                <ScrollView
                ref={ref => this.scrollView = ref}
                onContentSizeChange={() => {
                    this.scrollView.scrollToEnd({animated: false});
                }}
                style={styles.scroll}>
                    {
                        messages.length > 0 ? messages.map(data => {
                            return (
                                <ChatItem style={styles.chatItem} name={data.from ? data.from : null} message={data.message} />
                            )
                        }) : <Text style={styles.nothing}>Herhangi bir mesaj bulunmuyor!</Text>
                    }
                </ScrollView>   
                <View style={styles.messageContainer}>
                    <TextInput onChangeText={message => this.setState({message})} value={this.state.message} style={styles.messageInput} placeholder="Mesajınızı girin" />
                    <Button onPress={this.sendMessage} title="Gönder" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    scroll: {
        marginVertical: 5
    },
    messageContainer: {
        marginHorizontal: 2,
        marginBottom: 2,
        justifyContent: 'flex-end'
    },
    messageInput:{
        fontSize: 16,
        padding: 5,
        borderColor: '#ccc',
        borderWidth: 1
    },
    nothing: {
        marginVertical: 5,
        marginHorizontal: 5
    }
});

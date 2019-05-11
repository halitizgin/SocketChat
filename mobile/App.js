import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, Text, ScrollView} from 'react-native';

import io from 'socket.io-client';

import ChatItem from './src/components/ChatItem';

export default class App extends Component {
  state = {
    name: '',
    message: '',
    nameAccept: false,
    messages: [],
    count: 0
  }

  connectSocket = () => {
    const ip = '192.168.43.105';//Ip adresi yanlış olursa çalışmaz.
    this.io = io.connect(`http://${ip}:3000`, {
      timeout: 10000
    });

    this.io.on('updateCount', count => {
      this.setState({count});
    });

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

    this.io.emit('name', this.state.name);
    this.setState({nameAccept: true});
  }

  sendMessage = () => {
    const data = { from: this.state.name, message: this.state.message };
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
      <View style={styles.container}>
      {
        !this.state.nameAccept &&
        <View style={styles.nameContainer}>
          <TextInput value={this.state.name} onChangeText={name => this.setState({name})} style={styles.nameInput} placeholder="İsminizi giriniz" />
          <Button onPress={this.connectSocket} title="Bağlan" />
        </View>
      }
      {
        this.state.nameAccept &&
        <View style={styles.chatContainer}>
          <View style={styles.onlineContainer}>
            <Text style={styles.onlineCount}>{this.state.count} kişi aktif.</Text>
          </View>
          <ScrollView style={styles.scroll}>
            {
              messages.length > 0 ? messages.map(data => {
                return (
                  <ChatItem style={styles.chatItem} name={data.from ? data.from : null} message={data.message} />                  
                )
              }) : <Text>Herhangi bir mesaj bulunmuyor!</Text>
            }
          </ScrollView>
          <View style={styles.messageContainer}>
            <TextInput onChangeText={message => this.setState({message})} value={this.state.message} style={styles.messageInput} placeholder="Mesajınızı girin" />
            <Button onPress={this.sendMessage} title="Gönder" />
          </View>
        </View>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 2
  },
  chatContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  nameInput: {
    fontSize: 30,
    padding: 5
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
  onlineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3
  },
  onlineCount: {
    fontSize: 26
  }
});
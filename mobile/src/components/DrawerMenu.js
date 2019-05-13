import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';

import IOStore from '../store/IOStore';

export default class DrawerMenu extends Component {
  state = {
    activeUsers: []
  }

  componentDidMount() {
    this.io = IOStore.io;    

    this.io.on('updateActiveUsers', activeUsers => {
      this.setState({activeUsers});
    });
  };
  
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Aktif Kullanıcılar({this.state.activeUsers.length})</Text>
        </View>
        {
          this.state.activeUsers.map(user => {
            return (
              <Text style={styles.user}>{user}</Text>
            )
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  user: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 10
  },
  headerContainer: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 5
  },
  headerText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold'
  }
});
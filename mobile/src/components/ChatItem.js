import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';

export default class ChatItem extends Component {
    render(){
        return(
            <View style={styles.container}>
                {
                    this.props.name &&
                    <Text style={styles.name}>{this.props.name}: </Text>
                }
                <Text style={styles.message}>{this.props.message}</Text>
            </View>
        )
    }
}

ChatItem.propTypes = {
    message: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#d1d1d1',
        padding: 5,
        marginBottom: 5,
        marginHorizontal: 2
    },
    name: {
        fontSize: 16,
        fontWeight: '600'
    },
    message: {
        flex: 5,
        fontSize: 16
    }
});
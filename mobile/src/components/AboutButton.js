import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class AboutButton extends Component {
    about = () => {
        alert("Kodlayan: Halit IZGIN(Ready)\nWeb Site: http://www.kodevreni.com\nKaynak Kodlar İçin: http://www.github.com/halitizgin\nSocketChat uygulaması tamamen örnek amaçlı tasarlanmıştır.");
    }

    render() {
        return (
        <TouchableOpacity onPress={this.about} style={styles.container}>
            <Icon name="md-help-circle" size={26} />
        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    }
});
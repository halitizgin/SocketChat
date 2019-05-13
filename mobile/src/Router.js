import React from 'react';

import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";

import MenuButton from './components/MenuButton';
import AboutButton from './components/AboutButton';

import DrawerMenu from './components/DrawerMenu';

import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

const ChatStack = createStackNavigator({
    Chat: {
        screen: ChatScreen,
        navigationOptions: ({navigation}) => ({
            headerLeft: <MenuButton navigation={navigation} />
        })
    }
});

const Drawer = createDrawerNavigator({
    Active: {
        screen: ChatStack
    }
}, {
    drawerWidth: 200,
    contentComponent: DrawerMenu
});

const MainStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: ({navigation}) => ({
            headerRight: <AboutButton navigation={navigation} />
        })
    },
    Drawer: {
        screen: Drawer,
        navigationOptions: {
            header: null
        }
    }
});
  
export default AppContainer = createAppContainer(MainStack);
import React, { Component } from 'react'
import {
    Navigation
} from 'react-native-navigation';
import registerScreens from './Container/'
import Icon from 'react-native-vector-icons/MaterialIcons'

registerScreens()

const navigatorStyle = {
    statusBarTextColorScheme: 'dark',
    navBarBackgroundColor: '#FFCA04',
    orientation: 'portrait',
    navBarButtonColor: 'black',
}

async function prepareIcons() {
    const icons = await Promise.all([
        Icon.getImageSource('filter-list', 30),
    ]);
    const [filter] = icons;
    return { filter };
}

async function startApp() {
    const icons = await prepareIcons();

    Navigation.startSingleScreenApp({
        screen: {
            screen: 'confstech.root',
            navigatorStyle,
            title: 'Tech Conferences'
        }
    })
}

startApp()
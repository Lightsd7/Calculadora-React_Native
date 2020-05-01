// import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { View } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './src/Home'
import Sobre from './src/Sobre'


function home() {
    return (
        <View>
            <Home />
        </View>
    )
}

function sobre() {
    return (
        <View>
            <Sobre />
        </View>
    )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Home Screen">

            <Drawer.Screen
                name="Home"
                component={home}
            />
            <Drawer.Screen
                name="Sobre"
                component={sobre}
            />
        </Drawer.Navigator>
    )
}

export default class Menu extends Component {

    render() {

        return (

            <NavigationContainer>

                <MyDrawer />

            </NavigationContainer>
        )
    }
} 
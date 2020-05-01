import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import 'react-native-gesture-handler';

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'


export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Simples texto='Flexível!!' ></Simples>
				<ParImpar numero={22}></ParImpar>
				<ParImpar numero={33}></ParImpar>
				<Inverter texto='React Nativo!'></Inverter>
				{/* <MegaSena numeros={8}></MegaSena> */}
				<MegaSena ></MegaSena>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
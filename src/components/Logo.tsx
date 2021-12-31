import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import logo from '../../assets/poh-assistant.png'

const Logo = () => {
	return <Image source={logo} style={styles.logoStyle} resizeMode='contain' />
}
	
const styles = StyleSheet.create({
	logoStyle: {
		width: Dimensions.get('screen').width - 30,
		height: 30,
	}
})
export default Logo

import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from 'native-base'

export default class MenuButton extends React.Component {
	render() {
		return(
			<Icon
				name="md-menu"
				style={styles.menuIcon}
				onPress={() => this.props.navigation.toggleDrawer()}
			/>
		)
	}
}

const styles = StyleSheet.create({
	menuIcon: {
		color: 'black',
		zIndex: 9,
		position: 'absolute',
		top: 15,
		left: 15,
	}
})
import React, { Component } from 'react';

//MATERIAL COMPNENTS
import IconButton from 'material-ui/IconButton';


export default function NavigationSettingsButton(IconButton, ActionLock, ActionBuild){
	return (WrappedComponent) => {
		const $NavigationSettingsButton=(props)=>{
			
			let styles = props.styles || {icon : {}}
			let text = props.text || {}
			let SettingsButton = props.user ?  
				<IconButton id={props.id} style={styles} onTouchTap={()=>this.openDrawer()}>
					<ActionBuild 
						style={styles.icon}   
						{...props.attr}
					/>
				</IconButton> : 
				<IconButton id={props.id} style={styles}>
					<ActionLock 
						style={styles.icon}   
						{...props.attr}
						/>
				</IconButton>

			return SettingsButton
		}
		return $NavigationSettingsButton
	}
}
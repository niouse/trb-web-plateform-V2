import React, { Component } from 'react';

export default function NavigationHelpButton(IconButton, ActionInfo){
	return (WrappedComponent) => {
		const $NavigationHelpButton=(props)=>{
			let styles = props.styles || {icon : {}}
			return (
				<IconButton id={props.id} style={styles} onTouchTap={()=>props.goToPage("/help")}> 
					<ActionInfo 
						style={styles.icon}   
						{...props.attr}
					/>
				</IconButton>
			)
		}
		return $NavigationHelpButton
	}
}
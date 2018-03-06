import React, { Component } from 'react';

export default function NavigationHomeButton(IconButton, ActionHome){
	return (WrappedComponent) => {
		const $NavigationHomeButton=(props)=>{
			let styles = props.styles || {icon : {}}
			let text = props.text || {}
			return (
				<IconButton 
					id={props.id} 
					style={styles} 
					onTouchTap={()=>{props.goToPage("/home")}}
					> 
					<ActionHome 
						style={styles.icon}  
						{...props.attr}
					/>	
				</IconButton>
			) 
		}
		return $NavigationHomeButton
	}

}
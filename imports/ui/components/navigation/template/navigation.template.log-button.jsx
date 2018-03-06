import React, { Component } from 'react';


export default function NavigationLogButton(IconButton, ExitToApp, AccountBox){
	return (WrappedComponent) => {
		const $NavigationLogButton=(props)=>{
			let styles = props.styles || {icon : {}}
			let text = props.text || {}
			let logButton = props.user ? 
			<IconButton 
				id={props.id} 
				style={styles} 
				onTouchTap={()=> props.logout()}
				>
					<ExitToApp 
						style={styles.icon}   
						{...props.attr}
					/>
			</IconButton>:
			<IconButton 
				id={props.id} 
				style={styles} 
				onTouchTap={()=>props.goToPage("/login")}
				>
				<AccountBox 
					style={styles.icon}  
					{...props.attr}
				/>
			</IconButton>

			return logButton
		}
		return $NavigationLogButton
	}
}
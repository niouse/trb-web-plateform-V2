import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';

export default function NavigationLanguageButton(IconButton, IconMenu, MenuItem, Language){
	return (WrappedComponent) => {
		const $NavigationLanguageButton=(props)=>{
			let styles = props.styles || {icon : {}}
			let text = props.text || {}
			return  (
				<IconMenu
					iconButtonElement={
						<IconButton
							id={props.id}	
							style={styles}
							>
							<Language 
								style={styles.icon}   
								{...props.attr}
							/>
						</IconButton>
					}
					anchorOrigin={{horizontal: 'left', vertical: 'top'}}
					targetOrigin={{horizontal: 'left', vertical: 'top'}}
				>
					<MenuItem 
						onClick= {()=>{props.handleLanguageChange('fr')}} 
						primaryText="fr" 
						onTouchTap={()=>props.handleLanguageChange('fr')}
						leftIcon={<Avatar src="navigation/flags/fr.png" />}
						/>
						
					<MenuItem 
						onClick= {()=>{props.handleLanguageChange('en')}} 
						primaryText="en" 
						onTouchTap={()=>props.handleLanguageChange('en')}
						leftIcon={<Avatar src="navigation/flags/uk.png" />}
						/>
				</IconMenu>
			)
		}
		return $NavigationLanguageButton
	}
}
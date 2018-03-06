import React, { Component } from 'react';

//MATERIAL COMPNENTS
import Avatar from 'material-ui/Avatar';

//MATERIAL ICONS
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionLanguage from 'material-ui/svg-icons/action/language';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import ActionAccountBox from 'material-ui/svg-icons/action/account-box';



export default function NavigationMenuButton(IconButton, Menu, IconMenu, MenuItem, MenuIcon, ActionHome, ActionInfo, ActionLanguage, ActionBuild, ActionExitToApp, AccountBox){
	return (WrappedComponent) => {
		const getAccountMenu = (props, styles, text) => {
			const adminMenu = [
				<MenuItem  style={styles.list} primaryText={text.myAccount} />,
				<MenuItem  style={styles.list} primaryText={text.manageAccounts} />,
				<MenuItem  style={styles.list} primaryText={text.newUser} onTouchTap={()=>props.goToPage('signup')}/>
			];

			const userMenu = [
				<MenuItem  style={styles.list} primaryText={text.myAccount} />,
			];

			const visitorMenu = [
				<MenuItem  style={styles.list} primaryText={text.newUser} onTouchTap={()=>props.goToPage('signup')}/>,
			]

			if (props.user && props.user.type==='admin') {
				return  adminMenu
			}
			if (props.user && props.user.type==='user') {
				return  userMenu
			}
			else {
				return  visitorMenu
			}
		}
		
		const $NavigationMenuButton=(props)=>{
			let styles = props.styles || {icon : {}}
			let text = props.text || {list:{}}
			return  (
				<IconMenu 
				  iconButtonElement={<IconButton id={props.id} style={styles} iconStyle={styles.menuIcon}><MenuIcon {...props.attr} /></IconButton>}
				  anchorOrigin={{horizontal: 'left', vertical: 'top'}}
				  targetOrigin={{horizontal: 'left', vertical: 'top'}}
				  menuStyle={styles.menu}
				>
				  <MenuItem
					  style={styles.list} 
					  primaryText={text.home} 
					  rightIcon={<ActionHome style={styles.icon}/>}
					  onTouchTap={()=>props.goToPage("/home")}
				  />
				  <MenuItem  
					  style={styles.list} 
					  primaryText={text.accounts}
					  rightIcon={<ActionBuild style={styles.icon}/>}
					  menuItems={getAccountMenu(props, styles, text)}
					  />
				  <MenuItem  
					  style={styles.list} 
					  primaryText={text.language}
					  rightIcon={<ActionLanguage style={styles.icon}/>}
					  menuItems={[
							<MenuItem  
								style={styles.list} 
								primaryText={text.french} 
								onTouchTap={()=>{props.handleLanguageChange('fr')}} 
								leftIcon={<Avatar src="/navigation/flags/fr.png" />}
								/>,
							<MenuItem  
								style={styles.list} 
								primaryText={text.english} 
								onTouchTap={()=>{props.handleLanguageChange('en')}}
								leftIcon={<Avatar src="/navigation/flags/uk.png" />}
								/>
						]}
					  />
				  <MenuItem  
					  style={styles.list} 
					  primaryText={text.help} 
					  rightIcon={<ActionInfo  style={styles.icon}/>}/>
				  {
						(()=>{
							let menuItem = props.user ?	
							<MenuItem 
							  style={styles.list}  
							  primaryText={text.logout} 
							  rightIcon={<ActionExitToApp style={styles.icon}/>} 
							  onTouchTap={()=> props.logout()}
						   /> :
							<MenuItem 
							  style={styles.list}  
							  primaryText={text.login}
							  rightIcon={<ActionAccountBox style={styles.icon}/>} 
							  onTouchTap={()=>props.goToPage("/login")}
						   />
						   return menuItem
						})()
				   }
				</IconMenu>	
			)	
		}
		return $NavigationMenuButton
	}
}



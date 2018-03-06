
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NavigationUserInfos from "./navigation.template.user-infos.jsx";
import NavigationHomeButton from "./navigation.template.home-button.jsx";
import NavigationLogButton from "./navigation.template.log-button.jsx";
import NavigationLanguageButton from "./navigation.template.language-button.jsx";
import NavigationHelpButton from "./navigation.template.help-button.jsx";
import NavigationSettingsButton from "./navigation.template.settings-button.jsx";
import NavigationMenuButton from "./navigation.template.menu-button.jsx";

//MATERIAL COMPNENTS
import Menu from 'material-ui/Menu';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import ActionHome from 'material-ui/svg-icons/action/home';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Language from 'material-ui/svg-icons/action/language';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ActionLock from 'material-ui/svg-icons/action/lock';


@NavigationUserInfos()
class $NavigationUserInfos{}

@NavigationHomeButton(IconButton, ActionHome)
class $NavigationHomeButton{}

@NavigationLogButton(IconButton, ExitToApp, AccountBox)
class $NavigationLogButton{}

@NavigationLanguageButton(IconButton, IconMenu, MenuItem, Language)
class $NavigationLanguageButton{}

@NavigationHelpButton(IconButton, ActionInfo)
class $NavigationHelpButton{}

@NavigationSettingsButton(IconButton, ActionLock, ActionBuild)
class $NavigationSettingsButton{}

@NavigationMenuButton(IconButton, Menu, IconMenu, MenuItem, MenuIcon, ActionHome, ActionInfo, Language, ActionBuild, ExitToApp, AccountBox)
class $NavigationMenuButton{}


export default function Navigation_Template() {
    return (wrappedComponent) => {
        const $Navigation_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="navigation-container" className="container" style={styles.container}>
					<div style={styles.box}>
						<div id="navigation-left" style={styles.left}>
							<$NavigationUserInfos 
								id="navigation-userInfos" 
								styles={styles.userInfos} 
								user={props.user} 
								text={text.userInfos}/>
						</div>

						<div id="navigation-right" style={styles.right}>
							<$NavigationHomeButton 
								id="navigation-homeButton" 
								styles={styles.homeButton}
								attr={styles.button.attr}
								goToPage={props.goToPage}
								/>
							<$NavigationLogButton 
								id="navigation-logButton" 
								styles={styles.logButton}
								attr={styles.button.attr}
								user={props.user} 
								logout={props.logout} 
								goToPage={props.goToPage}
								/>
							<$NavigationLanguageButton 
								id="navigation-languageButton" 
								styles={styles.languageButton}
								attr={styles.button.attr}
								handleLanguageChange={props.handleLanguageChange}
								/>
							<$NavigationHelpButton 
								id="navigation-helpButton" 
								styles={styles.helpButton}
								attr={styles.button.attr}
								goToPage={props.goToPage}
								/>
							<$NavigationSettingsButton 
								id="navigation-settingsButton" 
								styles={styles.settingsButton} 
								attr={styles.button.attr}
								user={props.user}/>
						</div>
						<div id="navigation-right-phone" style={styles.rightPhone}>
							<$NavigationMenuButton 
								id="navigation-menuButton" 
								styles={styles.menuButton}
								attr={styles.button.attr}
								text={text.menuButton} 
								user={props.user} 
								logout={props.logout}
								goToPage={props.goToPage}
								handleLanguageChange={props.handleLanguageChange}
								/>
						</div>
					</div>
				</div>
            );
        }
        $Navigation_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Navigation_Template
    }
}
    
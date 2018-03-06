
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import GestionHfSvg from "./gestion-hf.svg.template.jsx"

@GestionHfSvg()
class $GestionHfSvg{}

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';


//ICONS
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';



export default function GestionHf_Template() {
    return (wrappedComponent) => {
        const $GestionHf_Template = (props) => {
            let styles = props.styles
            let text = props.text
			
			let MyFlatButton = (_props)=> {
				return (
					<FlatButton  {..._props} style={styles.buttonMenu} {...styles.buttonMenu.attr}/>
				)
			}
			
            return (
                <div id="gestion-hf-container"  style={styles.container}>
					<div  style={styles.toolbarContainer}>
						  <IconMenu
						  iconButtonElement={<MyFlatButton  label="Campagnes" />}
						   
						>
						<Paper>
						  <MenuItem value="1" primaryText="Windows App" />
						  <MenuItem value="2" primaryText="Mac App" />
						  <MenuItem value="3" primaryText="Android App" />
						  <MenuItem value="4" primaryText="iOS App" />
						</Paper>
						</IconMenu>
						<IconMenu
						  iconButtonElement={<FlatButton label="Edition" style={styles.buttonMenu}/>}
						>
						  <MenuItem 
							  value="1" 
							  primaryText="Génerer"
							  rightIcon={<ArrowDropRight />}
							  menuItems={[
								<MenuItem primaryText="Show Level 2" />,
								<MenuItem primaryText="Grid lines" checked={true} />,
								<MenuItem primaryText="Page breaks" insetChildren={true} />,
								<MenuItem primaryText="Rules" checked={true} />,
							  ]}
						  	
						  />
						  <MenuItem value="2" primaryText="Exporter" />
						</IconMenu>
						<IconMenu
						  iconButtonElement={<FlatButton label="Surveillance" style={styles.buttonMenu}/>}
						>
						  <MenuItem value="1" primaryText="Tuyères" />
						  <MenuItem value="2" primaryText="Rigole mère" />
						  <MenuItem value="1" primaryText="Bascules" />
						  <MenuItem value="2" primaryText="Rigole fonte" />
						  <MenuItem value="1" primaryText="Rigole laitier" />
						  <MenuItem value="2" primaryText="Plancher" />
						  <MenuItem value="2" primaryText="Plancher" />
						  <MenuItem value="2" primaryText="Trou de coulée" />
						</IconMenu>
						<IconMenu
						  iconButtonElement={<FlatButton label="Gestion" style={styles.buttonMenu}/>}
						>
						  <MenuItem value="1" primaryText="Masse de bouchage" />
						  <MenuItem value="2" primaryText="Béton usure" />
						  <MenuItem value="1" primaryText="Pisé" />
						  <MenuItem value="2" primaryText="Taillants" />
						  <MenuItem value="1" primaryText="Tubes" />
						</IconMenu>
						<IconMenu
						  iconButtonElement={<FlatButton label="Suivis" style={styles.buttonMenu}/>}
						>
						  <MenuItem value="1" primaryText="Masse de bouchage" />
						  <MenuItem value="2" primaryText="Béton usure" />
						  <MenuItem value="1" primaryText="Bascule" />
						  <MenuItem value="2" primaryText="Barrage" />
						</IconMenu>
						<IconMenu
						  iconButtonElement={<FlatButton label="Organiser" style={styles.buttonMenu}/>}
						>
						  <MenuItem value="1" primaryText="Masse de bouchage" />
						  <MenuItem value="2" primaryText="Béton usure" />
						  <MenuItem value="1" primaryText="Bascule" />
						  <MenuItem value="2" primaryText="Barrage" />
						</IconMenu>
						<IconMenu
						  iconButtonElement={<FlatButton label="Paramètres" style={styles.buttonMenu}/>}
						>
						  <MenuItem value="1" primaryText="Masse de bouchage" />
						  <MenuItem value="2" primaryText="Béton usure" />
						  <MenuItem value="1" primaryText="Bascule" />
						  <MenuItem value="2" primaryText="Barrage" />
						</IconMenu>
					</div>
					
					<$GestionHfSvg styles={styles.svgContainer}/>
					
				</div>
            );
        }
        $GestionHf_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $GestionHf_Template
    }
}
    
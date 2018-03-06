
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MarkersOptions from "./simple-map.markers-options.template.jsx"


@MarkersOptions()
class $MarkersOptions{}


// MATERIAL UI COMPONENTS
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
//import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';


// MATERIAL UI ICONS
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

export default function SimpleMap_Template() {
    return (wrappedComponent) => {
        const $SimpleMap_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="simple-map-container" className="container" style={styles.container}>
									
					<div id='map' style={styles.map}></div>
					{/*<IconButton
						style={styles.toggleOptions} 
						onClick={()=>props.toggleStateBool('showMarkersOptions')}
						 tooltip = "options des marqueurs"
						  tooltipPosition="bottom-right"
						>
						<Visibility 
							style={styles.toggleOptionsIcon}
							{...styles.toggleOptionsIcon.attr}
						/>
					</IconButton>*/}

					{/*<Drawer
					  docked={false}
					  width={styles.options.width}
					  open={props.showMarkersOptions}
					  onRequestChange={()=>props.toggleStateBool('showMarkersOptions')}
					>
						<$MarkersOptions {...props} />
					</Drawer>*/}
				</div>
            );
        }
        $SimpleMap_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $SimpleMap_Template
    }
}
    
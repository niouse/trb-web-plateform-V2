
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ClientsDetails from "./trb-map.clients-details.template.jsx"
import TrbMapToolBar from "./trb-map.toolbar.template.jsx"

@TrbMapToolBar()
class $TrbMapToolBar{}

@ClientsDetails()
class $ClientsDetails{}
 
//MATERIAL COMPNENTS
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
//import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';

//MATERIAL ICONS
import Refresh from 'material-ui/svg-icons/navigation/refresh.js';
import ImportExport from 'material-ui/svg-icons/communication/import-export.js';
import Settings from 'material-ui/svg-icons/action/settings.js';
import Save from 'material-ui/svg-icons/content/save.js';
import Close from "material-ui/svg-icons/navigation/close.js"
import Apps from "material-ui/svg-icons/navigation/apps.js"
import FullScreen from "material-ui/svg-icons/navigation/fullscreen.js"
import FullScreenExit from "material-ui/svg-icons/navigation/fullscreen-exit.js"
import DropDown from "material-ui/svg-icons/navigation/arrow-drop-down.js"
import DropUp from "material-ui/svg-icons/navigation/arrow-drop-up.js"

export default function TrbMap_Template(SimpleMap, SideList) {
    return (wrappedComponent) => {
        const $TrbMap_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-map-container" className="container" style={styles.container}>
				{/*<div style={styles.header}>
					<ToolMenu 
						stylesOptions={this.props.route.stylesOptions}
						title="LA CARTE"
						openSearch={()=>this.toggleStateBool('openSearch')}
						openAdd={()=>this.openAddClient()}
						goToHelp={()=>browserHistory.push("/help/map")}
					/>
			    </div>*/}
				
				<div style={styles.content}>
					<div>
						<$TrbMapToolBar 
							styles={styles}
							stylesOptions={props.stylesOptions}
							toggleStateBool={(key)=>props.toggleStateBool(key)}
							/>
					</div>
					<div style={styles.mapBox}>						
						<SimpleMap 	
							items={props.items}
							iconList={props.iconList}
							showItemDetails={(clientId)=>props.showClientDetails(clientId)}
							showMarkersOptions={props.openOptions}
						/>
					</div>
					{/*<div style={styles.clientDetails}>
						<ItemDetails 
							stylesOptions={this.props.route.stylesOptions}
							item={this.state.currentclient}
							showSendEmail={()=>this.setState({showSendEmail : true})}
						/>
					</div>*/}
				</div>
				


				
				 <Drawer
				  docked={false}
				  width={styles.rightDrawer}
				  open={props.openSearch}
				>
				  <SideList 
					  itemList={props.transformItemList(props.clientsList)} 
					  handleItemClick={(clientId)=>props.findAndShowClient(clientId)}
					  closeSideList={()=>props.toggleStateBool('openSearch')}
				  />
				</Drawer>
				
				<Drawer
					topic="OPEN_CLIENT_DETAILS"
					width={300}
					openSecondary = {true}
					open={props.openClientsDetails}
				>
				  <$ClientsDetails 
					  //stylesOptions={props.route.stylesOptions}
					  styles={styles.clientsDetails}
					  client={props.currentClient} 
					  handleItemClick={(clientId)=>props.findAndShowClient(clientId)}
					  closeSideList={()=>props.toggleStateBool('openClientsDetails')}
				  />
				</Drawer>
				
				</div>
            );
        }
        $TrbMap_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbMap_Template
    }
}
    

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Gallery3dView from "./trb-gallery-three-d-view.temaplate.jsx"
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';

// MATERIAL ICONS
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import Highlight from 'material-ui/svg-icons/editor/highlight';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import Lock from "material-ui/svg-icons/action/lock.js"
import Home from "material-ui/svg-icons/action/home.js"
import ViewColumn from "material-ui/svg-icons/action/view-column.js"
import ViewQuilt from "material-ui/svg-icons/action/view-quilt.js"
import ViewStream from "material-ui/svg-icons/action/view-stream.js"
import LockOpen from "material-ui/svg-icons/action/lock-open.js"
import Close from "material-ui/svg-icons/navigation/close.js"
import Apps from "material-ui/svg-icons/navigation/apps.js"
import FullScreen from "material-ui/svg-icons/navigation/fullscreen.js"
import FullScreenExit from "material-ui/svg-icons/navigation/fullscreen-exit.js"
import DropDown from "material-ui/svg-icons/navigation/arrow-drop-down.js"
import DropUp from "material-ui/svg-icons/navigation/arrow-drop-up.js"
import AddScreen from "material-ui/svg-icons/av/add-to-queue.js"
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionInfo from 'material-ui/svg-icons/action/info';
import CommunicationImportExport from 'material-ui/svg-icons/communication/import-export';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ImagePictureAsPdf from 'material-ui/svg-icons/image/picture-as-pdf';

import AddItem from 'material-ui/svg-icons/content/add-circle-outline';


// APP ICONS
import DropDownAll from '/imports/ui/static-data/svg/dropDownAll.jsx'
import DropUpAll from '/imports/ui/static-data/svg/dropUpAll.jsx'
import Ruler from '/imports/ui/static-data/svg/svg-ruler-template.jsx'


@DropDownAll()
class $DropDownAll{}

@DropUpAll()
class $DropUpAll{}

@Ruler()
class $Ruler{}

export default function TrbGalleryThreeD_Template() {
    return (wrappedComponent) => {
        const $TrbGalleryThreeD_Template = (props) => {
            let styles = props.styles
            let text = props.text
			let buttonAttr = {
				color : props.stylesOptions.theme.colors.secondary,
				hoverColor : props.stylesOptions.theme.colors.primary
			}
            return (
                <div id="trb-gallery-three-d-container" style={{width : "100%", display : "flex"}}>
					
					<div key="4"  style={{width : "200px", display : "flex", flexDirection : "column"}}>
						<div style={styles.upload}>
						  <div style={styles.legend}>Upload from file</div>
							<div>
							  <input type="file" id="file"  accept=".dae" required/>
							</div>
							<div style={styles.dragDrop}>
								Drag & Drop
							</div>
							<div>
								<FlatButton secondary={true}>Submit</FlatButton>
							 </div>
						</div>
					<div>
						{
							props.itemsList ? 
							props.itemsList.map((x, index)=>{
								return (
									<Card key={"card"+ index}>
										<CardHeader
										  title={x.name}
										  actAsExpander={true}
										  showExpandableButton={true}
										  style= {Object.assign({}, styles.play)}
										/>
										<CardText expandable={true} style= {Object.assign({}, styles.play)}>
											<p>{x.mainGeom.name}</p>
											  {x.detailGeom.map((y, index2)=>{return <p key={index2}>{y.name}</p>})}

										</CardText>
										<CardActions>
											 <FlatButton label="CHARGER" style= {Object.assign({}, styles.play)} onClick={()=>props.loadItem(index)}/>
										</CardActions>
									</Card> 
								)
							}) :
							<p>No records</p>
						}
					</div>
					</div>
					
					<div style={{display : "flex", flexDirection : "column", flex : 1}}>
						 <div style={styles.toolBar}>
							<IconButton>
								<AddItem {...buttonAttr}/>
							</IconButton> 
							<IconButton>
								<$DropUpAll {...buttonAttr}/> 
							</IconButton>  
							<IconButton>
								<Highlight  {...buttonAttr}/> 
							</IconButton> 
							<IconButton>
								<$Ruler  {...buttonAttr}/> 
							</IconButton> 
							 <IconButton>
								<ImagePictureAsPdf  {...buttonAttr}/> 
							</IconButton>
							<IconButton>
								<LockOpen {...buttonAttr}/> 
							</IconButton>
							  <IconButton>
								<FullScreen {...buttonAttr}/>
							</IconButton> 
							<IconButton>
								<ViewStream {...buttonAttr}/>
							</IconButton> 
							<IconButton>
								<ViewColumn {...buttonAttr}/>
							</IconButton> 
							<IconButton>
								<ViewQuilt {...buttonAttr}/>
							</IconButton> 
							 <IconButton>
								<Apps {...buttonAttr}/>
							</IconButton>
							<IconButton>
								<Refresh {...buttonAttr}/>
							</IconButton> 	
							 <IconButton>
								<Close {...buttonAttr}/>
							</IconButton> 
						</div>
						<div key="2" id="mainView" style={{width : "100%", display : "flex", flex : 1, minHeight:"500px"}}>
							{
								props.geometries[0] ? 
									<Gallery3dView  
									   style={styles.viewBox}
									   buttonAttr={buttonAttr}
									   mainGeometry={props.geometries[0]} 
									   viewId="mainView"  divId="three" 
									   legend={props.items[0].name} 
									   camPosZ={props.camPosZ[0]}/> : 
									<div style={styles.center}>
										<RefreshIndicator
										  size={50}
										  left={70}
										  top={0}
										  loadingColor="#FF9800"
										  status="loading"
										  style={styles.refresh}
										/>
									  </div>
							}
						</div>
						<div key="3" style={{display : "flex", flexWrap : "wrap"}}>
						{props.itemsDetail.map((item, index) => { return (
							<div  style={Object.assign({}, styles.detailView, styles.border)} id={"detailView" + index} key={index}>	
								{
									props.geometries[index+1] ? 
										<Gallery3dView 
											mainGeometry={props.geometries[index+1]} 
											style={styles.viewBox} viewId={"detailView0"} 
											divId={"threeDetail"+index} 
											legend={props.items[index+1].name} 
											camPosZ={props.camPosZ[1]}/> : 
										<div style={styles.center}>
									<RefreshIndicator
									  size={50}
									  left={70}
									  top={0}
									  loadingColor="#FF9800"
									  status="loading"
									  style={styles.refresh}
									/>
								  </div>
								}
							</div>			
						)})}
						</div>
					</div>
						
				</div>
            );
        }
        $TrbGalleryThreeD_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbGalleryThreeD_Template
    }
}
    
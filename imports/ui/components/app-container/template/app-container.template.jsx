
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ButtonWrapper from "./app-container-button-wrapper.template.jsx"

@ButtonWrapper()
class $ButtonWrapper{}

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import DropDownMenu from 'material-ui/DropDownMenu';

// MATERIAL ICONS
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

import DefaultIcon from "./app-container.default-icon.template.jsx"

@DefaultIcon()
class $DefaultIcon{}

export default function AppContainer_Template(childs, icons) {
    return (wrappedComponent) => {
        const $AppContainer_Template = (props) => {
            let styles = props.styles
            let text = props.text
			
			let appliAttr = {
				fill : "none",
				hoverFill : "none",
				color : props.stylesOptions.theme.colors.primary,
				hoverColor : props.stylesOptions.theme.colors.primary,
				width : "70px",
				showBox : true,
				boxStrokeColor : "none",
				hoverBoxStrokeColor : props.stylesOptions.theme.colors.primary,
				hoverBoxFill : "white",
				boxFill : "white",	
			}
			
			let buttonAttr = {
				color : props.stylesOptions.theme.colors.secondary,
				hoverColor : props.stylesOptions.theme.colors.primary
			}
		
			icons = icons ? icons : {}
			Object.assign(icons, {DefaultIcon : $DefaultIcon})

			/*for(var key in icons) {
				if(icons.hasOwnProperty(key)) {
					let appIcon = icons[key]()(class $Icon{})
					icons[key] = appIcon;
				}
			}*/
			
			
			
			let applications = {}
			
			for(var key in childs) {
				if(childs.hasOwnProperty(key)) {
					applications[key] = {
						app : childs[key],
						icon : icons[key] ? icons[key] : icons.DefaultIcon
					};
				}
			}
			
            return (
                <div key={props.key} style={styles.containerBox}>
				{/*<div style={styles.dropContainerTools}>
					<IconButton onClick={()=>props.toggleContainerTools(props.index)}>
						{props.layout.viewTools ? <DropUp {...buttonAttr}/> : <DropDown {...buttonAttr}/>}
					</IconButton>
				</div>*/}
				{props.viewContainerTools[props.index] && <div id={"container-header" + props.index} style={styles.contentHeader}>
						<div style={{display : "flex"}}>
							<IconButton onClick={()=>props.toggleContainerTools(props.index)}>
								{props.layout.viewTools ? <DropUp {...buttonAttr}/> : <DropDown {...buttonAttr}/>}
							</IconButton>
							{
							  props.viewTools[props.index] && <DropDownMenu
							  style={{width : "150px", margin:"0px", padding:"0px"}}
							  value={props.category}
							  onChange={(event, index, value)=>props.setCategory(event, index, value)}
							  underlineStyle={{display:"none"}}
							>
							  {props.categoryList.map((category, index)=>{
									 return <MenuItem key={index} value={category} primaryText={category} />
								 })}
							</DropDownMenu> 
							}
						</div>
							<div  id={"container-header-tools" + props.index} style={{display : "flex"}}>
								{
									props.viewTools[props.index] ? 
										
									<div style={{display : "flex"}}>
										<IconButton style={{cursor : "pointer"}} onClick={()=>props.lockContainer(props.index)}> 
											 <Home {...buttonAttr}/> 
										</IconButton>
										<IconButton style={{cursor : "pointer"}} onClick={()=>props.lockContainer(props.index)}> 
											{props.layout.isDraggable ? <LockOpen {...buttonAttr}/> : <Lock {...buttonAttr}/>} 
										</IconButton>
										<IconButton style={{cursor : "pointer"}} onClick={()=>props.toggleFullScreen(props.index)}> 
											<FullScreen {...buttonAttr}/>  
										</IconButton>
										<IconButton style={{cursor : "pointer"}} onClick={()=>props.deleteContainer(props.index)}>
											<Close {...buttonAttr}/>
										</IconButton>
									</div> : 
									
									<IconMenu
									  iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
									  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
									  targetOrigin={{horizontal: 'right', vertical: 'top'}}
									>
										  <MenuItem 
											  primaryText="home" 
											  rightIcon={<Home {...buttonAttr}/> } 
											  />
										  <MenuItem 
											  primaryText="lock" 
											  rightIcon={props.layout.isDraggable ? <LockOpen {...buttonAttr}/> : <Lock {...buttonAttr}/>}
											  onClick={()=>props.lockContainer(props.index)}
											  />
										  <MenuItem 
											  primaryText="resize" 
											  rightIcon={props.layout.isDraggable ? <FullScreen {...buttonAttr}/> : <FullScreenExit {...buttonAttr}/>} 
											  onClick={()=>props.toggleFullScreen(props.index)}
											  />
										  <MenuItem 
											  primaryText="close" 
											  rightIcon={<Close {...buttonAttr}/> } 
											  onClick={()=>props.deleteContainer(props.index)}
											  />
									</IconMenu>
								}
						</div>
					</div>}

					<div className="scrollbar" style={styles.applisBox} >
						{ !props.renderChild && Object.keys(applications).filter((appName)=>{
							
							let cat = props.appList.filter((app)=>{return appName===app.name})[0].categories
							if(props.category==="all") {return true}
							else {return cat.indexOf(props.category) !== -1}
							
						}).map((item, index)=>{
							
							let iconName = icons.hasOwnProperty(item) ? item : "DefaultIcon" 
							return ( 
								<div 
								   key={index} 
								   style={styles.itemBox} 
								   onClick={()=>props.setRenderChild(item)}
								   > 
									<$ButtonWrapper {...appliAttr} svgIcon={icons[iconName]}>
										{/*React.createElement(icons[iconName])*/}
									</$ButtonWrapper>
								</div>
							)
						})}
						{props.renderChild && <props.childToRender />}
					</div>
				</div>
            );
        }
        $AppContainer_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $AppContainer_Template
    }
}
    
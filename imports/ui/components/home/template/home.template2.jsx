
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route,  Link, Switch } from 'react-router-dom'

var ReactGridLayout = require('react-grid-layout');
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import HomeToolbar from "./home.toolbar.template.jsx"

@HomeToolbar()
class $HomeToolbar{}

//import ButtonWrapper from './home.button.template.jsx'

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

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

// APP ICONS
import DropDownAll from '/imports/ui/static-data/svg/dropDownAll.jsx'
import DropUpAll from '/imports/ui/static-data/svg/dropUpAll.jsx'

@DropDownAll()
class $DropDownAll{}

@DropUpAll()
class $DropUpAll{}

import SvgRecorder from "./icons/svg-recorder.template.jsx"
import SvgAtelier from "./icons/svg-atelier.template.jsx"
import SvgHf from "./icons/svg-hf.template.jsx"
import SvgEaf from "./icons/svg-eaf.template.jsx"
import SvgSearch from "./icons/svg-search.template.jsx"
import SvgMap from "./icons/svg-map.template.jsx"
import SvgBe from "./icons/svg-be.template.jsx"
import SvgEtuve from "./icons/svg-etuve.template.jsx"
import SvgBoucheuse from "./icons/svg-boucheuse.template.jsx"
import SvgChantier from "./icons/svg-chantier.template.jsx"
import SvgSchool from "./icons/svg-school.template.jsx"
import SvgRigoleCoupe from "./icons/svg-rigole-coupe.template.jsx"

import ButtonWrapper from "./home.button.wrapper.jsx"


@ButtonWrapper()
@SvgRecorder()
class $SvgRecorder{}

@ButtonWrapper()
@SvgAtelier()
class $SvgAtelier{}

@ButtonWrapper()
@SvgHf()
class $SvgHf{}

@ButtonWrapper()
@SvgEaf()
class $SvgEaf{}

@ButtonWrapper()
@SvgSearch()
class $SvgSearch{}

@ButtonWrapper()
@SvgMap()
class $SvgMap{}

@ButtonWrapper()
@SvgBe()
class $SvgBe{}

@ButtonWrapper()
@SvgEtuve()
class $SvgEtuve{}

@ButtonWrapper()
@SvgBoucheuse()
class $SvgBoucheuse{}

@ButtonWrapper()
@SvgChantier()
class $SvgChantier{}

@ButtonWrapper()
@SvgSchool()
class $SvgSchool{}

@ButtonWrapper()
@SvgRigoleCoupe()
class $SvgRigoleCoupe{}

const icons = [
	<$SvgRecorder />,
	<$SvgAtelier />,
	<$SvgHf />,
	<$SvgEaf />,
	<$SvgSearch />,
	<$SvgMap />,
	<$SvgBe />,
	<$SvgEtuve />,
	<$SvgBoucheuse />,
	<$SvgChantier />,
	<$SvgSchool />,
	<$SvgRigoleCoupe />,
	<$SvgRigoleCoupe />,
]



export default function Home_Template(childs) {
    return (wrappedComponent) => {
        const $Home_Template = (props) => {
            let styles = props.styles
            let text = props.text
			let thisProps = props
			
		
			
			let appliAttr = {
				fill : "none",
				hoverFill : "none",
				color : props.stylesOptions.theme.colors.primary,
				hoverColor : props.stylesOptions.theme.colors.primary,
				width : "70px",
				showBox : true,
				boxStrokeColor : props.stylesOptions.theme.colors.primary,
				hoverBoxStrokeColor : "none",
				hoverBoxFill : "white",
				boxFill : "none",
				
			}
			
			
            return (
                <div id="home-container" className="container" style={styles.container}>
					<div id="home-band-image-box" style={styles.bandImageBox}>
						{/*<img id="bandImageBox" src="/home/fond_trb.jpg" style={styles.bandImage} />
						<img src="/home/baseline.png" style={styles.baseline} />*/}
						
					</div>
					
					<$HomeToolbar {...props}/>
					
					
					<div style={{position:"absolute", width : "100%"}}> 
						<ResponsiveReactGridLayout 
							className="layout" 
							layouts={props.layouts} 
							onLayoutChange={(layout)=>props.onLayoutChange(layout)}
							breakpoints={{lg: 500}}
							cols={{lg: 12}} 
							rowHeight={30} 
							useCSSTransforms={true}
							>
							
							{props.layouts.lg.map((layout, index)=>{
								
								return <div key={layout.i} style={styles.containerBox}>
									
										<childs.AppContainer 
											   key={layout.i} 
											   index={index} 
											   layout={layout}
											   {...props}
											   />
									</div>
								
								
								{/*<div key={layout.i} style={styles.containerBox}>
								<div style={styles.dropContainerTools}>
									<IconButton onClick={()=>props.toggleContainerTools(index)}>
										{layout.viewTools ? <DropUp {...buttonAttr}/> : <DropDown {...buttonAttr}/>}
									</IconButton>
								</div>
								{props.viewContainerTools[index] && <div id={"container-header" + index} style={styles.contentHeader}>
										<div style={{marginLeft : "50px"}}>
											Applications
										</div>
										<div  id={"container-header-tools" + index} style={{display : "flex"}}>
											{props.viewTools[index] ? <div style={{display : "flex"}}>
												<IconButton style={{cursor : "pointer"}} onClick={()=>props.lockContainer(index)}> 
													 <Home {...buttonAttr}/> 
												</IconButton>
												<IconButton style={{cursor : "pointer"}} onClick={()=>props.lockContainer(index)}> 
													{layout.isDraggable ? <LockOpen {...buttonAttr}/> : <Lock {...buttonAttr}/>} 
												</IconButton>
												<IconButton style={{cursor : "pointer"}} onClick={()=>props.toggleFullScreen(index)}> 
													<FullScreen {...buttonAttr}/>  
												</IconButton>
												<IconButton style={{cursor : "pointer"}} onClick={()=>props.deleteContainer(index)}>
													<Close {...buttonAttr}/>
												</IconButton>
											</div>: 
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
												  rightIcon={layout.isDraggable ? <LockOpen {...buttonAttr}/> : <Lock {...buttonAttr}/>}
												  onClick={()=>props.lockContainer(index)}
												  />
											  <MenuItem 
												  primaryText="resize" 
												  rightIcon={layout.isDraggable ? <FullScreen {...buttonAttr}/> : <FullScreenExit {...buttonAttr}/>} 
												  />
											  <MenuItem 
												  primaryText="close" 
												  rightIcon={<Close {...buttonAttr}/> } 
												  onClick={()=>props.deleteContainer(index)}
												  />
											</IconMenu>}
										</div>
									</div>}
									
									<div className="scrollbar" style={styles.applisBox} >
										{thisProps.items.map((item, index)=>{
											return <div 
													   key={index} 
													   style={styles.itemBox} 
													   onClick={()=>thisProps.history.push("/home"+item.url)}
													   >
												{React.cloneElement(icons[index], {...appliAttr})}
												{icons[index]}
												</div>
										})}
									</div>
								</div>*/}
							})}
						  </ResponsiveReactGridLayout>
						</div>
					{/*<div style={styles.content}>
						<div style={styles.leftContent}>
						</div>
						<div style={styles.rightContent}>
							
						</div>
						
						<div style={styles.widgets}>
						
							
						</div>
					</div>*/}
				</div>
            );
        }
        $Home_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Home_Template
    }
}
    
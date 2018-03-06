
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Filters from "./trb-gallery-mui.template.filters.jsx"

import Chip from 'material-ui/Chip';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import Drawer from 'material-ui/Drawer'
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

@Filters()
class $Filters{}

export default function TrbGalleryMui_Template() {
    return (wrappedComponent) => {
        const $TrbGalleryMui_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-gallery-mui-container" className="container" style={styles.container}>
					<div style={styles.header}>	
						{/*<h1  id="trb-gallery-mui-title" style={styles.title}>{text.title}</h1>*/}
						<button style={styles.filtersButton} onClick={()=>{props.toggleStateBool('openDrawerFilters')}}>{text.filtersButton}</button>
						<button style={styles.actionsButton} onClick={()=>{props.toggleStateBool('openDrawerActions')}}>{text.actionsButton}</button>
					</div>
					<div style={styles.content}>
						<Drawer
							open={props.openDrawerFilters}
							docked={false}
							{...styles.drawerFilters.attr}
							onRequestChange={()=>props.toggleStateBool('openDrawerFilters')}
							>
							<div style={styles.filtersBox}>
								<$Filters 
									{...props}
									styles={styles.filters}
									text={text.filters}
									/>
							</div>
						</Drawer>
						<Drawer
							open={props.openDrawerActions}
							openSecondary={true}
							docked={false}
							{...styles.drawerActions.attr}
							onRequestChange={()=>props.toggleStateBool('openDrawerActions')}
							>
							<div style={styles.actionsBox}>
								Actions
							</div>
								<List>
								  <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
								  <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
								  <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
								  <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
								  <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
								</List>
								<Divider />
								<List>
								  <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
								  <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
								  <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
								  <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
								</List>
						</Drawer>
						<div style={styles.imageViewer}>
							<div style={styles.imageSelector}>
								<div 
									style={styles.goLeft}
									onClick={props.goLeft}
									onMouseOver={(e)=>props.changeSrc(e, "/trb-gallery-mui/leftArrow2.png")}
									onMouseOut={(e)=>props.changeSrc(e, "/trb-gallery-mui/leftArrow.png")}
									>
										<img 
										style={styles.navImage} 
										src="/trb-gallery-mui/leftArrow.png"
										/>
								</div>
								<div style={styles.smallImagesBox2}>
									<div id="trb-gallery-mui-smallImagesBox" style={styles.smallImagesBox}>
										{props.picturesList.map((picture, index)=>{
											return (
												<div key={index} style={styles.smallImageBox}>
													<img  src={picture.smallPhoto} style={styles.smallImage} onClick={()=>props.getOnePicture(picture._id)}/>
												</div>
											)
										})}
									</div>
								</div>
								<div 
									style={styles.goRight}
									onClick={props.goRight}
									onMouseOver={(e)=>props.changeSrc(e, "/trb-gallery-mui/rightArrow2.png")}
									onMouseOut={(e)=>props.changeSrc(e, "/trb-gallery-mui/rightArrow.png")}
									>
									<img 
										style={styles.navImage} 
										src="/trb-gallery-mui/rightArrow.png" 
										/>
								</div>
							</div>
							
						
							
							<div style={styles.controls2}>
								<div 
									style={styles.goLeft2}
									onClick={props.goLeft}
									onMouseOver={(e)=>props.changeSrc(e, "/trb-gallery-mui/leftArrow2.png")}
									onMouseOut={(e)=>props.changeSrc(e, "/trb-gallery-mui/leftArrow.png")}
									>
										<img 
										style={styles.navImage} 
										src="/trb-gallery-mui/leftArrow.png"
										/>
								</div>
								<div 
									style={styles.goRight2}
									onClick={props.goRight}
									onMouseOver={(e)=>props.changeSrc(e, "/trb-gallery-mui/rightArrow2.png")}
									onMouseOut={(e)=>props.changeSrc(e, "/trb-gallery-mui/rightArrow.png")}
									>
									<img 
										style={styles.navImage} 
										src="/trb-gallery-mui/rightArrow.png" 
										/>
								</div>
							</div>
							
							<div style={styles.imageBox}>
								{
									props.picture.photo ?
									<img 
										style={styles.image} 
										src={props.picture.photo || "#"}
										/>:
									<div style={styles.selectPhoto}>
										{text.selectPhoto}
									</div>
								}
							</div>
							<div  id="trb-gallery-mui-infosBox"  style={styles.infosBox}>
								    {props.keyList.map((key, index)=>{
									console.log(props.picture[key])
										if(props.picture[key]===undefined) {}
										else return <Chip key={index} style={styles.chip}>{props.picture[key]}</Chip>
									})}
								</div>
						</div>
					</div>
					
				</div>
            );
        }
        $TrbGalleryMui_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbGalleryMui_Template
    }
}
    
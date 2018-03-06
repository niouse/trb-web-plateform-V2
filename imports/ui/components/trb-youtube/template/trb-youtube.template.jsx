
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import DropDownMenu from 'material-ui/DropDownMenu';
import TextField from 'material-ui/TextField';

//MATERIL ICONS
import Settings from "material-ui/svg-icons/action/settings.js"

// APP ICONS
import GirdOne from '/imports/ui/static-data/svg/svg-gird-one.template.jsx'
import GirdTwo from '/imports/ui/static-data/svg/svg-gird-two.template.jsx'
import GirdThree from '/imports/ui/static-data/svg/svg-gird-three.template.jsx'





@GirdOne()
class $GirdOne{}

@GirdTwo()
class $GirdTwo{}

@GirdThree()
class $GirdThree{}

export default function TrbYoutube_Template() {
    return (wrappedComponent) => {
        const $TrbYoutube_Template = (props) => {
            let styles = props.styles
            let text = props.text
			let buttonAttr = {
				color : props.stylesOptions.theme.colors.secondary,
				hoverColor : props.stylesOptions.theme.colors.primary
			}
            return (
                <div id="trb-youtube-container" className="container" style={styles.container}>
					<div style={styles.toolBar}>
						<DropDownMenu
							  style={{width : "100px", margin:"0px", padding:"0px"}}
							  value={props.category}
							  onChange={(event, index, value)=>props.setCategory(event, index, value)}
							  underlineStyle={{display:"none"}}
							>
							  {props.categoryList.map((category, index)=>{
									 return <MenuItem key={index} value={category} primaryText={category} />
								 })}
						</DropDownMenu> 
						<TextField hintText="search"
							style={{width : "200px"}}
							/>
						<IconButton onClick={()=>props.setVideoSize("500")}>
							<$GirdOne {...buttonAttr}/> 
						</IconButton> 
						<IconButton onClick={()=>props.setVideoSize("250")}>
							<$GirdTwo {...buttonAttr}/> 
						</IconButton> 
						<IconButton onClick={()=>props.setVideoSize("150")}>
							<$GirdThree {...buttonAttr}/> 
						</IconButton> 
						<IconButton onClick={()=>props.setVideoSize("150")}>
							<Settings {...buttonAttr}/> 
						</IconButton> 
						
					</div>
					<div style={styles.videoGallery}>
						{props.youtubeList.map((video, index)=>{
							return <div style={styles.videoBox}>
								<iframe width={props.videoSize} height={(Number(props.videoSize)*0.75).toString()} key={index}  src={video.url} frameBorder="0" allowFullScreen></iframe>
								</div>
						})}
					</div>
				</div>
            );
        }
        $TrbYoutube_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbYoutube_Template
    }
}
    
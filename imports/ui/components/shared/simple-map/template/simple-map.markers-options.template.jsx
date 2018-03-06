
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function SimpleMap_MarkersOptions_Template() {
    return (wrappedComponent) => {
        const $SimpleMap_MarkersOptions_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="simple-map-markers-options-container" style={styles.container}>
					<div style={styles.markersOptionsList}>
						<div style={styles.drawerHeader}>
							<span style={styles.drawerTitle}>Options</span>
							<div 
								style={styles.drawerClose}
								onTouchTap={()=>props.toggleStateBool('showMarkersOptions')}
							>X</div>
						</div>

						{props.iconList.map((x, index)=>{
							var color = x.displayed ? "green": "red"
							var boxStyle = {
								backgroundColor : color
							}
							return (
								<div 
									key={index} 
									style={Object.assign({}, styles.markerOptions, boxStyle)} 
									onClick={(e)=>props.toggleMarker(e, x.name)}
								>
									<div style={styles.leftIconBox}>
										<img src={"/trb-map/"+x.name+".png"} style={styles.leftIcon}/>
									</div>
									<div style={styles.markerName}>
										{x.name}
									</div>
								</div>
							)
						})}
					</div>			

				</div>
            );
        }
        $SimpleMap_MarkersOptions_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $SimpleMap_MarkersOptions_Template
    }
}
    
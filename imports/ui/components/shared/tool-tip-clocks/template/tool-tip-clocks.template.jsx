
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function ToolTipClocks_Template(Flight, Hotel, ZoomIn, IconButton) {
    return (wrappedComponent) => {
        const $ToolTipClocks_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="tool-tip-clocks-container" className="container" style={styles.container}>
					<div style={styles.titleBox}>
						<div style={styles.title}>{props.location.name}</div>
					</div>
					<div style={styles.timeBox}> 
						<div style={styles.time}>{props.time} </div>
					</div>
					<div style={styles.buttonBox}> 
						<IconButton 
							tooltip={tooltip="flight to "+props.location.name}
							onClick={()=>props.goToFlight(props.location.code)}
						>
							<Flight style={styles.button} {...styles.button.attr}/> 
						 </IconButton>
						<IconButton 
							tooltip={tooltip="Hotel in "+props.location.name}
							onClick={()=>props.goToFlight(props.location.code)}
						>
							<Hotel style={styles.button} {...styles.button.attr}/> 
						 </IconButton>
						<IconButton 
							tooltip={tooltip="Events in "+props.location.name}
							onClick={()=>props.goToFlight(props.location.code)}
						>
							<ZoomIn style={styles.button} {...styles.button.attr}/> 
						</IconButton>							
					</div>
				</div>
            );
        }
        $ToolTipClocks_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
			location : PropTypes.object.isRequired,
			time: PropTypes.string.isRequired,
        };
        return $ToolTipClocks_Template
    }
}
    
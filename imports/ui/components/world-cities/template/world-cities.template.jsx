
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function WorldCities_Template(childs) {
    return (wrappedComponent) => {
        const $WorldCities_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="world-cities-container" className="container" style={styles.container}>					
					<div style={styles.clocksBox}>
						{props.locationList.map((location, index)=>{
							return <childs.TooTipClocks key={index} location = {location}/>
						})}
					</div>
				</div>
            );
        }
        $WorldCities_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $WorldCities_Template
    }
}
    
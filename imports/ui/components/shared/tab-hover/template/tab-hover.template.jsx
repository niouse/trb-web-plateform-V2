
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TabHover_Template() {
    return (wrappedComponent) => {
        const $TabHover_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
				<div 
					id={props.id} 
					style = {styles.container} 
					onMouseEnter={()=>props.onMouseEnter(props.id)} 
					onMouseLeave={()=>props.onMouseLeave(props.id)}
				>
					<div id={props.nameId} style={styles.itemName}>{props.item.name}</div>
				</div>
			)
        }
        $TabHover_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TabHover_Template
    }
}
    
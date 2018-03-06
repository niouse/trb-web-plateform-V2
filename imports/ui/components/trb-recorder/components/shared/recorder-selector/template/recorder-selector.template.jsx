
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function RecorderSelector_Template(SelectField, MenuItem) {
    return (wrappedComponent) => {
        const $RecorderSelector_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="recorder-selector-container"  style={styles.container}>
					<div style={styles.label}>{text.label} </div>
					 <SelectField 
						{...styles.selectField.attr}
						style={styles.selectField}
						value={props.selectedValue}
						onChange={(event, index, value)=>props.handleChange(event, index, value)} 
					>
						 {props.list.map((x, index)=>{
							 return (
								<MenuItem key={index} value={x._id} primaryText={x.name} />
							 )
						 })}
					</SelectField> 
				</div>
            );
        }
        $RecorderSelector_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
			list : PropTypes.array.isRequired,
			handleChange : PropTypes.func.isRequired,
        };
        return $RecorderSelector_Template
    }
}
    
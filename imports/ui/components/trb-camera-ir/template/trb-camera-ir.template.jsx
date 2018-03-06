
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbCameraIr_Template() {
    return (wrappedComponent) => {
        const $TrbCameraIr_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-camera-ir-container" className="container" style={styles.container}>
					<h1  id="trb-camera-ir-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbCameraIr_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbCameraIr_Template
    }
}
    
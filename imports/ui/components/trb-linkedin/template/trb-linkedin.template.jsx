
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbLinkedin_Template() {
    return (wrappedComponent) => {
        const $TrbLinkedin_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-linkedin-container" className="container" style={styles.container}>
					<h1  id="trb-linkedin-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbLinkedin_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbLinkedin_Template
    }
}
    
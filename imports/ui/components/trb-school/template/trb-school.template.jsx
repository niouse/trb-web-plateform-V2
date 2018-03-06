
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbSchool_Template() {
    return (wrappedComponent) => {
        const $TrbSchool_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-school-container" className="container" style={styles.container}>
					<h1  id="trb-school-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbSchool_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbSchool_Template
    }
}
    
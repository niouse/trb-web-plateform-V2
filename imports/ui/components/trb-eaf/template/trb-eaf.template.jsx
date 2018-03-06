
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbEaf_Template() {
    return (wrappedComponent) => {
        const $TrbEaf_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-eaf-container" className="container" style={styles.container}>
					<h1  id="trb-eaf-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbEaf_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbEaf_Template
    }
}
    
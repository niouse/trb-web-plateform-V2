
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbSettings_Template() {
    return (wrappedComponent) => {
        const $TrbSettings_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-settings-container" className="container" style={styles.container}>
					<h1  id="trb-settings-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbSettings_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbSettings_Template
    }
}
    
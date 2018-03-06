
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbChantier_Template() {
    return (wrappedComponent) => {
        const $TrbChantier_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-chantier-container" className="container" style={styles.container}>
					<h1  id="trb-chantier-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbChantier_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbChantier_Template
    }
}
    
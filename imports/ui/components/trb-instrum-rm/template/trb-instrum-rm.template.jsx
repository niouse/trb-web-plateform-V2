
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbInstrumRm_Template() {
    return (wrappedComponent) => {
        const $TrbInstrumRm_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-instrum-rm-container" className="container" style={styles.container}>
					<h1  id="trb-instrum-rm-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbInstrumRm_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbInstrumRm_Template
    }
}
    
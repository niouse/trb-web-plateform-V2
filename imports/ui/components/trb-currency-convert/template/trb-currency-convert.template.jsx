
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbCurrencyConvert_Template() {
    return (wrappedComponent) => {
        const $TrbCurrencyConvert_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-currency-convert-container" className="container" style={styles.container}>
					<h1  id="trb-currency-convert-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbCurrencyConvert_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbCurrencyConvert_Template
    }
}
    
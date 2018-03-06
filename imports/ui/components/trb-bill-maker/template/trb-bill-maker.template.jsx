
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbBillMaker_Template() {
    return (wrappedComponent) => {
        const $TrbBillMaker_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-bill-maker-container" className="container" style={styles.container}>
					<h1  id="trb-bill-maker-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbBillMaker_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbBillMaker_Template
    }
}
    
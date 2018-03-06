
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbMail_Template() {
    return (wrappedComponent) => {
        const $TrbMail_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-mail-container" className="container" style={styles.container}>
					<h1  id="trb-mail-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbMail_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbMail_Template
    }
}
    
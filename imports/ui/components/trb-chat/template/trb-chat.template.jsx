
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbChat_Template() {
    return (wrappedComponent) => {
        const $TrbChat_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-chat-container" className="container" style={styles.container}>
					<h1  id="trb-chat-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbChat_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbChat_Template
    }
}
    
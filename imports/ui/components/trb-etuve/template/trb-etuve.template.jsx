
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbEtuve_Template() {
    return (wrappedComponent) => {
        const $TrbEtuve_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-etuve-container" className="container" style={styles.container}>
					<h1  id="trb-etuve-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbEtuve_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbEtuve_Template
    }
}
    
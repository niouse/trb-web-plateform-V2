
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbAtelierMasse_Template() {
    return (wrappedComponent) => {
        const $TrbAtelierMasse_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-atelier-masse-container" className="container" style={styles.container}>
					<h1  id="trb-atelier-masse-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbAtelierMasse_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbAtelierMasse_Template
    }
}
    
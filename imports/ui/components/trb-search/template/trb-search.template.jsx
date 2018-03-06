
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbSearch_Template() {
    return (wrappedComponent) => {
        const $TrbSearch_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-search-container" className="container" style={styles.container}>
					<h1  id="trb-search-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbSearch_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbSearch_Template
    }
}
    

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbDataVis_Template() {
    return (wrappedComponent) => {
        const $TrbDataVis_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-data-vis-container" className="container" style={styles.container}>
					<h1  id="trb-data-vis-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbDataVis_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbDataVis_Template
    }
}
    
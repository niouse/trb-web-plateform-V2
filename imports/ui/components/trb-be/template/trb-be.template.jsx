
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbBe_Template() {
    return (wrappedComponent) => {
        const $TrbBe_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-be-container" className="container" style={styles.container}>
					<h1  id="trb-be-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbBe_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbBe_Template
    }
}
    
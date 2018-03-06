
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbBoucheuse_Template() {
    return (wrappedComponent) => {
        const $TrbBoucheuse_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-boucheuse-container" className="container" style={styles.container}>
					<h1  id="trb-boucheuse-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbBoucheuse_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbBoucheuse_Template
    }
}
    

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbWhiteboard_Template() {
    return (wrappedComponent) => {
        const $TrbWhiteboard_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-whiteboard-container" className="container" style={styles.container}>
					<h1  id="trb-whiteboard-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>{TogetherJS(this); return false}}>Start TogetherJS</button>*/}
					<div id="whiteboard" style={{width : "640px", height:"480px"}}></div>
					
				</div>
            );
        }
        $TrbWhiteboard_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbWhiteboard_Template
    }
}
    
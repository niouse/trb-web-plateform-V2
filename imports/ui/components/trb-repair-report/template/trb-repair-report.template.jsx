
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbRepairReport_Template() {
    return (wrappedComponent) => {
        const $TrbRepairReport_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-repair-report-container" className="container" style={styles.container}>
					<h1  id="trb-repair-report-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbRepairReport_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbRepairReport_Template
    }
}
    
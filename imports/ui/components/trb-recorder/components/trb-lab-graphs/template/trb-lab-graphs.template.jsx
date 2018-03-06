
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbLabGraphs_Template(RecorderSelector, TrbLabRecorder) {
    return (wrappedComponent) => {
        const $TrbLabGraphs_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-lab-graphs-container" className="container" style={styles.container}>
					<RecorderSelector 
						list={props.recorders}
						onItemSelect={(id, index)=>props.selectRecorder(id, index)}
						stylesOptions={props.stylesOptions}
						value={props.recorderId}
						containerStyle={{justifyContent : "flex-start"}}
						/>
					<TrbLabRecorder 
						recorder={props.recorder}
						stylesOptions={props.stylesOptions}
						/>
					
				</div>
            );
        }
        $TrbLabGraphs_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
			selectRecorder : PropTypes.func.isRequired,
        };
        return $TrbLabGraphs_Template
    }
}
    
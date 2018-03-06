
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbLabSerieViewer_Template(HighchartsSimple, TrbLabRecorderEdit, ModeEdit) {
    return (wrappedComponent) => {
        const $TrbLabSerieViewer_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-lab-serie-viewer-container" className="container" style={styles.container}>
								
					<HighchartsSimple 
						chartId="myChart" 
						series={[props.serie]}
						canUpdate={true}
						style={styles.chart}
					/>
				</div>
            );
        }
        $TrbLabSerieViewer_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
			serie : PropTypes.object.isRequired,
        };
        return $TrbLabSerieViewer_Template
    }
}
    
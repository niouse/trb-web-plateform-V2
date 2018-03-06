
import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Page1=(props)=>{
	return <p>TA GRAND MERE</p>
}

const Page2=(props)=>{
	return <p>TON GRAND PERE</p>
}

export default function TrbDataRecorder_Template(Switch, Route) {
    return (wrappedComponent) => {
        const $TrbDataRecorder_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-data-recorder-container" className="container" style={styles.container}>
					<Switch>
						<Route exact path='/trb-data-recorder/page1' component={Page1}/>
						<Route path='/trb-data-recorder/page2' component={Page2}/>
					  </Switch>
				</div>
            );
        }
        $TrbDataRecorder_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbDataRecorder_Template
    }
}
    
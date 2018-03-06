
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function TrbLabSerieViewer_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbLabSerieViewer_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {	
				/*let options = {
					chartId : "chartId",
					operation : "updateSerie",
					value : [newProps.serie]
				}
				this.props.updateChartNext(options)*/
			}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            testMethod(test) {
                return test
            }
			
			convertTime(time){
				var date = new Date(time);
				var result = (date.getHours()-1)+"hr, "+date.getMinutes()+"min";
				return result
			}

            render() {
                return <WrappedComponent
				{...this.props}
				convertTime={this.convertTime}
				/>
            }
        }
        $TrbLabSerieViewer_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbLabSerieViewer_Api
    }
}
    
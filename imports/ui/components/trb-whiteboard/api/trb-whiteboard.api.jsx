
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function TrbWhiteboard_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbWhiteboard_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            componentDidMount() {
				var imageBoard = new DrawingBoard.Board('whiteboard', {
					//controls: ['Color', { Navigation: { reset: false }}],
					//background: 'bower_components/drawingboard.js/example/drawingboardjs.png',
					color: '#ff0',
					webStorage: false
				});
				//var downloadControl = new DrawingBoard.Control.Download(customBoard).addToBoard();
			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            testMethod(test) {
                return test
            }

            render() {
                return <WrappedComponent
				{...this.props}
				testMethod={()=>this.testMethod()}
				/>
            }
        }
        $TrbWhiteboard_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbWhiteboard_Api
    }
}
    
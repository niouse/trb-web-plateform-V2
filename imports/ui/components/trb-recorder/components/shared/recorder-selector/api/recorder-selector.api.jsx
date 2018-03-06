
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function RecorderSelector_Api(_optional) {
    return (WrappedComponent) => {
        class $RecorderSelector_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					selectedValue : props.value
				}
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            handleChange(event, index, value) {
			   this.props.onItemSelect(value, index)
               this.setState({
					selectedValue : value,
				})
            }

            render() {
                return <WrappedComponent
				{...this.props}
				handleChange={(event, index, value)=>this.handleChange(event, index, value)}
				selectedValue={this.state.selectedValue}
				/>
            }
        }
        $RecorderSelector_Api.propTypes = {
            styles: PropTypes.object.isRequired,
			onItemSelect : PropTypes.func.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $RecorderSelector_Api
    }
}
    
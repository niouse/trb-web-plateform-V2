import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function TrbLabGraphs_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbLabGraphs_Api extends Component {
            constructor(props) {
                super(props);
				//let firstId = props.match.params.recorderId || props.recorders[0]._id
				let firstId = props.recorderId ||  props.recorders[0]._id
				let firstIndex=props.recorders.findIndex((x)=>{
					return (x._id===firstId)
				})
                this.state = {
					recorderIndex : firstIndex,
					recorderId : firstId
				}
            }
            componentDidMount() {
				/*this.setState({
					
				})*/
			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            selectRecorder(id, index) {
               /* let result = this.props.recorders.filter((x, index)=>{
					return (x._id === id)
				})[0]
				this.setState({
					recorder : result
				})*/
				this.setState({
					recorderId : id,
					recorderIndex : index
				})
            }

            render() {
                return <WrappedComponent
				{...this.props}
				selectRecorder={(id, index)=>this.selectRecorder(id, index)}
				recorder={this.props.recorders[this.state.recorderIndex]}
				recorderId={this.state.recorderId}
				recorderIndex={this.state.recorderIndex}
				/>
            }
        }
        $TrbLabGraphs_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbLabGraphs_Api
    }
}
    
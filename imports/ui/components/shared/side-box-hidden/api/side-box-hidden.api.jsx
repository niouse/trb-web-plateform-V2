
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function SideBoxHidden_Api(_optional) {
    return (WrappedComponent) => {
        class $SideBoxHidden_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					open : false
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

            onMouseOver(){
				this.setState({
					open : true
				})
			}
			
			onMouseOut(){
				this.setState({
					open : false
				})
			}

            render() {
                return <WrappedComponent
				{...this.props}
				open={this.state.open}
				onMouseOver={()=>this.onMouseOver()}
				onMouseOut={()=>this.onMouseOut()}
				/>
            }
        }
        $SideBoxHidden_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $SideBoxHidden_Api
    }
}
    
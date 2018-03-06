
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function AppContainer_Api(childs) {
    return (WrappedComponent) => {
        class $AppContainer_Api extends Component {
            constructor(props) {
                super(props);
				this.categoryList
				
				if(props.categoryList){
					this.categoryList = props.categoryList.slice()
					this.categoryList.unshift("all")
				}
				else {
					this.categoryList = ["all"]
				}

                this.state = {
					renderChild : false,
					childToRender : false,
					category : this.categoryList[0]
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

            setRenderChild(item){
				this.setState({
					renderChild : item ? true : false,
					childToRender : item ? childs[item] : false,
				})
			}
			
			setCategory(event, index, value){
				this.setState({
					category : this.categoryList[index]
				})
			}

            render() {
                return <WrappedComponent
				{...this.props}
				renderChild={this.state.renderChild}
				setRenderChild={(item)=>this.setRenderChild(item)}
				childToRender={this.state.childToRender}
				categoryList={this.categoryList}
				setCategory={(event, index, value)=>this.setCategory(event, index, value)}
				category={this.state.category}
				/>
            }
        }
        $AppContainer_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $AppContainer_Api
    }
}
    
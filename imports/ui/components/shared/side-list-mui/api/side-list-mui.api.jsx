
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function SideListMui_Api(_optional) {
    return (WrappedComponent) => {
        class $SideListMui_Api extends Component {
            constructor(props) {
                super(props);
                this.state={
					itemList : props.itemList
				}
            }
            componentDidMount() {}
           componentWillReceiveProps(newProps) {
				this.setState({
					itemList : newProps.itemList
				})
			}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

			

			filterList(event){
				event.preventDefault();
				var updatedList = this.props.itemList;

				updatedList = updatedList.filter(function(item){
					//console.log(event.target.value.toLowerCase())
				  return item.primaryText.toLowerCase().search(
					event.target.value.toLowerCase()) !== -1;
				});
				//console.log(updatedList)
				this.setState({itemList: updatedList});
				//console.log(this.state.quizzList)
			}

            render() {
                return <WrappedComponent
				{...this.props}
				itemList={this.state.itemList}
				/>
            }
        }
        $SideListMui_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $SideListMui_Api
    }
}
    
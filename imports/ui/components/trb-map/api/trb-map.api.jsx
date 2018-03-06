
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import iconList from "./../static-data/trb-map.icon-list.data.jsx"
//import { browserHistory } from 'react-router';

export default function TrbMap_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbMap_Api extends Component {
            constructor(props){
				super(props);
				//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

				this.state = {
					canTest : false,
					message : "",
					clientsList  : props.clientsList,
					openSearch : false,
					openOptions : false,
					openClientsDetails : false,
					currentClient : false,
					/*showSendEmail : false,
					showAddclient : false,*/
				}
			}

		/*_______________________________________________________________________________________________________________
		_________________________________________________________________________________________________________________  
		_____________________________________________COMPONENT LIFE TIME_________________________________________________
		_________________________________________________________________________________________________________________*/


			componentWillMount() { 

			}

			componentDidMount(){
				//console.log(this.props.clientsList)
			}

			componentWillReceiveProps(newProps) {
				/*this.setState({
					clientsList : newProps.clientsList
				})
				if (this.state.currentclient){

					let updatedclient=newProps.clientsList.filter((x)=>{
						return x._id === this.state.currentClient._id
					})[0]

					this.setState({
						currentClient : updatedClient
					})
				}*/
			}

			/*shouldComponentUpdate(){

			}*/

			componentDidUpdate(){

			}

			componentWillUnmount(){

			}	


		/*_______________________________________________________________________________________________________________
		_________________________________________________________________________________________________________________  
		_____________________________________________COMPONENT METHODS___________________________________________________
		_________________________________________________________________________________________________________________*/

			toggleStateBool(key){
				this.setState({
					[key] : !this.state[key]
				})
			}

			showMessage(message){
				this.setState({
					message : message,
					showMessage : true
				})
			}

			transformItemList(list){
				let transformedList = [];
				list.forEach((x)=>{
					avatar="/trb-map/"+x.type+".png"
					let item = {
						_id : x._id,
						primaryText : x.name,
						secondaryText : x.country,
						leftIcon : <img src={avatar} />
					}
					transformedList.push(item)
				})
				return transformedList
			}



			findAndShowClient(clientId){
				let client= this.props.clientsList.filter((x)=>{
					return x._id === clientId
				})[0];
				console.log(clientId)
				this.showClientDetails(client)
			}



			openAddClient(){

			}

			showClientDetails(client){
				this.setState({
					currentClient : client,
					openClientsDetails : true
				})
				//PubSub.publish('OPEN_CLIENT_DETAILS')
			}

			getIconInfos(type){
				var result = iconList.filter((x)=>{
					//console.log(Object.keys(x)[0])
					return x.name === type
				})
				/*console.log(type)
				console.log(result)*/
				if (!result){
					return null
				}
				else {
					return result[0]
				}
			}


            render() {
				const styles = this.props.styles
				const items = [];

				this.props.clientsList.forEach((x, index)=>{
					items.push({
						...x,
						iconInfos : this.getIconInfos(x.type)
					})
				});
				
                return <WrappedComponent
				{...this.props}
				toggleStateBool={(key)=>this.toggleStateBool(key)}
				openClientsDetails={this.state.openClientsDetails}
				openOptions={this.state.openOptions}
				openSearch={this.state.openSearch}
				currentClient={this.state.currentClient}
				showMessage={(message)=>this.showMessage(message)}
				transformItemList={(list)=>this.transformItemList(list)}
				findAndShowClient={(client)=>this.findAndShowClient(client)}
				showClientDetails={(client)=>this.showClientDetails(client)}
				items={items}
				iconList={iconList}
				/>
            }
        }
        $TrbMap_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbMap_Api
    }
}
    
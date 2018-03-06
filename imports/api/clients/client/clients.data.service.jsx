
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {clientsMongo} from "./../clients.js"

export default function ClientsDataService(){
	return (WrappedComponent)=>{
	
		 class $ClientsComponentDataService0 extends Component {

			constructor(props){
				super(props);
			}



			render (){
				return (
					this.props.clientsList && this.props.clientsList[0] ?
					<WrappedComponent
						{...this.props}
						client = {this.props.client}
						clientsList = {this.props.clientsList}
						getOneClient = {this.props.getOneClient}
					/> :
					<p>loading</p>
				)
			}
		}

		const $ClientsDataService1 = createContainer((props) => {

		  let clientSubOne = Meteor.subscribe("oneClients", props.clientId)  
		  let clientSubList = Meteor.subscribe("clientsList")
		  return {
			...props,
			client : clientsMongo.find({_id : props.clientId}).fetch()[0],
			clientsList : clientsMongo.find({}, {fields : {name : 1, lat : 1, lng : 1, type : 1}}).fetch(),
		  };
		}, $ClientsComponentDataService0);


		class $ClientsDataService2 extends Component {

			constructor(props){
				super(props);
				this.state = {
					clientId : null
				}
			}

			getOneClient(id){
				this.setState({
					clientId : id
				})
			}

			render (){
				return (
					<$ClientsDataService1
						{...this.props}
						clientId = {this.state.clientId}
						getOneClient={(id)=>this.getOneClient(id)}
					/> 
				)
			}
		}
		
		return $ClientsDataService2
	}
}

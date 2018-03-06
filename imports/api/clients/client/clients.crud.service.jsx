import React, { Component } from 'react';
import {clientsSchema} from "./../clients.schema.js";
import {clientsMongo} from "./../clients.js";

export const ClientsCrudService = (WrappedComponent)=>{
	
	var clientsCrudContext = clientsSchema.namedContext("clientsCrudOp")

	return class _ClientsCrudService extends Component {

		constructor(props){
			super(props);
		}

		createClient(options , callback){
			clientsSchema.clean(options);
			if(clientsCrudContext.validate(options)){
				clientsMongo.insert(options, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+clientsCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		readClient(options , callback){

		}
		
		updateClient(id, options , callback){
			clientsSchema.clean(options);
			if(clientsCrudContext.validate(options)){
				clientsMongo.update({_id : id}, {$set : options}, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+clientsCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		deleteClient(id , callback){
			clientsMongo.remove({_id : id}, callback);
		}
		
		render (){
			return (
				<WrappedComponent
					{...this.props}
					createClient = {this.createClient}
					readClient = {this.readClient}
					updateClient = {this.updateClient}
					deleteClient = {this.deleteClient}
				/>
			)
		}
	}
}
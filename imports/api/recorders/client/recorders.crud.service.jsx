
import React, { Component } from 'react';
import {recordersSchema} from "./../recorders.schema.js";
import {recordersMongo} from "./../recorders.js";

export default function RecordersCrudService(){
	var recordersCrudContext = recordersSchema.namedContext("recordersCrudOp")
	
	 return (WrappedComponent)=>{
		return class _RecordersCrudService extends Component {
			
			constructor(props){
				super(props);
			}

			createRecorder(options , callback){
				recordersSchema.clean(options);
				if(recordersCrudContext.validate(options)){
					recordersMongo.insert(options, callback);
				}
				else {
					let err = {}
					let res = false
					err.reason = "Problematic keys :"+recordersCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
					callback(err, res)
				}
			}

			readRecorder(options , callback){

			}

			updateRecorderSerie(id, options , callback){
				if(recordersCrudContext.validateOne(options, "serie")){
					recordersMongo.update({_id : id}, {$set : {
							'serie.name' : options.serie.name,
							'serie.codeProd' : options.serie.codeProd,
							'serie.numDep' : options.serie.numDep,
						}}, callback);
				}
				else {
					let err = {}
					let res = false
					err.reason = "Problematic keys :"+recordersCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
					callback(err, res)
				}
			}
			
			resetRecorderSerie(id, callback){
				recordersMongo.update({_id : id}, {$set : {
					'serie.maxValue' : 0,
					'serie.timeToMax' : 0,
					'serie.data' : [],
					'serie.startedAt' : (new Date()).getTime()
				}}, callback);
			}
			
			updateRecorderStatus(id, status, callback){
				recordersMongo.update({_id : id}, {$set : {
					isOnRecord : status,
				}}, callback);
			}
			
			updateRecorder(id, options , callback){
				recordersSchema.clean(options);
				if(recordersCrudContext.validate(options)){
					recordersMongo.update({_id : id}, {$set : options}, callback);
				}
				else {
					let err = {}
					let res = false
					err.reason = "Problematic keys :"+recordersCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
					callback(err, res)
				}
			}

			deleteRecorder(id , callback){
				recordersMongo.remove({_id : id}, callback);
			}

			render (){
				return (
					<WrappedComponent
						{...this.props}
						createRecorder = {this.createRecorder}
						readRecorder = {this.readRecorder}
						updateRecorder = {this.updateRecorder}
						updateRecorderSerie = {this.updateRecorderSerie}
						deleteRecorder = {this.deleteRecorder}
						updateRecorderStatus={this.updateRecorderStatus}
						resetRecorderSerie={this.resetRecorderSerie}
					/>
				)
			}
		}
	 }
}

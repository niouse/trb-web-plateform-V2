
import React, { Component } from 'react';
import {picturesSchema} from "./../pictures.schema.js";
import {picturesMongo} from "./../pictures.js";

export default function PicturesCrudService(){
	return (WrappedComponent)=>{
		var picturesCrudContext = picturesSchema.namedContext("picturesCrudOp")

		class $PicturesCrudService extends Component {

			constructor(props){
				super(props);
			}

			createPicture(options , callback){
				picturesSchema.clean(options);
				if(picturesCrudContext.validate(options)){
					picturesMongo.insert(options, callback);
					console.log(options.smallPhoto)
				}
				else {
					let err = {}
					let res = false
					err.reason = "Problematic keys :"+picturesCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
					callback(err, res)
				}
			}

			readPicture(options , callback){

			}

			updatePicture(id, options , callback){
				picturesSchema.clean(options);
				if(picturesCrudContext.validate(options)){
					picturesMongo.update({_id : id}, {$set : options}, callback);
				}
				else {
					let err = {}
					let res = false
					err.reason = "Problematic keys :"+picturesCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
					callback(err, res)
				}
			}

			deletePicture(id , callback){
				picturesMongo.remove({_id : id}, callback);
			}

			render (){
				return (
					<WrappedComponent
						{...this.props}
						createPicture = {this.createPicture}
						readPicture = {this.readPicture}
						updatePicture = {this.updatePicture}
						deletePicture = {this.deletePicture}
					/>
				)
			}
		}
		return $PicturesCrudService
	}
}

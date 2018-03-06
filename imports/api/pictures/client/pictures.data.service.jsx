

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {picturesMongo} from "./../pictures.js"

export default function PicturesDataService(WrappedComponent){
	return (WrappedComponent)=>{
		 class $PicturesComponentDataService0 extends Component {

			constructor(props){
				super(props);
			}



			render (){
				return (
					this.props.picturesList && this.props.picturesList[0] ?
					<WrappedComponent
						{...this.props}
						picture = {this.props.picture || false}
						picturesList = {this.props.picturesList}
						getOnePicture = {this.props.getOnePicture}
					/> :
					<p>loading</p>
				)
			}
		}

		const $PicturesDataService1 = createContainer((props) => {

		  let pictureSubOne = Meteor.subscribe("onePicture", props.pictureId)  
		  let pictureSubList = Meteor.subscribe("picturesList")
		  return {
			...props,
			picture : picturesMongo.find({_id : props.pictureId}).fetch()[0],
			picturesList : picturesMongo.find({}, {fields : {photo : 0}}).fetch(),
		  };
		}, $PicturesComponentDataService0);


		class $PicturesDataService2 extends Component {

			constructor(props){
				super(props);
				this.state = {
					pictureId : null
				}
			}

			getOnePicture(id){
				console.log(id)
				this.setState({
					pictureId : id
				})
			}

			render (){
				return (
					<$PicturesDataService1
						{...this.props}
						pictureId = {this.state.pictureId}
						getOnePicture={(id)=>this.getOnePicture(id)}
					/> 
				)
			}
		}
		return $PicturesDataService2
	}
}


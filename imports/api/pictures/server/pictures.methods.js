
import {picturesMongo} from "./../pictures.js";

Meteor.methods({
	getPicturesKeys : function(){
		var picturesKeys = []
		for (var key in picturesMongo.findOne({})){
			picturesKeys.push(key)
		};
		return picturesKeys
	}
})
    

import {picturesMongo} from "./../pictures.js";


Meteor.publish("pictures", function() {
	return  picturesMongo.find({});
});

Meteor.publish("picturesList", function() {
	return  picturesMongo.find({}, {fields : {
		photo : 0,
	}});
});

Meteor.publish("onePicture", function(picturesId) {
	return  picturesMongo.find({_id : picturesId});
});
    
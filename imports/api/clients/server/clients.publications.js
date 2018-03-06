
import {clientsMongo} from "./../clients.js";


Meteor.publish("clients", function() {
	return  clientsMongo.find({});
});

Meteor.publish("clientsList", function() {
	return  clientsMongo.find({}, {fields : {
		name : 1,
		type : 1,
		lat : 1,
		lng : 1,
	}});
});

Meteor.publish("one-clients", function(clientsId) { 
	return  clientsMongo.find({_id : clientsId});
});
    
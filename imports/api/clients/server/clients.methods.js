
import {clientsMongo} from "./../clients.js";

Meteor.methods({
	getclientsKeys : function(){
		var clientsKeys = [];
		for (var key in clientsMongo.findOne({})){
			clientsKeys.push(key)
		};
		return clientsKeys;
	}
})
    
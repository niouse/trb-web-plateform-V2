import { Meteor } from 'meteor/meteor';

import './../imports/api/users/server';
import './../imports/api/clients/server';
import './../imports/api/pictures/server';
import './../imports/api/recorders/server';
import './../imports/api/series/server';

import './../imports/api/routes';

import  './../imports/startup/server';


Meteor.startup(() => {
	loadUsers()
	loadClients()
	loadPictures()
	loadRecorders(16)
	loadSeries()
});

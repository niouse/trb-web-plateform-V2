
import {clientsMongo} from "./../clients.js";
import clientsDefaults from "./clients.defaults.js";


loadClients = function(){
	 if (clientsMongo.find({}).fetch().length === 0) {
		 console.log('creating default clients list...')
		 clientsDefaults.forEach((item, index)=>{
	     	clientsMongo.insert(clientsDefaults[index]); 
		 })
   }
}
    
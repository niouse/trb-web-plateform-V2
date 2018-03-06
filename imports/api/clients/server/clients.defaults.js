import fonderies from './clients-defaults/fonderiesDefault.js';
import acieries from './clients-defaults/acieriesDefault.js';
import fourneaux from './clients-defaults/fourneauxDefault.js';
import ferroalliages from './clients-defaults/ferroDefault.js';
import aluminiums from './clients-defaults/aluminiumDefault.js';
import tth from './clients-defaults/tthDefault.js';
import cimenterie from './clients-defaults/cimenterieDefault.js';
import cokerie from './clients-defaults/cokerieDefault.js';

var clients = [];

for (var i=0; i< fourneaux.length; i++){
	clients.push(fourneaux[i])
}

for (var i=0; i< fonderies.length; i++){
	clients.push(fonderies[i])
}

for (var i=0; i< acieries.length; i++){
	clients.push(acieries[i])
}

for (var i=0; i< aluminiums.length; i++){
	clients.push(aluminiums[i])
}

for (var i=0; i< ferroalliages.length; i++){
	clients.push(ferroalliages[i])
}

for (var i=0; i< tth.length; i++){
	clients.push(tth[i])
}

for (var i=0; i< cimenterie.length; i++){
	clients.push(cimenterie[i])
}

for (var i=0; i< cokerie.length; i++){
	clients.push(cokerie[i])
}

module.exports = clients;
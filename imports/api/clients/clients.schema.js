export const clientsSchema = new SimpleSchema({
  BU: {
    type: String,
    label: "BU of client",
    max: 4,
	min : 2
  },
  pseudo: {
    type: String,
    label: "Pseudoyme of client",
	max: 20,
	min : 2
  },
  type: {
    type: String,
    label: "Type of industry",
	max: 20,
	min : 2
  },
  name: {
    type: String,
    label: "Name of client",
	max: 20,
	min : 2
  },
  code: {
    type: String,
    label: "Code of client",
	max: 20,
	min : 2
  },
  country : {
	type: String,
    label: "Country of client",
	max: 20,
	min : 2 
  },
  lat : {
	type: Number,
    label: "Latitude of client site",
	max: 20,
	min : 2 
  },
  lng : {
	type: Number,
    label: "Longitude of client site",
	max: 20,
	min : 2 
  }
});




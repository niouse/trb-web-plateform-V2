export const picturesSchema = new SimpleSchema({
  access: {
    type: String,
    label: "Type of access",
	max: 20,
	min : 2
  },
  createdAt: {
    type: Date,
    label: "Creation date",
	max: 20,
	min : 2
  },
  createdBy: {
    type: String,
    label: "Id of user who creadted the picture",
	max: 50,
	min : 2
  },
  photoType: {
    type: String,
    label: "Type of picture",
	max: 30,
	min : 2,
	optional : true,
  },
  industry : {
	type: String,
    label: "Type of indusrty",
	max: 20,
	min : 2,
	optional : true,
  },
  client : {
	type: String,
    label: "Name of client plant",
	max: 100,
	min : 2,
	optional : true,
  },
  solution : {
	type: String,
    label: "Type of refractory solution",
	max: 20,
	min : 2,
	optional : true,
  },
  tags : {
	type: String,
    label: "User personal tags",
	max: 20,
	min : 2,
	optional : true,
  },
  description : {
	type: String,
    label: "Picture description",
	max: 600,
	min : 2,
	optional : true,
  },
  photo : {
	type: String,
    label: "Photo Data",
  },
  smallPhoto : {
	type: String,
    label: "small Photo Data",
  }
});
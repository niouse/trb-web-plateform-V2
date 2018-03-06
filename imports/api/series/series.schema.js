export const seriesSchema = new SimpleSchema({
  name: {
    type: String,
    label: "serie name",
    max: 20,
	min : 3
  },
  codeProd: {
    type: String,
    label: "code du produit",
    max: 20,
	min : 3
  },
 numDep: {
    type: String,
    label: "numero de la DEP",
    max: 20,
	min : 3
  },
  startedAt: {
    type: Date,
    label: "Date of first recorded value",
  },
  timeToMax: {
    type: Number,
    label: "Duration in milliseconds between start time and max temp recorded",
  },
  data : {
	  type : Array,
	  label : "array of values"
  },
  'data.$' : {
	   type : [Number],
	  label : "array of values",
	  decimal: true
  },
  unity: {
    type: String,
    label: "Unité de la mesure",
    max: 5,
	min : 1
  },
  maxValue: {
    type: Number,
    label: "Valeur maximale enregistrée",
	decimal: true
  },
});

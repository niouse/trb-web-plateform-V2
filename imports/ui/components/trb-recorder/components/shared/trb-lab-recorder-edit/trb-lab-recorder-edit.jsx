
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-lab-recorder-edit.template.jsx";
import Api from "./api/trb-lab-recorder-edit.api.jsx";
import Styles from "./services/trb-lab-recorder-edit.styles.service.jsx";
import Texts from "./services/trb-lab-recorder-edit.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-lab-recorder-edit.styles.default.js";
import stylesOptions from "./styles/trb-lab-recorder-edit.styles-options.default.js";
import computeStyles from "./styles/trb-lab-recorder-edit.compute-styles.js";
import texts from "./text/trb-lab-recorder-edit.text.js";

export default function TrbLabRecorderEdit(Paper, TextField, RaisedButton){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Texts(texts)
		@Api()
		@Template(Paper, TextField, RaisedButton)
		class TrbLabRecorderEdit_Component {}
		return TrbLabRecorderEdit_Component
	}
}  

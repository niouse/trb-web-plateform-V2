
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/recorder-selector.template.jsx";
import Api from "./api/recorder-selector.api.jsx";
import Styles from "./services/recorder-selector.styles.service.jsx";
import Texts from "./services/recorder-selector.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/recorder-selector.styles.default.js";
import stylesOptions from "./styles/recorder-selector.styles-options.default.js";
import computeStyles from "./styles/recorder-selector.compute-styles.js";
import texts from "./text/recorder-selector.text.js";

export default function RecorderSelector(SelectField, MenuItem){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(SelectField, MenuItem)
		class RecorderSelector_Component {}
		return RecorderSelector_Component
	}
}  

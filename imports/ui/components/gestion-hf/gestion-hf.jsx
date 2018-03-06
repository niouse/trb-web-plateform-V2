
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/gestion-hf.template.jsx";
import Api from "./api/gestion-hf.api.jsx";
import Styles from "./services/gestion-hf.styles.service.jsx";
import Texts from "./services/gestion-hf.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/gestion-hf.styles.default.js";
import stylesOptions from "./styles/gestion-hf.styles-options.default.js";
import computeStyles from "./styles/gestion-hf.compute-styles.js";
import texts from "./text/gestion-hf.text.js";

export default function GestionHf(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class GestionHf_Component {}
		return GestionHf_Component
	}
}  

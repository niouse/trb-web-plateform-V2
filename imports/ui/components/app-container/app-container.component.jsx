
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/app-container.template.jsx";
import Api from "./api/app-container.api.jsx";
import Styles from "./services/app-container.styles.service.jsx";
import Texts from "./services/app-container.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/app-container.styles.default.js";
import stylesOptions from "./styles/app-container.styles-options.default.js";
import computeStyles from "./styles/app-container.compute-styles.js";
import texts from "./text/app-container.text.js";

export default function AppContainer(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class AppContainer_Component {}
		return AppContainer_Component
	}
}  


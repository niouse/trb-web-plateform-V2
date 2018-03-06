
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/tab-hover.template.jsx";
import Api from "./api/tab-hover.api.jsx";
import Styles from "./services/tab-hover.styles.service.jsx";
import Texts from "./services/tab-hover.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/tab-hover.styles.default.js";
import stylesOptions from "./styles/tab-hover.styles-options.default.js";
import computeStyles from "./styles/tab-hover.compute-styles.js";
import texts from "./text/tab-hover.text.js";

export default function TabHover(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TabHover_Component {}
		return TabHover_Component
	}
}  


// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/cool-select.template.jsx";
import Api from "./api/cool-select.api.jsx";
import Styles from "./services/cool-select.styles.service.jsx";
import Texts from "./services/cool-select.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/cool-select.styles.default.js";
import stylesOptions from "./styles/cool-select.styles-options.default.js";
import computeStyles from "./styles/cool-select.compute-styles.js";
import texts from "./text/cool-select.text.js";

export default function CoolSelect(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(IconButton, $TabHover)
		class CoolSelect_Component {}
		return CoolSelect_Component
	}
}  


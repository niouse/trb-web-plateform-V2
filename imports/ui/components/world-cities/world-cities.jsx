
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/world-cities.template.jsx";
import Api from "./api/world-cities.api.jsx";
import Styles from "./services/world-cities.styles.service.jsx";
import Texts from "./services/world-cities.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/world-cities.styles.default.js";
import stylesOptions from "./styles/world-cities.styles-options.default.js";
import computeStyles from "./styles/world-cities.compute-styles.js";
import texts from "./text/world-cities.text.js";

export default function WorldCities(childs){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(childs)
		class WorldCities_Component {}
		return WorldCities_Component
	}
}  

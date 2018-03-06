
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/home.template.jsx";
import Api from "./api/home.api.jsx";
import Styles from "./services/home.styles.service.jsx";
import Texts from "./services/home.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/home.styles.default.js";
import stylesOptions from "./styles/home.styles-options.default.js";
import computeStyles from "./styles/home.compute-styles.js";
import texts from "./text/home.text.js";

import locations from "./services/home.mocks.js"
import MocksWrapper from "./services/home.mocks.service.jsx"

export default function Home(homeChilds){

	return (wrappedComponent)=>{
		@MocksWrapper(locations)
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(homeChilds)
		class Home_Component {}
		return Home_Component
	}
}  

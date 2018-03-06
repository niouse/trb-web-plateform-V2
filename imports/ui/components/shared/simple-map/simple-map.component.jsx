
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/simple-map.template.jsx";
import Api from "./api/simple-map.api.jsx";
import Styles from "./services/simple-map.styles.service.jsx";
import Texts from "./services/simple-map.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/simple-map.styles.default.js";
import stylesOptions from "./styles/simple-map.styles-options.default.js";
import computeStyles from "./styles/simple-map.compute-styles.js";
import texts from "./text/simple-map.text.js";

// EXTERNAL LIBS
var GoogleMapsLoader = require('google-maps');

export default function SimpleMap(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api(GoogleMapsLoader)
		@Texts(texts)
		@Template()
		class SimpleMap_Component {}
		return SimpleMap_Component
	}
}  


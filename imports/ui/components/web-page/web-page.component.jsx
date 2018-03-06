
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/web-page.template.jsx";
import Api from "./api/web-page.api.jsx";
import Styles from "./services/web-page.styles.service.jsx";
import Texts from "./services/web-page.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/web-page.styles.default.js";
import stylesOptions from "./styles/web-page.styles-options.default.js";
import computeStyles from "./styles/web-page.compute-styles.js";
import texts from "./text/web-page.text.js";

export default function WebPage(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class WebPage_Component {}
		return WebPage_Component
	}
}  


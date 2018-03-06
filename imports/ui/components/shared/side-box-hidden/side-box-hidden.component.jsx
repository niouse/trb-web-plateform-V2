
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/side-box-hidden.template.jsx";
import Api from "./api/side-box-hidden.api.jsx";
import Styles from "./services/side-box-hidden.styles.service.jsx";
import Texts from "./services/side-box-hidden.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/side-box-hidden.styles.default.js";
import stylesOptions from "./styles/side-box-hidden.styles-options.default.js";
import computeStyles from "./styles/side-box-hidden.compute-styles.js";
import texts from "./text/side-box-hidden.text.js";

export default function SideBoxHidden(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(Drawer)
		class SideBoxHidden_Component {}
		return SideBoxHidden_Component
	}
}  


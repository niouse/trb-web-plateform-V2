
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/side-list-mui.template.jsx";
import Api from "./api/side-list-mui.api.jsx";
import Styles from "./services/side-list-mui.styles.service.jsx";
import Texts from "./services/side-list-mui.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/side-list-mui.styles.default.js";
import stylesOptions from "./styles/side-list-mui.styles-options.default.js";
import computeStyles from "./styles/side-list-mui.compute-styles.js";
import texts from "./text/side-list-mui.text.js";

export default function SideListMui(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class SideListMui_Component {}
		return SideListMui_Component
	}
}  

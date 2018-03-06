
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-school.template.jsx";
import Api from "./api/trb-school.api.jsx";
import Styles from "./services/trb-school.styles.service.jsx";
import Texts from "./services/trb-school.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-school.styles.default.js";
import stylesOptions from "./styles/trb-school.styles-options.default.js";
import computeStyles from "./styles/trb-school.compute-styles.js";
import texts from "./text/trb-school.text.js";

export default function TrbSchool(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbSchool_Component {}
		return TrbSchool_Component
	}
}  

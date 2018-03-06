
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-linkedin.template.jsx";
import Api from "./api/trb-linkedin.api.jsx";
import Styles from "./services/trb-linkedin.styles.service.jsx";
import Texts from "./services/trb-linkedin.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-linkedin.styles.default.js";
import stylesOptions from "./styles/trb-linkedin.styles-options.default.js";
import computeStyles from "./styles/trb-linkedin.compute-styles.js";
import texts from "./text/trb-linkedin.text.js";

export default function TrbLinkedin(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbLinkedin_Component {}
		return TrbLinkedin_Component
	}
}  


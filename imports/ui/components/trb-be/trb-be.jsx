
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-be.template.jsx";
import Api from "./api/trb-be.api.jsx";
import Styles from "./services/trb-be.styles.service.jsx";
import Texts from "./services/trb-be.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-be.styles.default.js";
import stylesOptions from "./styles/trb-be.styles-options.default.js";
import computeStyles from "./styles/trb-be.compute-styles.js";
import texts from "./text/trb-be.text.js";

export default function TrbBe(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbBe_Component {}
		return TrbBe_Component
	}
}  

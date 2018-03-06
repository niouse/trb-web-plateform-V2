
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-search.template.jsx";
import Api from "./api/trb-search.api.jsx";
import Styles from "./services/trb-search.styles.service.jsx";
import Texts from "./services/trb-search.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-search.styles.default.js";
import stylesOptions from "./styles/trb-search.styles-options.default.js";
import computeStyles from "./styles/trb-search.compute-styles.js";
import texts from "./text/trb-search.text.js";

export default function TrbSearch(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbSearch_Component {}
		return TrbSearch_Component
	}
}  

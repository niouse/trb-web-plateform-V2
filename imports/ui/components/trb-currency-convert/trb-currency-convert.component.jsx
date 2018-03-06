
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-currency-convert.template.jsx";
import Api from "./api/trb-currency-convert.api.jsx";
import Styles from "./services/trb-currency-convert.styles.service.jsx";
import Texts from "./services/trb-currency-convert.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-currency-convert.styles.default.js";
import stylesOptions from "./styles/trb-currency-convert.styles-options.default.js";
import computeStyles from "./styles/trb-currency-convert.compute-styles.js";
import texts from "./text/trb-currency-convert.text.js";

export default function TrbCurrencyConvert(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbCurrencyConvert_Component {}
		return TrbCurrencyConvert_Component
	}
}  


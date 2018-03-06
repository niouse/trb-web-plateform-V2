
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-bill-maker.template.jsx";
import Api from "./api/trb-bill-maker.api.jsx";
import Styles from "./services/trb-bill-maker.styles.service.jsx";
import Texts from "./services/trb-bill-maker.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-bill-maker.styles.default.js";
import stylesOptions from "./styles/trb-bill-maker.styles-options.default.js";
import computeStyles from "./styles/trb-bill-maker.compute-styles.js";
import texts from "./text/trb-bill-maker.text.js";

export default function TrbBillMaker(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbBillMaker_Component {}
		return TrbBillMaker_Component
	}
}  

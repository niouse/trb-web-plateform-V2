
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-instrum-rm.template.jsx";
import Api from "./api/trb-instrum-rm.api.jsx";
import Styles from "./services/trb-instrum-rm.styles.service.jsx";
import Texts from "./services/trb-instrum-rm.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-instrum-rm.styles.default.js";
import stylesOptions from "./styles/trb-instrum-rm.styles-options.default.js";
import computeStyles from "./styles/trb-instrum-rm.compute-styles.js";
import texts from "./text/trb-instrum-rm.text.js";

export default function TrbInstrumRm(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbInstrumRm_Component {}
		return TrbInstrumRm_Component
	}
}  


// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-eaf.template.jsx";
import Api from "./api/trb-eaf.api.jsx";
import Styles from "./services/trb-eaf.styles.service.jsx";
import Texts from "./services/trb-eaf.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-eaf.styles.default.js";
import stylesOptions from "./styles/trb-eaf.styles-options.default.js";
import computeStyles from "./styles/trb-eaf.compute-styles.js";
import texts from "./text/trb-eaf.text.js";

export default function TrbEaf(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbEaf_Component {}
		return TrbEaf_Component
	}
}  

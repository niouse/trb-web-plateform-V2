
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-chantier.template.jsx";
import Api from "./api/trb-chantier.api.jsx";
import Styles from "./services/trb-chantier.styles.service.jsx";
import Texts from "./services/trb-chantier.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-chantier.styles.default.js";
import stylesOptions from "./styles/trb-chantier.styles-options.default.js";
import computeStyles from "./styles/trb-chantier.compute-styles.js";
import texts from "./text/trb-chantier.text.js";

export default function TrbChantier(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbChantier_Component {}
		return TrbChantier_Component
	}
}  

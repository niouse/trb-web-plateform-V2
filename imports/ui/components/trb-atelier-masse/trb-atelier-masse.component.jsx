
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-atelier-masse.template.jsx";
import Api from "./api/trb-atelier-masse.api.jsx";
import Styles from "./services/trb-atelier-masse.styles.service.jsx";
import Texts from "./services/trb-atelier-masse.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-atelier-masse.styles.default.js";
import stylesOptions from "./styles/trb-atelier-masse.styles-options.default.js";
import computeStyles from "./styles/trb-atelier-masse.compute-styles.js";
import texts from "./text/trb-atelier-masse.text.js";

export default function TrbAtelierMasse(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbAtelierMasse_Component {}
		return TrbAtelierMasse_Component
	}
}  


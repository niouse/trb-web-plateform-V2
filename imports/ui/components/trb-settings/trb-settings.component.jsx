
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-settings.template.jsx";
import Api from "./api/trb-settings.api.jsx";
import Styles from "./services/trb-settings.styles.service.jsx";
import Texts from "./services/trb-settings.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-settings.styles.default.js";
import stylesOptions from "./styles/trb-settings.styles-options.default.js";
import computeStyles from "./styles/trb-settings.compute-styles.js";
import texts from "./text/trb-settings.text.js";

export default function TrbSettings(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbSettings_Component {}
		return TrbSettings_Component
	}
}  



// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-youtube.template.jsx";
import Api from "./api/trb-youtube.api.jsx";
import Styles from "./services/trb-youtube.styles.service.jsx";
import Texts from "./services/trb-youtube.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-youtube.styles.default.js";
import stylesOptions from "./styles/trb-youtube.styles-options.default.js";
import computeStyles from "./styles/trb-youtube.compute-styles.js";
import texts from "./text/trb-youtube.text.js";

export default function TrbYoutube(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbYoutube_Component {}
		return TrbYoutube_Component
	}
}  

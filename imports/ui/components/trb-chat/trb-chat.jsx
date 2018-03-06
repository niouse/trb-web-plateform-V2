
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-chat.template.jsx";
import Api from "./api/trb-chat.api.jsx";
import Styles from "./services/trb-chat.styles.service.jsx";
import Texts from "./services/trb-chat.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-chat.styles.default.js";
import stylesOptions from "./styles/trb-chat.styles-options.default.js";
import computeStyles from "./styles/trb-chat.compute-styles.js";
import texts from "./text/trb-chat.text.js";

export default function TrbChat(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbChat_Component {}
		return TrbChat_Component
	}
}  

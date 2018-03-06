
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-whiteboard.template.jsx";
import Api from "./api/trb-whiteboard.api.jsx";
import Styles from "./services/trb-whiteboard.styles.service.jsx";
import Texts from "./services/trb-whiteboard.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-whiteboard.styles.default.js";
import stylesOptions from "./styles/trb-whiteboard.styles-options.default.js";
import computeStyles from "./styles/trb-whiteboard.compute-styles.js";
import texts from "./text/trb-whiteboard.text.js";

export default function TrbWhiteboard(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbWhiteboard_Component {}
		return TrbWhiteboard_Component
	}
}  


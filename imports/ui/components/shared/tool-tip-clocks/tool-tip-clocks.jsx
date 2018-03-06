
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/tool-tip-clocks.template.jsx";
import Api from "./api/tool-tip-clocks.api.jsx";
import Styles from "./services/tool-tip-clocks.styles.service.jsx";
import Texts from "./services/tool-tip-clocks.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/tool-tip-clocks.styles.default.js";
import stylesOptions from "./styles/tool-tip-clocks.styles-options.default.js";
import computeStyles from "./styles/tool-tip-clocks.compute-styles.js";
import texts from "./text/tool-tip-clocks.text.js";

import location from "./services/tool-tip-clocks.mocks.js"
import MocksWrapper from "./services/tool-tip-clocks.mocks.service.jsx"

export default function ToolTipClocks(Flight, Hotel, ZoomIn, IconButton){
	return (wrappedComponent)=>{
		//@MocksWrapper(location)
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(Flight, Hotel, ZoomIn, IconButton)
		class ToolTipClocks_Component {}
		return ToolTipClocks_Component
	}
}  

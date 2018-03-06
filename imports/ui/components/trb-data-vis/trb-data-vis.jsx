
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-data-vis.template.jsx";
import Api from "./api/trb-data-vis.api.jsx";
import Styles from "./services/trb-data-vis.styles.service.jsx";
import Texts from "./services/trb-data-vis.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-data-vis.styles.default.js";
import stylesOptions from "./styles/trb-data-vis.styles-options.default.js";
import computeStyles from "./styles/trb-data-vis.compute-styles.js";
import texts from "./text/trb-data-vis.text.js";

export default function TrbDataVis(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbDataVis_Component {}
		return TrbDataVis_Component
	}
}  

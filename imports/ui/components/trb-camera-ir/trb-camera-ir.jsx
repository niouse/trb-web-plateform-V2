
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-camera-ir.template.jsx";
import Api from "./api/trb-camera-ir.api.jsx";
import Styles from "./services/trb-camera-ir.styles.service.jsx";
import Texts from "./services/trb-camera-ir.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-camera-ir.styles.default.js";
import stylesOptions from "./styles/trb-camera-ir.styles-options.default.js";
import computeStyles from "./styles/trb-camera-ir.compute-styles.js";
import texts from "./text/trb-camera-ir.text.js";

export default function TrbCameraIr(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbCameraIr_Component {}
		return TrbCameraIr_Component
	}
}  

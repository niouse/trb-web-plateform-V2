
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-gallery-mui.template.jsx";
import Api from "./api/trb-gallery-mui.api.jsx";
import Styles from "./services/trb-gallery-mui.styles.service.jsx";
import Texts from "./services/trb-gallery-mui.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-gallery-mui.styles.default.js";
import stylesOptions from "./styles/trb-gallery-mui.styles-options.default.js";
import computeStyles from "./styles/trb-gallery-mui.compute-styles.js";
import texts from "./text/trb-gallery-mui.text.js";

export default function TrbGalleryMui(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbGalleryMui_Component {}
		return TrbGalleryMui_Component
	}
}  

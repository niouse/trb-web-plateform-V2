
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-gallery-three-d.template.jsx";
import Api from "./api/trb-gallery-three-d.api.jsx";
import Styles from "./services/trb-gallery-three-d.styles.service.jsx";
import Texts from "./services/trb-gallery-three-d.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-gallery-three-d.styles.default.js";
import stylesOptions from "./styles/trb-gallery-three-d.styles-options.default.js";
import computeStyles from "./styles/trb-gallery-three-d.compute-styles.js";
import texts from "./text/trb-gallery-three-d.text.js";

export default function TrbGalleryThreeD(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbGalleryThreeD_Component {}
		return TrbGalleryThreeD_Component
	}
}  

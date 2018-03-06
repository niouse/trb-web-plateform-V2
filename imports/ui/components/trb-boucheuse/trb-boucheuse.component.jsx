
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-boucheuse.template.jsx";
import Api from "./api/trb-boucheuse.api.jsx";
import Styles from "./services/trb-boucheuse.styles.service.jsx";
import Texts from "./services/trb-boucheuse.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-boucheuse.styles.default.js";
import stylesOptions from "./styles/trb-boucheuse.styles-options.default.js";
import computeStyles from "./styles/trb-boucheuse.compute-styles.js";
import texts from "./text/trb-boucheuse.text.js";

export default function TrbBoucheuse(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbBoucheuse_Component {}
		return TrbBoucheuse_Component
	}
}  


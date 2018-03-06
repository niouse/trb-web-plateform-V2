
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-lab-serie-viewer.template.jsx";
import Api from "./api/trb-lab-serie-viewer.api.jsx";
import Styles from "./services/trb-lab-serie-viewer.styles.service.jsx";
import Texts from "./services/trb-lab-serie-viewer.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-lab-serie-viewer.styles.default.js";
import stylesOptions from "./styles/trb-lab-serie-viewer.styles-options.default.js";
import computeStyles from "./styles/trb-lab-serie-viewer.compute-styles.js";
import texts from "./text/trb-lab-serie-viewer.text.js";

export default function TrbLabSerieViewer(HighchartsSimple, TrbLabRecorderEdit, ModeEdit){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(HighchartsSimple, TrbLabRecorderEdit, ModeEdit)
		class TrbLabSerieViewer_Component {}
		return TrbLabSerieViewer_Component
	}
}  

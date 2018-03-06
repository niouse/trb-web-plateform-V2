
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-lab-recorder.template.jsx";
import Api from "./api/trb-lab-recorder.api.jsx";
import Styles from "./services/trb-lab-recorder.styles.service.jsx";
import Texts from "./services/trb-lab-recorder.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-lab-recorder.styles.default.js";
import stylesOptions from "./styles/trb-lab-recorder.styles-options.default.js";
import computeStyles from "./styles/trb-lab-recorder.compute-styles.js";
import texts from "./text/trb-lab-recorder.text.js";

export default function TrbLabRecorder($ButtonFuturistic, $HighchartsSimple, ModeEdit, Dialog, FlatButton, $TrbLabRecorderEdit){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Texts(texts)
		@Api(FlatButton)
		@Template($ButtonFuturistic, $HighchartsSimple, ModeEdit, Dialog, FlatButton, $TrbLabRecorderEdit)
		class TrbLabRecorder_Component {}
		return TrbLabRecorder_Component
	}
}  

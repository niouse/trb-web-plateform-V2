
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { BrowserRouter, Route,  Link, Switch } from 'react-router-dom'

// COMPONENT LAYERS
import Template from "./template/trb-data-recorder.template.jsx";
import Api from "./api/trb-data-recorder.api.jsx";
import Styles from "./services/trb-data-recorder.styles.service.jsx";
import Texts from "./services/trb-data-recorder.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-data-recorder.styles.default.js";
import stylesOptions from "./styles/trb-data-recorder.styles-options.default.js";
import computeStyles from "./styles/trb-data-recorder.compute-styles.js";
import texts from "./text/trb-data-recorder.text.js";

export default function TrbDataRecorder(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(Switch, Route)
		class TrbDataRecorder_Component {}
		return TrbDataRecorder_Component
	}
}  


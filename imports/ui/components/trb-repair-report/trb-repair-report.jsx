
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-repair-report.template.jsx";
import Api from "./api/trb-repair-report.api.jsx";
import Styles from "./services/trb-repair-report.styles.service.jsx";
import Texts from "./services/trb-repair-report.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-repair-report.styles.default.js";
import stylesOptions from "./styles/trb-repair-report.styles-options.default.js";
import computeStyles from "./styles/trb-repair-report.compute-styles.js";
import texts from "./text/trb-repair-report.text.js";

export default function TrbRepairReport(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbRepairReport_Component {}
		return TrbRepairReport_Component
	}
}  

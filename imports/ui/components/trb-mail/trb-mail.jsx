
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-mail.template.jsx";
import Api from "./api/trb-mail.api.jsx";
import Styles from "./services/trb-mail.styles.service.jsx";
import Texts from "./services/trb-mail.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-mail.styles.default.js";
import stylesOptions from "./styles/trb-mail.styles-options.default.js";
import computeStyles from "./styles/trb-mail.compute-styles.js";
import texts from "./text/trb-mail.text.js";

export default function TrbMail(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbMail_Component {}
		return TrbMail_Component
	}
}  

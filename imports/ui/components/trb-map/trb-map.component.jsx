
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import SideList from "./../shared/side-list-mui/side-list-mui.jsx"

// COMPONENT LAYERS
import Template from "./template/trb-map.template.jsx";
import Api from "./api/trb-map.api.jsx";
import Styles from "./services/trb-map.styles.service.jsx";
import Texts from "./services/trb-map.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-map.styles.default.js";
import stylesOptions from "./styles/trb-map.styles-options.default.js";
import computeStyles from "./styles/trb-map.compute-styles.js";
import texts from "./text/trb-map.text.js";

export default function TrbMap(SimpleMap){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(SimpleMap)
		class TrbMap_Component {}
		return TrbMap_Component
	}
}  


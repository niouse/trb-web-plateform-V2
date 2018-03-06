
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-lab-graphs.template.jsx";
import Api from "./api/trb-lab-graphs.api.jsx";
import Styles from "./services/trb-lab-graphs.styles.service.jsx";
import Texts from "./services/trb-lab-graphs.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-lab-graphs.styles.default.js";
import stylesOptions from "./styles/trb-lab-graphs.styles-options.default.js";
import computeStyles from "./styles/trb-lab-graphs.compute-styles.js";
import texts from "./text/trb-lab-graphs.text.js";

// CHILDS COMPONENT
import TrbLabRecorder from "./../shared/trb-lab-recorder/trb-lab-recorder.jsx"
import RecorderSelector from "./../shared/recorder-selector/recorder-selector.jsx"
import TrbLabRecorderEdit from "./../shared/trb-lab-recorder-edit/trb-lab-recorder-edit.jsx"

//MATERIAL COMPNENTS
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD CHILDS_________________________________________________________________________*/
/*______________________________________________________________________________________*/

@TrbLabRecorder()
class $TrbLabRecorder {}

@RecorderSelector(SelectField, MenuItem)
class $RecorderSelector{}

@RecorderEdit()
class $RecorderEdit{}

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD CHILDS - END___________________________________________________________________*/
/*______________________________________________________________________________________*/

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD COMPONENT______________________________________________________________________*/
/*______________________________________________________________________________________*/

export default function TrbLabGraphs(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template($TrbLabRecorder, $RecorderSelector)
		class TrbLabGraphs_Component {}
		return TrbLabGraphs_Component
	}
}  
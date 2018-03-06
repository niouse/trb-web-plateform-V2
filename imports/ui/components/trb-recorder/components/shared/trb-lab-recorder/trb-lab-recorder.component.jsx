
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

//MATERIAL ICONS
import PlayArrow from "material-ui/svg-icons/av/play-arrow.js";
import Stop from "material-ui/svg-icons/av/stop.js";
import Pause from "material-ui/svg-icons/av/pause.js";
import FiberManualRecord from "material-ui/svg-icons/av/fiber-manual-record.js";
import Refresh from "material-ui/svg-icons/navigation/refresh.js";
import ImportExport from "material-ui/svg-icons/communication/import-export.js";
import Settings from "material-ui/svg-icons/action/settings.js";
import Save from "material-ui/svg-icons/content/save.js";
import ModeEdit from "material-ui/svg-icons/editor/mode-edit.js";

// CHILDS COMPONENT
import RecorderSelector from "./../shared/recorder-selector/recorder-selector.jsx"
import TrbLabRecorderEdit from "./../shared/trb-lab-recorder-edit/trb-lab-recorder-edit.jsx"

//MATERIAL COMPNENTS
/*import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';*/

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD CHILDS_________________________________________________________________________*/
/*______________________________________________________________________________________*/

@RecorderSelector(SelectField, MenuItem)
class $RecorderSelector{}

@TrbLabRecorderEdit()
class $TrbLabRecorderEdit{}

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD CHILDS - END___________________________________________________________________*/
/*______________________________________________________________________________________*/

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD COMPONENT______________________________________________________________________*/
/*______________________________________________________________________________________*/

export default function TrbLabRecorder(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template($ButtonFuturistic, $TrbLabRecorderEdit)
		class TrbLabRecorder_Component {}
		return TrbLabRecorder_Component
	}
}



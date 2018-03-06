
// REACT DEPENDENCIES
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { BrowserRouter, Route,  Link } from 'react-router-dom'
import {withRouter} from "react-router-dom"

// COMPONENT LAYERS
import Template from "./template/app.template.jsx"
import Api from "./api/app.api.jsx"
import Styles from "./services/app.styles.service.jsx"
import Texts from "./services/app.text.service.jsx"

// COMPONENT STATIC DATA
import stylesDefault from "./styles/app.styles.default.js"
import stylesOptions from "./styles/app.styles-options.default.js"
import computeStyles from "./styles/app.compute-styles.js"
import texts from "./text/app.text.js"

// COMPONENT SERVICES
import AppStylesOptionsService from "./services/app.styles-options.service.jsx"
import AppMaterialService from "./services/app.material.service.jsx"
import AppRouterService from "./services/app.router.service.jsx"
import AppWithRouterService from "./services/app.with-router.service.jsx"
import AppLanguageService from "./services/app.language.service.jsx"

// COMPONENT CHILDS
import Navigation from "./components/navigation/navigation.jsx"
	import NavigationRouterService from "./components/navigation/services/navigation.router.service.jsx"
import TrbLabDashBoard from "./components/trb-lab-dashboard/trb-lab-dashboard.jsx"
import TrbLabRecords from "./components/trb-lab-records/trb-lab-records.jsx"
import TrbLabGraphs from "./components/trb-lab-graphs/trb-lab-graphs.jsx"
import TrbLabSettings from "./components/trb-lab-settings/trb-lab-settings.jsx"

// COMPONENT SHARED
import RecorderSelector from "./components/shared/recorder-selector/recorder-selector.jsx"
import TrbLabRecorder from "./components/shared/trb-lab-recorder/trb-lab-recorder.jsx"
import HighchartsSimple from "./components/shared/highcharts-simple/highcharts-simple.jsx"
	import HighchartsSimpleDataService from "./components/shared/highcharts-simple/services/highcharts-simple.data.service.jsx";
import ButtonFuturistic from "./components/shared/button-futuristic/button-futuristic.jsx"
import TrbLabRecorderEdit from "./components/shared/trb-lab-recorder-edit/trb-lab-recorder-edit.jsx"
import TrbLabSerieViewer from "./components/shared/trb-lab-serie-viewer/trb-lab-serie-viewer.jsx"
import Loading from "./components/shared/loading/loading.jsx"

// MATERIAL UI COMPONENTS
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Drawer from 'material-ui/Drawer'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import CircularProgress from 'material-ui/CircularProgress';
import DropDownMenu from 'material-ui/DropDownMenu';

//MATERIAL ICONS
import PlayArrow from "material-ui/svg-icons/av/play-arrow.js"
import Stop from "material-ui/svg-icons/av/stop.js"
import Pause from "material-ui/svg-icons/av/pause.js"
import FiberManualRecord from "material-ui/svg-icons/av/fiber-manual-record.js"
import Refresh from "material-ui/svg-icons/navigation/refresh.js"
import ImportExport from "material-ui/svg-icons/communication/import-export.js"
import Settings from "material-ui/svg-icons/action/settings.js"
import Save from "material-ui/svg-icons/content/save.js"
import ModeEdit from "material-ui/svg-icons/editor/mode-edit.js"
import Delete from 'material-ui/svg-icons/action/delete.js'
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right.js'
import ActionSearch from 'material-ui/svg-icons/action/search'
import Close from 'material-ui/svg-icons/navigation/close'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'

// THEMES
import themes from "./themes/index.js"
import materials from "./themes/materialui.index.js"
import materialTrb from "./themes/materialui.trb.js"
import materialRuggieri from "./themes/materialui.ruggieri.js"

// EXTERNAL LIBRAIRIES
/*import Highcharts from 'highcharts'
import "highcharts/modules/exporting.js"
import "highcharts/modules/offline-exporting.js"*/

// MONGO COLLECTIONS WITH SERVICES
import recordersMongo from "/imports/api/recorders/recorders.js"
import RecordersCrudService from "/imports/api/recorders/client/recorders.crud.service.jsx"
import RecordersDataService from "/imports/api/recorders/client/recorders.data.service.jsx"

import seriesMongo from "/imports/api/series/series.js"
import SeriesCrudService from "/imports/api/series/client/series.crud.service.jsx"
import SeriesDataService from "/imports/api/series/client/series.data.service.jsx"


/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD SHARED_________________________________________________________________________*/
/*______________________________________________________________________________________*/

@Loading(CircularProgress)
class $Loading {}

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD CHILDS_________________________________________________________________________*/
/*______________________________________________________________________________________*/

// _______________________________________________________________________________ | Navigation |
@AppLanguageService()
@AppWithRouterService(withRouter)
@AppStylesOptionsService(themes)
@Navigation()
class $Navigation {}
// _______________________________________________________________________________ | TrbLabDashBoard |
@AppLanguageService()
@AppWithRouterService(withRouter)
@NavigationRouterService()
@RecordersDataService()
@AppStylesOptionsService(themes)
@TrbLabDashBoard()
class $TrbLabDashBoard {}
// _______________________________________________________________________________ ||| HighchartsSimple |||
@AppStylesOptionsService(themes)
@HighchartsSimple()
class $HighchartsSimple {}
// _______________________________________________________________________________ ||| ButtonFuturistic |||
@AppStylesOptionsService(themes)
@ButtonFuturistic()
class $ButtonFuturistic {}
// _______________________________________________________________________________ ||| TrbLabRecorderRecorderEdit |||
@AppLanguageService()
@RecordersCrudService()
@AppStylesOptionsService(themes)
@TrbLabRecorderEdit(Paper, TextField, RaisedButton)
class $TrbLabRecorderEdit{}
// _______________________________________________________________________________ || TrbLabRecorder ||

@HighchartsSimpleDataService()
@RecordersCrudService()
@SeriesCrudService()
@SeriesDataService($Loading)
@AppLanguageService()
@TrbLabRecorder(
	$ButtonFuturistic, 
	$HighchartsSimple, 
	ModeEdit,
	Dialog,
	FlatButton,
	$TrbLabRecorderEdit
)class $TrbLabRecorder {}
// _______________________________________________________________________________ || RecorderSelector ||
@AppLanguageService()
@RecorderSelector(
	SelectField, 
	MenuItem
)class $RecorderSelector{}
// _______________________________________________________________________________ | TrbLabGraphs |

@RecordersDataService($Loading)
@AppStylesOptionsService(themes)
@AppLanguageService()
@TrbLabGraphs(
	$RecorderSelector,
	$TrbLabRecorder,
)class $TrbLabGraphs {}
// _______________________________________________________________________________ || TrbLabSerieViewer ||
@AppLanguageService()
@HighchartsSimpleDataService($Loading)
@TrbLabSerieViewer($HighchartsSimple, $TrbLabRecorderEdit, ModeEdit)
class $TrbLabSerieViewer {}	
// _______________________________________________________________________________ | TrbLabRecords |
@SeriesCrudService()
@SeriesDataService($Loading)
@HighchartsSimpleDataService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@TrbLabRecords(
	$TrbLabSerieViewer, 
	ActionSearch, 
	KeyboardArrowRight, 
	Delete, 
	Drawer, 
	ListItem, 
	List, 
	Delete)
class $TrbLabRecords {}
// _______________________________________________________________________________ | TrbLabSettings |

@AppLanguageService()
@RecordersCrudService()
@RecordersDataService($Loading)
@AppStylesOptionsService(themes)
@TrbLabSettings(SelectField, MenuItem)
class $TrbLabSettings {}
 
/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD CHILDS - END___________________________________________________________________*/
/*______________________________________________________________________________________*/

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD COMPONENT______________________________________________________________________*/
/*______________________________________________________________________________________*/

let appList = {
	TrbLabDashBoard : $TrbLabDashBoard,
	TrbLabRecords : $TrbLabRecords,
	TrbLabGraphs : $TrbLabGraphs,
	TrbLabSettings : $TrbLabSettings
}

export default function App_Component(){
	return (wrappedComponent)=>{
		@AppLanguageService()
		@AppRouterService(BrowserRouter)
		@AppMaterialService(MuiThemeProvider, getMuiTheme, materials)
		@AppStylesOptionsService(themes)
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api(appList)
		@Texts(texts)
		@Template(appList)
		class App_Component {}
		return App_Component
	}
}

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD COMPONENT - END________________________________________________________________*/
/*______________________________________________________________________________________*/

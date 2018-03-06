// REACT DEPENDENCIES
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { BrowserRouter, Route,  Link, Switch } from 'react-router-dom'
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
import icons from "./static-data/svg/app-icons/svg-app-icons.jsx"
import appList from "./static-data/app-list.data.jsx"
import categoryList from "./static-data/category-list.data.jsx"
import locationList from "./static-data/location-list.data.jsx"
import youtubeList from "./static-data/youtube-list.data.jsx"
import youtubeCategoryList from "./static-data/youtube-category-list.data.jsx"
import gallery3DList from "./static-data/gallery-3d-list.data.jsx"


// COMPONENT SERVICES
import AppStylesOptionsService from "./services/app.styles-options.service.jsx"
import AppMaterialService from "./services/app.material.service.jsx"
import AppRouterService from "./services/app.router.service.jsx"
import AppWithRouterService from "./services/app.with-router.service.jsx"
import AppLanguageService from "./services/app.language.service.jsx"
import AppAccessService from "./services/app.access.service.jsx"
import AppInjectorService from "./services/app.injector.service.jsx"


// COMPONENT CHILDREN

//PLATEFORM CHILDREN
import Header from "./components/header/header.jsx"
import Navigation from "./components/navigation/navigation.jsx"
	import NavigationRouterService from "./components/navigation/services/navigation.router.service.jsx"
import Home from "./components/home/home.jsx"
import Login from "./components/login/login.jsx"
import Signup from "./components/signup/signup.jsx"
import AppHelp from "./components/app-help/app-help.jsx"

// APPLICATIONS
import TrbDataRecorder from "./components/trb-data-recorder/trb-data-recorder.jsx"
import ImageCropper from "./components/image-cropper/image-cropper.jsx"
import TrbGalleryMui from "./components/trb-gallery-mui/trb-gallery-mui.jsx"
import TrbMap from "./components/trb-map/trb-map.jsx"
import GestionHf from "./components/gestion-hf/gestion-hf.jsx"
import AppContainer from "./components/app-container/app-container.jsx"
import WebPage from "./components/web-page/web-page.jsx"


import TrbRecorder from "./components/trb-recorder/app.component.jsx"
import TrbAtelierMasse from "./components/trb-atelier-masse/trb-atelier-masse.component.jsx"
import TrbBe from "./components/trb-be/trb-be.component.jsx"
import TrbBoucheuse from "./components/trb-boucheuse/trb-boucheuse.component.jsx"
import TrbChantier from "./components/trb-chantier/trb-chantier.component.jsx"
import TrbEaf from "./components/trb-eaf/trb-eaf.component.jsx"
import TrbEtuve from "./components/trb-etuve/trb-etuve.component.jsx"
import TrbSchool from "./components/trb-school/trb-school.component.jsx"
import TrbSearch from "./components/trb-search/trb-search.component.jsx"
import TrbMail from "./components/trb-mail/trb-mail.component.jsx"
import TrbChat from "./components/trb-chat/trb-chat.component.jsx"
import TrbWhiteboard from "./components/trb-whiteboard/trb-whiteboard.component.jsx"
import TrbGallery3d from "./components/trb-gallery-three-d/trb-gallery-three-d.component.jsx"
import TrbNewCampaign from "./components/trb-new-campaign/trb-new-campaign.component.jsx"
import TrbInstrumRm from "./components/trb-instrum-rm/trb-instrum-rm.component.jsx"
import TrbYoutube from "./components/trb-youtube/trb-youtube.component.jsx"
import TrbLinkedin from "./components/trb-linkedin/trb-linkedin.component.jsx"
import TrbSettings from "./components/trb-settings/trb-settings.component.jsx"
import TrbDataVis from "./components/trb-data-vis/trb-data-vis.component.jsx"
import TrbCurrencyConvert from "./components/trb-currency-convert/trb-currency-convert.jsx"
import TrbBillMaker from "./components/trb-bill-maker/trb-bill-maker.jsx"
import TrbRepairReport from "./components/trb-repair-report/trb-repair-report.jsx"
import TrbCameraIr from "./components/trb-camera-ir/trb-camera-ir.jsx"
import WorldCities from "./components/world-cities/world-cities.jsx"


// COMPONENT SHARED
import PageNotFound from "./components/shared/page-not-found/page-not-found.jsx"
import Loading from "./components/shared/loading/loading.jsx"
import CoolSelect from "./components/shared/cool-select/cool-select.jsx"
import TabHover from "./components/shared/tab-hover/tab-hover.jsx"
import TooTipClocks from "./components/shared/tool-tip-clocks/tool-tip-clocks.jsx"
import SideBoxHidden from "./components/shared/side-box-hidden/side-box-hidden.jsx"
import SimpleMap from "./components/shared/simple-map/simple-map.jsx"
import SideList from "./components/shared/side-list-mui/side-list-mui.jsx"


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
import IconButton from 'material-ui/IconButton';

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
import Flight from 'material-ui/svg-icons/maps/flight';
import Hotel from 'material-ui/svg-icons/maps/hotel';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import ChatIcon from 'material-ui/svg-icons/communication/chat';
import PeopleOutline from 'material-ui/svg-icons/social/people-outline';
import MailOutline from 'material-ui/svg-icons/communication/mail-outline';
import AddAPhoto from 'material-ui/svg-icons/image/add-a-photo';
import MoveIcon from 'material-ui/svg-icons/action/open-with.js';
import CheckIcon from 'material-ui/svg-icons/navigation/check.js';
import CropIcon from 'material-ui/svg-icons/image/crop.js';
import CenterIcon from 'material-ui/svg-icons/image/crop-original.js';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh.js';
import ClearIcon from 'material-ui/svg-icons/content/clear.js';
import ImageCollection from 'material-ui/svg-icons/image/collections.js';

// THEMES
import themes from "./themes/index.js"
import materials from "./themes/materialui.index.js"
import materialTrb from "./themes/materialui.trb.js"
import materialRuggieri from "./themes/materialui.ruggieri.js"


// EXTERNAL LIBRAIRIES
import Cropper from 'cropperjs'

// MONGO COLLECTIONS WITH SERVICES
import UsersService from "/imports/api/users/client/users.service.jsx";
import UsersCrudService from "/imports/api/users/client/users.crud.service.jsx";
import ClientsDataService from "/imports/api/clients/client/clients.data.service.jsx";
import PicturesDataService from "/imports/api/pictures/client/pictures.data.service.jsx";
import PicturesCrudService from "/imports/api/pictures/client/pictures.crud.service.jsx";

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD SHARED_________________________________________________________________________*/
/*______________________________________________________________________________________*/

@AppStylesOptionsService(themes)
@SideList()
class $SideList{}

@SideBoxHidden(Drawer)
class $SideBoxHidden{}

@AppStylesOptionsService(themes)
@TooTipClocks(Flight, Hotel, ZoomIn, IconButton)
class $TooTipClocks{}

let wordCitiesChilds = {
	TooTipClocks : $TooTipClocks
}

@AppInjectorService({locationList:locationList})
@WorldCities(wordCitiesChilds)
class $WorldCities{}

@AppLanguageService()
@PageNotFound()
class $PageNotFound{}

@Loading()
class $Loading{}

@AppStylesOptionsService(themes)
@TabHover()
class $TabHover{}

@NavigationRouterService()
@AppStylesOptionsService(themes)
@CoolSelect(IconButton, $TabHover)
class $CoolSelect{}

@AppStylesOptionsService(themes)
@SimpleMap()
class $SimpleMap{}

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD APPLICATIONS___________________________________________________________________*/
/*______________________________________________________________________________________*/

@TrbRecorder()
class $TrbRecorder{}

@TrbAtelierMasse()
class $TrbAtelierMasse{}

@TrbBe()
class $TrbBe{}

@TrbBoucheuse()
class $TrbBoucheuse{}

@TrbChantier()
class $TrbChantier{}

@TrbEaf()
class $TrbEaf{}

@TrbEtuve()
class $TrbEtuve{}

@TrbSchool()
class $TrbSchool{}

@TrbSearch()
class $TrbSearch{}

@TrbMail()
class $TrbMail{}

@TrbMail()
class $TrbChat{}

@TrbWhiteboard()
class $TrbWhiteboard{}

@AppInjectorService({itemList: gallery3DList})
@AppStylesOptionsService(themes)
@TrbGallery3d()
class $TrbGallery3d{}

@AppStylesOptionsService(themes)
@TrbNewCampaign({SimpleMap : $SimpleMap})
class $TrbNewCampaign{}

@TrbInstrumRm()
class $TrbInstrumRm{}

@AppInjectorService({youtubeList:youtubeList, categoryList : youtubeCategoryList})
@AppStylesOptionsService(themes)
@TrbYoutube()
class $TrbYoutube{}

@TrbLinkedin()
class $TrbLinkedin{}

@TrbSettings()
class $TrbSettings{}

@TrbDataVis()
class $TrbDataVis{}

@TrbCurrencyConvert()
class $TrbCurrencyConvert{}

@TrbBillMaker()
class $TrbBillMaker{}

@TrbRepairReport()
class $TrbRepairReport{}

@TrbCameraIr()
class $TrbCameraIr{}

@WebPage()
class $WebPage{}



/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD CHILDS_________________________________________________________________________*/
/*______________________________________________________________________________________*/
@ClientsDataService()
@PicturesDataService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@TrbGalleryMui()
class $TrbGalleryMui{}

@ClientsDataService()
@PicturesCrudService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@ImageCropper(Cropper, RaisedButton, TextField, SelectField, MenuItem, IconButton, MoveIcon, CropIcon, CenterIcon, RefreshIcon, ClearIcon, CheckIcon)
class $ImageCropper{}

@TrbDataRecorder()
class $TrbDataRecorder{}

@ClientsDataService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@TrbMap($SimpleMap, $SideList)
class $TrbMap{}

@ClientsDataService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@GestionHf()
class $GestionHf{}


@AppStylesOptionsService(themes)
@AppLanguageService()
@Header()
class $Header{}

@UsersService()
@AppWithRouterService(withRouter)
@AppStylesOptionsService(themes)
@AppLanguageService()
@Navigation()
class $Navigation{}

let appContainerChilds = {
	WorldCities : $WorldCities,
	TrbRecorder : $TrbRecorder,
	ImageCropper : $ImageCropper, 
	TrbGalleryMui : $TrbGalleryMui, 
	TrbMap : $TrbMap, 
	GestionHf : $GestionHf,
	TrbAtelierMasse : $TrbAtelierMasse,
	TrbBe : $TrbBe,
	TrbBoucheuse : $TrbBoucheuse,
	TrbChantier : $TrbChantier,
	TrbEaf : $TrbEaf,
	TrbEtuve : $TrbEtuve,
	TrbSchool : $TrbSchool,
	TrbSearch : $TrbSearch,
	TrbMail : $TrbMail,
	TrbChat : $TrbChat,
	TrbWhiteboard : $TrbWhiteboard,
	TrbGallery3d : $TrbGallery3d,
	TrbNewCampaign : $TrbNewCampaign,
	TrbInstrumRm : $TrbInstrumRm,
	TrbYoutube : $TrbYoutube,
	TrbLinkedin : $TrbLinkedin,
	TrbSettings : $TrbSettings,
	TrbDataVis : $TrbDataVis,
	TrbCurrencyConvert : $TrbCurrencyConvert,
	TrbBillMaker : $TrbBillMaker,
	TrbRepairReport : $TrbRepairReport,
	TrbCameraIr : $TrbCameraIr,
	WebPage : $WebPage
}


@AppStylesOptionsService(themes)
@AppInjectorService({appList:appList, categoryList : categoryList})
@AppContainer(appContainerChilds, icons)
class $AppContainer{}

let homeChilds = {
	AppContainer : $AppContainer
}

@AppRouterService(BrowserRouter)
@AppWithRouterService(withRouter)
//@AppInjectorService({items:applisMocks})
@NavigationRouterService()
@AppAccessService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@Home(homeChilds)
class $Home{}


@UsersService()
@NavigationRouterService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@Login(RaisedButton, TextField)
class $Login{}

@UsersService()
@UsersCrudService()
@NavigationRouterService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@Signup(TextField, RaisedButton)
class $Signup{}

@AppStylesOptionsService(themes)
@AppLanguageService()
@AppHelp()
class $AppHelp{}


/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD COMPONENT______________________________________________________________________*/
/*______________________________________________________________________________________*/


let appChilds = {
	Header : $Header,
	Navigation : $Navigation,
	Home : $Home,
	Login : $Login, 
	Signup : $Signup, 
	AppHelp : $AppHelp, 
	PageNotFound : $PageNotFound,
	SideBoxHidden : $SideBoxHidden,
}


export default function App(){
	return (wrappedComponent)=>{
	
		@AppRouterService(BrowserRouter)
		@AppWithRouterService(withRouter)
		@AppMaterialService(MuiThemeProvider, getMuiTheme, materials)
		@AppStylesOptionsService(themes)
		@AppLanguageService()
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(appChilds)
		class App_Component {}
		return App_Component
	}
}  


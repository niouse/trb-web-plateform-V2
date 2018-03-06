
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/image-cropper.template.jsx";
import Api from "./api/image-cropper.api.jsx";
import Styles from "./services/image-cropper.styles.service.jsx";
import Texts from "./services/image-cropper.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/image-cropper.styles.default.js";
import stylesOptions from "./styles/image-cropper.styles-options.default.js";
import computeStyles from "./styles/image-cropper.compute-styles.js";
import texts from "./text/image-cropper.text.js";

//MATERIAL COMPNENTS
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

//MATERIAL ICONS
import MoveIcon from 'material-ui/svg-icons/action/open-with.js';
import CheckIcon from 'material-ui/svg-icons/navigation/check.js';
import CropIcon from 'material-ui/svg-icons/image/crop.js';
import CenterIcon from 'material-ui/svg-icons/image/crop-original.js';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh.js';
import ClearIcon from 'material-ui/svg-icons/content/clear.js';

//EXTERNAL LIBRAIRIES
import Cropper from 'cropperjs'

export default function ImageCropper(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Texts(texts)
		@Api(Cropper)
		@Template(RaisedButton, TextField, SelectField, MenuItem, IconButton, MoveIcon, CropIcon, CenterIcon, RefreshIcon, ClearIcon, CheckIcon)
		class ImageCropper_Component {}
		return ImageCropper_Component
	}
}  


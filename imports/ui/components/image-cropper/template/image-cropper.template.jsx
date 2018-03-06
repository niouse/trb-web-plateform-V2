
import React, {Component} from 'react';
import PropTypes from 'prop-types';


import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import Drawer from 'material-ui/Drawer'
import Snackbar from 'material-ui/Snackbar';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default function ImageCropper_Template(RaisedButton, TextField, SelectField, MenuItem, IconButton, MoveIcon, CropIcon, CenterIcon, RefreshIcon, ClearIcon, CheckIcon) {
    return (wrappedComponent) => {
        const $ImageCropper_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="image-cropper-container" style={styles.container}>

						<div style={styles.header}>
							<button style={styles.selectButton} onClick={()=>{props.selectPhoto()}}>{text.selectButton}</button>
							<button style={styles.selectButton} onClick={()=>{props.toggleStateBool('openDrawerFilters')}}>{text.filtersButton}</button>
							<button style={styles.saveButton}  onClick={()=>{props.saveImage()}}>{text.saveButton}</button>
						</div>
					
						<Drawer
							open={props.openDrawerFilters}
							docked={false}
							{...styles.drawerFilters.attr}
							onRequestChange={()=>props.toggleStateBool('openDrawerFilters')}
							>
							<div style={styles.fields}>			 
								 <SelectField
									  id="image-cropper-access"
									  value={props.access}
									  onChange={(event, index, value)=>{props.onMenuChange(event, index, value, "access")}}
									  floatingLabelText={text.accessMenu}
									  style={styles.menu}
									  {...styles.menu.attr}
									  autoWidth={false}
									>
									  {text.accessesList.map((access, index)=>{
											return(
												<MenuItem key={index} value={access} primaryText={access} style={styles.textField}/>
											)
										})}
								</SelectField>
								
								<SelectField
									  id="image-cropper-photoTypeMenu"
									  value={props.photoType}
									  onChange={(event, index, value)=>{props.onMenuChange(event, index, value, "photoType")}}
									  floatingLabelText={text.photoTypeMenu}
									  style={styles.menu}
									  {...styles.menu.attr}
									  autoWidth={false}
									>
									  {text.photoTypesList.map((photoType, index)=>{
											return(
												<MenuItem key={index} value={photoType} primaryText={photoType} style={styles.textField}/>
											)
										})}
								</SelectField>

								 <SelectField
									  id="image-cropper-industriesMenu"
									  value={props.industry}
									  onChange={(event, index, value)=>{props.onMenuChange(event, index, value, "industry")}}
									  floatingLabelText={text.industriesMenu}
									  style={styles.menu}
									  {...styles.menu.attr}
									  autoWidth={false}
									>
									 {text.industriesList.map((industry, index)=>{
											return(
												<MenuItem key={index} value={industry} primaryText={industry} style={styles.textField}/>
											)
										})}
									</SelectField>
								
									<SelectField
									  id="image-cropper-clientsMenu"
									  value={props.client}
									  onChange={(event, index, value)=>{props.onMenuChange(event, index, value, "client")}}
									  floatingLabelText={text.clientsMenu}
									  style={styles.menu}
									  {...styles.menu.attr}
									  autoWidth={false}
									>
										{props.clientsList.map((client, index)=>{
											return(
												<MenuItem key={index} value={client.name} primaryText={client.name} style={styles.textField}/>
											)
										})}
									</SelectField>
								
									<SelectField
									  id="image-cropper-solutionsMenu"
									  value={props.solution}
									   onChange={(event, index, value)=>{props.onMenuChange(event, index, value, "solution")}}
									  floatingLabelText={text.solutionsMenu}
									  style={styles.menu}
									  {...styles.menu.attr}
									  autoWidth={false}
									>
									  {text.solutionsList.map((solution, index)=>{
											return(
												<MenuItem key={index} value={solution} primaryText={solution} style={styles.textField}/>
											)
										})}
									</SelectField>
								
									<TextField
									  id="image-cropper-tagsInput"
									  value={props.tags}
									  onChange={(event, value)=>{props.onTextChange(event, value, "tags")}}
									  hintText={text.hintText}
									  floatingLabelText={text.tagsInput}
									  style={styles.textField}
									/>
								
									<TextField
									  id="image-cropper-description"
									  hintText={text.hintText}
									  value={props.description}
									  floatingLabelText={text.description}
									  onChange={(event, value)=>{props.onTextChange(event, value, "description")}}
									  style={styles.textField}
									  multiLine={true}
									  rows={4}
									  rowsMax={4}
									/>
								
									<div style={styles.photoInputBox}>
										 <span style={styles.photoInputLabel}>Image de profil:</span>
										 <input 
											 id="image-cropper-photoInput" 
											 name="file"
											 type="file" 
											 style={styles.photoInput}
										 />
									</div>
								</div>
						</Drawer>
					
						<div  style={styles.content}>
							

							<div style={styles.photoEdit}>
								<div style={styles.photoBox}>
										<img 
										id="image-cropper-imageToCrop" 
										style={styles.imageToCrop} 
										src="./app/trbLogo2.png" 
										/>
								</div>

								<div style={styles.photoToolBox}>
									<IconButton 
										style={styles.toolButton}
										onClick={()=>props.cropperAction('setDragMode', 'move')}
										disabled = {props.notCroppable}
										title='mode déplacement' 
									>
										<MoveIcon {...styles.toolButton.attr}/>
									</IconButton>
									<IconButton 
										style={styles.toolButton}
										onClick={()=>props.cropperAction('setDragMode', 'crop')}
										disabled = {props.notCroppable}
										title='mode crop'
									>
										<CropIcon {...styles.toolButton.attr}/>
									</IconButton>
									<IconButton 
										style={styles.toolButton}
										onClick={()=>props.cropperAction('reset', null)}
										disabled = {props.notCroppable}
										title='recentrer la photo'
									>
										<CenterIcon {...styles.toolButton.attr}/>
									</IconButton>
									<IconButton 
										style={styles.toolButton}
										onClick={()=>props.cropperAction('rotate', 45)}
										disabled = {props.notCroppable}
										title='pivoter de 45°'
									>
										<RefreshIcon {...styles.toolButton.attr}/>
									</IconButton>
									<IconButton 
										style={styles.toolButton}
										onClick={()=>props.clearCropper()}
										title='annuler'
									>
										<ClearIcon {...styles.toolButton.attr}/>
									</IconButton>
									<IconButton 
										style={styles.toolButton}
										onClick={()=>props.crop('crop')}
										title='Cropper la photo'
										disabled = {props.notCroppable}
									>
										<CheckIcon {...styles.toolButton.attr}/>
									</IconButton>

								</div>

							</div> 

						</div>

						<div style={styles.footer}>
							{/*<p id="message" style={props.messageStyle}>{props.message}</p>*/}
							 <Snackbar
								  style={props.messageStyle}
								  {...props.messageStyle.attr}
								  open={props.openMessage}
								  message={props.message}
								  autoHideDuration={4000} 
								/>
						</div>
					
				</div>
            );
        }
        $ImageCropper_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $ImageCropper_Template
    }
}
    

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Refresh from "material-ui/svg-icons/navigation/refresh.js"
import FloatingActionButton from 'material-ui/FloatingActionButton';

export default function TrbGalleryMui_Template_Filters() {
    return (wrappedComponent) => {
        const $TrbGalleryMui_Template_Filters = (props) => {
            let styles = props.styles
            let text = props.text
			console.log(props.text)
            return (
                <div id="trb-gallery-mui-filters" style={styles}>
					<div style={styles.filtersHeader}>
						<div  id="trb-gallery-mui-filters-title" style={styles.title}>{text.title}</div>
						<div 
							style={styles.refreshButton}
							onClick={props.refreshList}
							>
							<Refresh {...styles.refreshIcon.attr}/>
						</div>
					</div>
					<div style={styles.fields}>			 
						 <SelectField
							  id="trb-gallery-mui-access"
							  value={props.access}
							  onChange={(event, index, value)=>{props.onMenuChange(event, index, value, "access")}}
							  floatingLabelText={text.accessMenu}
							  style={styles.menu}
							  autoWidth={false}
							>
							  {text.accessesList.map((access, index)=>{
									return(
										<MenuItem key={index} value={access} primaryText={access} style={styles.textField}/>
									)
								})}
						</SelectField>

						<SelectField
							  id="trb-gallery-mui-photoTypeMenu"
							  value={props.photoType}
							  onChange={(event, index, value)=>{props.onMenuChange(event, index, value, "photoType")}}
							  floatingLabelText={text.photoTypeMenu}
							  style={styles.menu}
							  autoWidth={false}
							>
							  {text.photoTypesList.map((photoType, index)=>{
									return(
										<MenuItem key={index} value={photoType} primaryText={photoType} style={styles.textField}/>
									)
								})}
						</SelectField>

						 <SelectField
							  id="trb-gallery-mui-industriesMenu"
							  value={props.industry}
							  onChange={(event, index, value)=>{props.onMenuChange(event, index, value, "industry")}}
							  floatingLabelText={text.industriesMenu}
							  style={styles.menu}
							  autoWidth={false}
							>
							 {text.industriesList.map((industry, index)=>{
									return(
										<MenuItem key={index} value={industry} primaryText={industry} style={styles.textField}/>
									)
								})}
							</SelectField>

							<SelectField
							  id="trb-gallery-mui-clientsMenu"
							  value={props.client}
							  onChange={(event, index, value)=>{props.onMenuChange(event, index, value, "client")}}
							  floatingLabelText={text.clientsMenu}
							  style={styles.menu}
							  autoWidth={false}
							>
								{props.clientsList.map((client, index)=>{
									return(
										<MenuItem key={index} value={client.name} primaryText={client.name} style={styles.textField}/>
									)
								})}
							</SelectField>

							<SelectField
							  id="trb-gallery-mui-solutionsMenu"
							  value={props.solution}
							   onChange={(event, index, value)=>{props.onMenuChange(event, index, value, "solution")}}
							  floatingLabelText={text.solutionsMenu}
							  style={styles.menu}
							  autoWidth={false}
							>
							  {text.solutionsList.map((solution, index)=>{
									return(
										<MenuItem key={index} value={solution} primaryText={solution} style={styles.textField}/>
									)
								})}
							</SelectField>
							<div style={styles.resultsNumber}>
								{text.resultsNumber} : {props.resultsNumber}
							</div>

						</div>
				</div>
            );
        }
        $TrbGalleryMui_Template_Filters.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbGalleryMui_Template_Filters
    }
}
    
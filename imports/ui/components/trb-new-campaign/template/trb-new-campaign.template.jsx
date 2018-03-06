
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';

import IconHf from "/imports/ui/static-data/svg/app-icons/svg-hf.template.jsx"
import HfCoulage from "/imports/ui/static-data/svg/svg-hf-coulage.template.jsx"
import CoulageVibre from "/imports/ui/static-data/svg/svg-coulage-vibre.template.jsx"
import GunitageDense from "/imports/ui/static-data/svg/svg-gunitage-dense.template.jsx"
import Gunitage from "/imports/ui/static-data/svg/svg-gunitage.template.jsx"
import BlockPrefa from "/imports/ui/static-data/svg/svg-block-prefa.template.jsx"
import Damage from "/imports/ui/static-data/svg/svg-damage.template.jsx"
import Usure from "/imports/ui/static-data/svg/svg-usure.template.jsx"
import Securite from "/imports/ui/static-data/svg/svg-securite.template.jsx"
import BriqueFond from "/imports/ui/static-data/svg/svg-brique-fond.template.jsx"
import RmAvBarrage from "/imports/ui/static-data/svg/svg-rm-av-barrage.template.jsx"
import RmApBarrage from "/imports/ui/static-data/svg/svg-rm-ap-barrage.template.jsx"
import RmImpact from "/imports/ui/static-data/svg/svg-rm-impact.template.jsx"
import RmPoutre from "/imports/ui/static-data/svg/svg-rm-poutre.template.jsx"
import RlDroite from "/imports/ui/static-data/svg/svg-rl-droite.template.jsx"
import RlGauche from "/imports/ui/static-data/svg/svg-rl-gauche.template.jsx"
import RlPiege from "/imports/ui/static-data/svg/svg-rl-piege.template.jsx"
import RlVirage from "/imports/ui/static-data/svg/svg-rl-virage.template.jsx"
import RfDroite from "/imports/ui/static-data/svg/svg-rf-droite.template.jsx"
import RfGauche from "/imports/ui/static-data/svg/svg-rf-gauche.template.jsx"
import RfPiege from "/imports/ui/static-data/svg/svg-rf-piege.template.jsx"
import RfVirage from "/imports/ui/static-data/svg/svg-rf-virage.template.jsx"
import Bascule from "/imports/ui/static-data/svg/svg-bascule.template.jsx"


@HfCoulage()
class $HfCoulage{}

@CoulageVibre()
class $CoulageVibre{}

@GunitageDense()
class $GunitageDense{}

@Gunitage()
class $Gunitage{}

@BlockPrefa()
class $BlockPrefa{}

@Damage()
class $Damage{}

@Usure()
class $Usure{}

@Securite()
class $Securite{}

@BriqueFond()
class $BriqueFond{}

@RmPoutre()
class $RmPoutre{}

@RmAvBarrage()
class $RmAvBarrage{}

@RmApBarrage()
class $RmApBarrage{}

@RmImpact()
class $RmImpact{}

@RlDroite()
class $RlDroite{}

@RlGauche()
class $RlGauche{}

@RlPiege()
class $RlPiege{}

@RlVirage()
class $RlVirage{}

@RfDroite()
class $RfDroite{}

@RfGauche()
class $RfGauche{}

@RfPiege()
class $RfPiege{}

@RfVirage()
class $RfVirage{}

@Bascule()
class $Bascule{}

import ButtonWrapper from "./button-wrapper.template.jsx"

@ButtonWrapper()
class $ButtonWrapper{}

let betonList1 = [
	"33",
	"54",
	"22"
]
let betonList2 = [
	"B",
	"N",
	"S"
]

let betonList3 = [
	"01",
	"02",
	"03"
]

export default function TrbNewCampaign_Template(childs) {
    return (wrappedComponent) => {
        const $TrbNewCampaign_Template = (props) => {
            let styles = props.styles
            let text = props.text
			
			let rowStyle={
				display : "flex",
				width : "100%"
			}
			let cellStyle={
				flex : 1,
			}
			
			let appliAttr = {
				fill : "none",
				hoverFill : "none",
				color : props.stylesOptions.theme.colors.primary,
				hoverColor : props.stylesOptions.theme.colors.primary,
				width : "130px",
				showBox : true,
				boxStrokeColor : "none",
				hoverBoxStrokeColor : props.stylesOptions.theme.colors.primary,
				hoverBoxFill : "white",
				boxFill : "white",
				
			}
            return (
                <div id="trb-new-campaign-container" className="container" style={styles.container}>
					<div style={{maxWidth : "480px", margin : "auto"}}>
						<h1  id="trb-new-campaign-title" style={styles.title}>Nouvelle campagne</h1>
						 <List>
							<Subheader>Nested List Items</Subheader>
							<ListItem primaryText="General"
								key="1"
								primaryTogglesNestedList={true}
								 nestedItems={[
								<div style={rowStyle}>
									<div style={cellStyle}>Date:</div>
									<DatePicker hintText="Portrait Dialog" />
								</div>,
								<div style={rowStyle}>
									<div style={cellStyle}>Produit:</div>
									  <DropDownMenu value={0} >
										  {betonList1.map((item, index)=>{
											  return (
												   <MenuItem value={index} key={index} primaryText={item} />
											  )
										  })}
										</DropDownMenu>
										 <DropDownMenu value={0} >
										  {betonList2.map((item, index)=>{
											  return (
												   <MenuItem value={index} key={index} primaryText={item} />
											  )
										  })}
										</DropDownMenu>
										<DropDownMenu value={0} >
										  {betonList3.map((item, index)=>{
											  return (
												   <MenuItem value={index} key={index} primaryText={item} />
											  )
										  })}
										</DropDownMenu>
								</div>,
								<div style={rowStyle}>
									<div style={cellStyle}>Quantité béton :</div>
									 <TextField
									  id="text-field-default"
									  defaultValue={0}
									  type="number"
									/>
								</div>,
								<div style={rowStyle}>
									<div style={cellStyle}>Tonnage fonte:</div>
									 <TextField
									  id="text-field-default"
									  defaultValue={0}
									  type="number"
									/>
								</div>,
								<div style={rowStyle}>
									<Checkbox
									  label="Première refection"
									  labelPosition="left"
									/>
								</div>]} />
								
					
							<ListItem primaryText="Type d'intervention" key="2" primaryTogglesNestedList={true} nestedItems={[
									<div style={{display : "flex", flexWrap:"wrap", justifyContent : "center"}}>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$HfCoulage }>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$CoulageVibre}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$GunitageDense}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$Gunitage}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$BlockPrefa}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$Damage}>
										</$ButtonWrapper>
									</div>
								</div>
								 ]}/>
							 <ListItem primaryText="Couche" key="3" primaryTogglesNestedList={true} nestedItems={[
									 <div style={{display : "flex", justifyContent : "center"}}>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$Usure}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$Securite}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$Bascule}>
										</$ButtonWrapper>
									</div>
								</div>
								 ]} />
							  <ListItem primaryText="Lieu d'intervention" key="4" primaryTogglesNestedList={true} nestedItems={[
								<div style={{display : "flex", justifyContent : "center", flexWrap : "wrap"}}>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$RmImpact}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$RmAvBarrage}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$RmApBarrage}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$RmPoutre}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$RlPiege}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$RlVirage}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$RlGauche}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$RlDroite}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$RfPiege}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$RfVirage}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$RfGauche}>
										</$ButtonWrapper>
									</div>
									<div style={{width : "120px", height:"120px", border:"1px solid grey"}}>
										<$ButtonWrapper {...appliAttr} svgIcon={$RfDroite}>
										</$ButtonWrapper>
									</div>
								</div>
								 ]} />
							  <ListItem primaryText="Propfil d'usure" key="5" onNestedListToggle={()=>{props.showChart("new-campaign-chart")}} primaryTogglesNestedList={true} nestedItems={[
									 <ListItem primaryText="Ajouter un profil" key="0">
									 </ListItem>,
									
									 	<div id="new-campaign-chart" style={{width : "480px", height:"480px"}}></div>
							
								 ]} />
							  <ListItem primaryText="Photos" key="6" primaryTogglesNestedList={true} nestedItems={[
									 <TextField type="file" />
								 ]} />
							  <ListItem primaryText="Remarques" key="7" primaryTogglesNestedList={true} nestedItems={[
									 <TextField type="textarea" />
								 ]} />
							 <ListItem  key="8" primaryText="Options" primaryTogglesNestedList={true} nestedItems={[
									  <ListItem key="0" primaryText="Env. mail client" rightToggle={<Toggle />} />,
									 <ListItem key="8" primaryText="Enregistrer brouillon" rightToggle={<Toggle />} />
								 ]} />
						</List>
	
						<RaisedButton label="Soumettre" />
	
					</div>
					
					
				</div>
            );
        }
        $TrbNewCampaign_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbNewCampaign_Template
    }
}
    
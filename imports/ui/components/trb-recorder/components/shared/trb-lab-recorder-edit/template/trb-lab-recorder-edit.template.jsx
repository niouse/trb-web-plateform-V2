
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbLabRecorderEdit_Template(Paper, TextField, RaisedButton) {
    return (wrappedComponent) => {
        const $TrbLabRecorderEdit_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-lab-recorder-edit-container" style={styles.container}>
					<Paper zDepth={2} style={styles.content}>
                        <div style={styles.title}>
							Paramètres pour la sonde {" "+props.recorder.name} 
						 	<span 
								style={{float:"right", cursor:"pointer"}} 
								onClick={()=>props.close()}
								>
									X
							</span>
						</div>

                        <form id="settingsForm" style={styles.settingsForm} action={"javascript:void(0)"}>

                            <div style={styles.serieInfo}>
                                <div style={styles.tableRow} >
                                    <div style={styles.tableCell} >{text.cell1}</div>
                                    <div style={styles.tableCell2} >
										<TextField 
											name="title" 
											disabled={true} 
											value={props.name} 
											style={styles.inputs}
											/>
									</div>
                                </div>
								
								<div style={styles.tableRow} >
                                    <div style={styles.tableCell} >{props.text.cell2}</div>
                                    <div style={styles.tableCell2} >
										<TextField 
											name="numDep" 
											value={props.numDep} 
											style={styles.inputs}
											onChange={(e, newValue, key)=>props.handleTextChange(e, newValue, "numDep")}
										/>
									</div>
                                </div>
								
                                <div style={styles.tableRow} >
                                    <div style={styles.tableCell} >{props.text.cell3}</div>
                                    <div style={styles.tableCell2} >
										<TextField 
											name="codeProd" 
											value={props.codeProd} 
											style={styles.inputs}
											onChange={(e, value, key)=>props.handleTextChange(e, value, "codeProd")}
										/>
									</div>
                                </div>
                            </div>

                            <div style={props.messageStyle}>{props.message}</div>
							
                            <div style={styles.buttonBox}>
                                <RaisedButton 
									onClick={()=>props.saveChanges()} 
									label="Enregistrer" style={styles.button}
									/>
                                <RaisedButton 
									onClick={()=>props.close()} 
									label="Fermer" style={styles.button}
									/>
                            </div>
                        </form>

                    </Paper>
				</div>
            );
        }
        $TrbLabRecorderEdit_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
			handleTextChange: PropTypes.func.isRequired,
        };
        return $TrbLabRecorderEdit_Template
    }
}
    
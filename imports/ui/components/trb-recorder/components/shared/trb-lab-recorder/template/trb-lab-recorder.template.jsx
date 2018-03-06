
import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default function TrbLabRecorder_Template(ButtonFuturistic, HighchartsSimple, ModeEdit, Dialog, FlatButton, TrbLabRecorderEdit) {
    return (wrappedComponent) => {
        const $TrbLabRecorder_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div 
					id="trb-lab-recorder-container" 
					className="container" 
					style={styles.container}
					>
					
					<div  
						id="trb-lab-recorder-buttonBox"
						style={styles.controlBox} 
						> 
						<div 
							id="trb-lab-recorder-results" 
							style={styles.results} 
							>

							<div 
								style={styles.serieTitleBox}
								>
								<div style={styles.serieTitle}>
									{props.recorder.serie.name}
								</div>	
								
								<ModeEdit 
									{...styles.editButton.attr}
									style={styles.editButton}
									onClick={()=>props.toggleStateBool("showRecorderEdit")}
								/>

							</div>

							<div style={styles.rowTable}>
								<div style={styles.tableCell1}>{text.cell1} </div>
								<div style={styles.tableCell2}>{props.recorder.serie.numDep} </div>
							</div>

							 <div style={styles.rowTable}>
								<div style={styles.tableCell1}>{text.cell2} </div>
								<div style={styles.tableCell2}>{props.recorder.serie.codeProd} </div>
							</div>

							<div style={styles.rowTable}>
								<div style={styles.tableCell1}>{text.cell3}</div>
								<div style={styles.tableCell2}>{props.recorder.serie.maxValue} °C</div>
							</div>
							<div style={styles.rowTable}>
								<div style={styles.tableCell1}>{text.cell4}</div>
								<div style={styles.tableCell2}>{(()=>props.convertTime(props.recorder.serie.timeToMax))()}</div>
							</div>
						</div>
						<div style={styles.buttonBox}>
							<ButtonFuturistic 
								buttonId="trb-lab-recorder-startButton"
								label={text.startButton}
								size={styles.buttonFuturistic.size}
								small={styles.buttonFuturistic.small}
								active={props.isOnRecord}
								onClick={()=>props.startRecord()}
								/>
							<ButtonFuturistic 
								buttonId="trb-lab-recorder-stopButton"
								label={text.stopButton}
								size={styles.buttonFuturistic.size}
								small={styles.buttonFuturistic.small}
								active={props.isOnRecord}
								onClick={()=>props.stopRecord()}
								/>
						</div>
					</div>
					
					<div 
						id="trb-lab-recorder-mainBox" 
						style={styles.mainBox}
						>
						<div id="trb-lab-recorder-graph"
							style={styles.graph}
							>
							<div 
								id="trb-lab-recorder-header" 
								style={styles.header}
								>
								<div style={styles.title}><strong>{props.recorder.name} - {props.recorder.lastValue}°C</strong></div>
							</div>
							<HighchartsSimple 
								chartId={props.recorder._id}
								style={styles.chart}
								/>
						</div>

						
					</div>
					
					<TrbLabRecorderEdit 
						show={props.showRecorderEdit}
						recorder={props.recorder} 
						close={()=>props.toggleStateBool("showRecorderEdit")}
						saveChanges={(id, options, callback)=>props.updateRecorder(id, options, callback)}
						serie={props.recorder.serie}
						seriesList={props.seriesList}
					/>
					
					<Dialog 
						  title={text.alertTitle}
						  actions={props.alertOptions}
						  modal={false}
						  open={props.showAlert}
						  onRequestClose={()=>props.toggleStateBool("showAlert")}
						>
						{typeof(text.messages)==="string" ? text.messages : "error, check message texts"}
					</Dialog>
					
				</div>
            );
        }
        $TrbLabRecorder_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
			convertTime : PropTypes.func.isRequired,
			toggleStateBool : PropTypes.func.isRequired,
			showRecorderEdit : PropTypes.bool.isRequired,
			showAlert : PropTypes.bool.isRequired,
			alertOptions : PropTypes.array.isRequired,
        };
        return $TrbLabRecorder_Template
    }
}
    
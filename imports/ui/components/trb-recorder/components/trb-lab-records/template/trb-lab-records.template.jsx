
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';

export default function TrbLabRecords_Template(TrbLabSerieViewer, ActionSearch, KeyboardArrowRight, Delete, Drawer, ListItem, List, Delete) {
    return (wrappedComponent) => {
        const $TrbLabRecords_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-lab-records-container" className="container" style={styles.container}>
					{<div style={styles.expandButtonBox}>
						<div      
							style={styles.expandButton} 
							onClick = {()=>props.toggleStateBool('showSearch')}
							{...styles.expandButton.attr}
						>
							<ActionSearch color="#cd3a35" style={styles.search} />
						</div>
					</div>}
					
					{<div style={styles.serieViewer}> 	
						{
							props.serie ? 
							<TrbLabSerieViewer 
								serie={props.serie} 
							/> : 
							<div style={styles.selectData}>{text.selectData}</div>
						} 
                	</div>}
					
					{props.showSearch && <Drawer
					  docked={false}
					  open={props.showSearch}
					  onRequestChange={()=>props.toggleStateBool('showSearch')}
					  width = {styles.drawer.width}
					>
						<div style={styles.listBox}>
							<div style={styles.searchListBox}>
								<input 
									style={styles.searchList}
									type="text" 
									onChange={props.searchInList}
									/>
							</div>
							{props.series[0] ? 
								props.series.map((x, index)=>{
								return (	
									<List key={"card"+ index} style={styles.listItem}>
										<ListItem
										  primaryText={x.name}
										  style={styles.item}
										  secondaryText={props.convertDate(x.startedAt)}
										  onTouchTap={(e)=>props.selectSerie(e, x._id)}
											rightIconButton = {<IconButton tooltip="Delete"><Delete hoverColor='red' onClick={()=>props.deleteSerie(x._id)}/></IconButton>}
										/>
									  </List>
								) 
							  }	
							) :
							  <p>No records</p>}
						</div>

					</Drawer>}
				</div>	
            );
        }
        $TrbLabRecords_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
			toggleStateBool : PropTypes.func.isRequired,
			showSearch : PropTypes.bool.isRequired,
        };
        return $TrbLabRecords_Template
    }
}
    
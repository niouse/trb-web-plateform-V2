
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ClientsDetails from "./trb-map.clients-details.template.jsx"

//MATERIAL COMPNENTS
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

//MATERIAL ICONS
import PlayArrow from 'material-ui/svg-icons/av/play-arrow.js';
import Stop from 'material-ui/svg-icons/av/stop.js';
import Pause from 'material-ui/svg-icons/av/pause.js';
import FiberManualRecord from 'material-ui/svg-icons/av/fiber-manual-record.js';
import Refresh from 'material-ui/svg-icons/navigation/refresh.js';
import ImportExport from 'material-ui/svg-icons/communication/import-export.js';
import Settings from 'material-ui/svg-icons/action/settings.js';
import Save from 'material-ui/svg-icons/content/save.js';



import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';

export default function TrbMap_ClientsDetails_Template(SimpleMap) {
    return (wrappedComponent) => {
        const $TrbMap_ClientsDetails_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-map-container" className="container" style={styles.container}>
					<div style={styles.infosBox}>
						<div style={styles.infosBox.title}>{props.client.name}</div>
						<p>{props.client.country}</p>
						<p>pseudo: {props.client.pseudo}</p>
						<p>type: {props.client.type}</p>
						<p>code: {props.client.code}</p>	
					</div>
					<div style={styles.actionsBox}>
					</div>
					<div style={styles.dataBox}>
						<List>
							<ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
							<ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
							<ListItem
							  primaryText="Inbox"
							  leftIcon={<ContentInbox />}
							  initiallyOpen={true}
							  primaryTogglesNestedList={true}
							  nestedItems={[
								<ListItem
								  key={1}
								  primaryText="Starred"
								  leftIcon={<ActionGrade />}
								/>,
								<ListItem
								  key={2}
								  primaryText="Sent Mail"
								  leftIcon={<ContentSend />}
								  disabled={true}
								  nestedItems={[
									<ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
								  ]}
								/>,
								<ListItem
								  key={3}
								  primaryText="Inbox"
								  leftIcon={<ContentInbox />}
								  open={false}
								  onNestedListToggle={props.handleNestedListToggle}
								  nestedItems={[
									<ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
								  ]}
								/>,
							  ]}
							/>
						</List>
					</div>
				
				</div>
            );
        }
        $TrbMap_ClientsDetails_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            //text: PropTypes.object.isRequired,
        };
        return $TrbMap_ClientsDetails_Template
    }
}
    
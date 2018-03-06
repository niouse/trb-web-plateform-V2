
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

// MATERIAL ICONS
import FlatButton from 'material-ui/FlatButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Close from 'material-ui/svg-icons/navigation/close';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

export default function SideListMui_Template() {
    return (wrappedComponent) => {
        const $SideListMui_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="side-list-mui-container" className="container" style={styles.container}>
					<div style={styles.closeBox} onClick={()=>props.closeSideList()}>
						<ArrowBack  style={styles.close} hoverColor="red"/>
						CLOSE
					</div>
					<div style={styles.searchBar}>
						<ActionSearch style={styles.iconStyles} />
						<input 
							type="text" 
							placeholder="Search" 
							style={styles.search}
							onChange={(e)=>props.filterList(e)}/>
					</div>
					<div style={styles.listBox}>
						{props.itemList[0] ? 
							props.itemList.map((x, index)=>{
							var avatar;
							return <List key={"card"+ index} style={styles.listItem}>
							<ListItem
							  primaryText={x.primaryText}
							  secondaryText={x.secondaryText}
							  onClick={()=>props.handleItemClick(x._id)}
							  leftIcon = {x.leftIcon || null}
							  //onClick =  {()=>{PubSub.publish(props.publicationName, {id : x._id})}}
							  rightIcon = {x.rightIcon || null}
							/>
						  </List> 
						  }	
						) :
						  <p>No records</p>}
					</div>
				</div>
            );
        }
        $SideListMui_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $SideListMui_Template
    }
}
    
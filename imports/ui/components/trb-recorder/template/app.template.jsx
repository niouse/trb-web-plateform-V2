
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route,  Link } from 'react-router-dom'

export default function App_Template(childs) {

	
    return (wrappedComponent) => {
        const $App_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="app-container" className="container" style={styles.container}>
					{/*<childs.Navigation
						items = {props.navItems}
						startUrl={props.startUrl}
						/>*/}
					<div 
						id="navigation-container" 
						className="container"
						style={styles.navigation}
						>
						{props.links.map((item, index)=>{
							return(
								<div 
									key={index}
									className="navigation-button"
									style={item.active ? Object.assign({}, styles.navItem, styles.active): styles.navItem}
									onTouchTap={()=>props.setRenderChild(item.name)}
								>
									{item.name}
								</div>	
							)
						})}
					</div>
					<props.childToRender 
						goToPage = {(name)=>props.setRenderChild(name)}
						/>
				</div>
            );
        }
        $App_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $App_Template
    }
}
    
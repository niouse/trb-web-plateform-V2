
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route,  Link, Switch } from 'react-router-dom'

var ReactGridLayout = require('react-grid-layout');
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import HomeToolbar from "./home.toolbar.template.jsx"

@HomeToolbar()
class $HomeToolbar{}

//import ButtonWrapper from './home.button.template.jsx'


export default function Home_Template(childs) {
    return (wrappedComponent) => {
        const $Home_Template = (props) => {
            let styles = props.styles
            let text = props.text
	
            return (
                <div id="home-container" className="container" style={styles.container}>
					<div id="home-band-image-box" style={styles.bandImageBox}>

					</div>
					
					<$HomeToolbar {...props}/>
					
					
					<div style={{position:"absolute", width : "100%"}}> 
						<ResponsiveReactGridLayout 
							className="layout" 
							layouts={props.layouts} 
							onLayoutChange={(layout)=>props.onLayoutChange(layout)}
							breakpoints={{lg: 500}}
							cols={{lg: 12}} 
							rowHeight={30} 
							useCSSTransforms={true}
							>
							
							{props.layouts.lg.map((layout, index)=>{
								
								return <div key={layout.i} style={styles.containerBox}>
									
										<childs.AppContainer 
											   key={layout.i} 
											   index={index} 
											   layout={layout}											
											   {...props}
											   />
									</div>
								
							})}
						  </ResponsiveReactGridLayout>
						</div>

				</div>
            );
        }
        $Home_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Home_Template
    }
}
    
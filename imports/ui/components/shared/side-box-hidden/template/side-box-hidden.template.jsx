
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function SideBoxHidden_Template(Drawer) {
    return (wrappedComponent) => {
        const $SideBoxHidden_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div 
					id="side-box-hidden-container" 
					style={styles.container}
					onMouseOver={()=>props.onMouseOver()} 
					onMouseOut={()=>props.onMouseOut()}
					>
					<Drawer
						  docked={true}
						  width={props.width || 50}
						  open={props.open}
						  openSecondary={props.secondary || false}
						  style={{backgroundColor : "none"}}
						   containerStyle={{backgroundColor : "none"}}
						>
						<div style={styles.content}>
							{props.children}
						</div>
					</Drawer>
				</div>
            );
        }
        $SideBoxHidden_Template.propTypes = {
            /*styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,*/
        };
        return $SideBoxHidden_Template
    }
}
    
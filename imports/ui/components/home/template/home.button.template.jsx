
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Home_Button_Template(color, hoverColor) {
    return (wrappedComponent) => {
        const $Home_Button_Template = (props) => {
            return (
                <wrappedComponent 
					color={color} 
					hoverColor={hoverColor}
					>
					
				</wrappedComponent>
            );
        }
        $Home_Button_Template.propTypes = {

        };
        return $Home_Button_Template
    }
}
    
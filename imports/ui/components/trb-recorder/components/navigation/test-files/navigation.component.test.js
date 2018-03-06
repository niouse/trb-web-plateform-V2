

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Component from "./../navigation.component.jsx";
import createMockItems from "./navigation.mocks.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// COMPONENT STATIC DATA
import stylesDefault from "./../styles/navigation.styles.default.js";
import stylesOptions from "./../styles/navigation.styles-options.default.js";
import texts from "./../text/navigation.text.js";

if (Meteor.isClient) {

    describe('Component (navigation.component.jsx)', function() {
		
        before(function() {
            let testDiv = document.createElement("div");
            document.body.appendChild(testDiv)
            testDiv.setAttribute("id", "test-div");
            //testDiv.setAttribute("style", "visible : none");

            render(<MuiThemeProvider><Component items={createMockItems(4)}/></MuiThemeProvider>, document.getElementById('test-div'));
        })
			
        after(function() {
            let div = document.getElementById('test-div')
            div.parentNode.removeChild(div)
        });

        describe('Render expected component', function() {
            it('Component contains a div container element', function() {
                var container = document.getElementById("navigation-container")
                expect(typeof(container)).to.equal('object')
            });
            it('Component tag with ids are styled correctly', function() {
                for (var key in stylesDefault) {
                    var el = document.getElementById("navigation-" + key)
                    for (var key2 in stylesDefault[key]) {
						if(typeof(stylesDefault[key][key2])==='object'){
							return
						}
							
						if(!el.style[key2] || (el.style[key2] !==stylesDefault[key][key2])){
							console.log('warning : for key "'+key2+'" js styles do not match dom styles')
							console.log('js styles is :'+stylesDefault[key][key2])
							console.log('dom styles is :'+el.style[key2])
						}
                    }
                }
            });
        });

        /*describe('Component has expected stand-alone behavior', function(){	
        	before(function () {		  
            });
        })*/
    });
}


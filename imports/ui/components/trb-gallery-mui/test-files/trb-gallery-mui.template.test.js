


import { Meteor } from 'meteor/meteor';
import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Template from "./../template/trb-gallery-mui.template.jsx";
import defaultStyles from "./../styles/trb-gallery-mui.styles.default.js";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/*import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();*/

if (Meteor.isClient) {

    describe('@Template (trb-gallery-mui.template.jsx)', function() {

        before(function() {
            TrbGalleryMui = Template()()
            wrapper = mount(
                <MuiThemeProvider>
					  <TrbGalleryMui  
							styles={{title : {color : "testColor"}}}
							text = {{title : "test title"}}
						/>
			  </MuiThemeProvider>
            );
        });

        describe('Return expected DOM tree', function() {
            it('Class name of root div tag is "container"', function() {
                expect(wrapper.first().hasClass('container')).to.be.true;
            });
            it('Has a h1 tag', function() {
                expect(wrapper.find('h1')).to.have.length(1);
            });
        });

        describe("text and styles are set correctly", function() {

            it('DOM elements ids match with default styles keys', function() {
                for (let nodeName in defaultStyles) {
                    expect(wrapper.find('#trb-gallery-mui-' + nodeName).exists()).to.be.true;
                }
            });

            it('Styles provided via props.styles are correctly applied', function() {
                expect(wrapper.find('#trb-gallery-mui-title').props().style.color).to.equal("testColor");
            });
            it('Texts provided via props.text are correctly applied', function() {
                expect(wrapper.find('#trb-gallery-mui-title').get(0).innerHTML).to.equal("test title");
            });
        });

    });

}
    
    
    
    
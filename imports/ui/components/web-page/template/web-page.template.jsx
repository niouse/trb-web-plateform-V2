
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function WebPage_Template() {
    return (wrappedComponent) => {
        const $WebPage_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="web-page-container" className="container" style={styles.container}>
					<iframe src="http://www.groupecb.fr/" width="100%" height="100%"/>
				</div>
            );
        }
        $WebPage_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $WebPage_Template
    }
}
    
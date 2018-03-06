
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

// EXTERNAL LIBS
import d3 from 'd3';

export default function TabHover_Api(_optional) {
    return (WrappedComponent) => {
        class $TabHover_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            componentDidMount() {
				document.getElementById(this.props.id).style["background-image"]=this.props.tabUrl
					
				d3.select('#'+this.props.id).transition().duration(300).ease(d3.easeLinear)
					.style("background-size", "80% 80%")
				
			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            changeIn(id) {
				//console.log(id)
				//document.getElementById(this.props.id).style['background-image']= "url('comon/trbTab.png')";

				d3.select('#'+id).transition().duration(200).ease(d3.easeLinear)
					.style("background-size", "90% 90%")
				document.getElementById(this.props.nameId).style.color = this.props.stylesOptions.theme.colors.primary
			  }

			 changeOut(id) {
				 //document.getElementById(this.props.id).style['background-image']= "url('comon/trbTab2.png')";
				 d3.select('#'+id).transition()
					 .style("background-size", "80% 80%")
					.duration(100); 
				 document.getElementById(this.props.nameId).style.color = this.props.stylesOptions.theme.colors.secondary
			  }

            render() {
                return <WrappedComponent
				{...this.props}
				onMouseEnter={()=>this.changeIn(this.props.id)} 
				onMouseLeave={()=>this.changeOut(this.props.id)}
				/>
            }
        }
        $TabHover_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TabHover_Api
    }
}
    
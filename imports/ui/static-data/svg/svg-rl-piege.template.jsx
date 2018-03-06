

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function SvgRlPiege(_optional) {
    return (WrappedComponent) => {
        class $SvgRlPiege extends Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            componentDidMount() {

			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}
			mouseOver(e){
				if(this.props.hoverColor){
					e.currentTarget.childNodes[0].childNodes[0].style.fill = this.props.hoverColor
					//document.getElementById("path2987").attr('fill', this.props.hoverColor) 
				}
			}
			
			mouseOut(e){
				if(this.props.color){
					e.currentTarget.childNodes[0].childNodes[0].style.fill = this.props.color
				}
			}

            render() {
                return  <svg id="svg2" viewBox="0 0 500 500" version="1.1" onMouseOver={(e)=>this.mouseOver(e)} onMouseOut={(e)=>this.mouseOut(e)}>
					 <g id="layer1">
					  <path id="path2987" strokeLinejoin="miter" d="M 330.875,46 330.28125,46.96875 300.28125,96.96875 300,97.4375 300,98 300,299.1875 C 300,327.0747 281.05808,346 253.78125,346 L 52,346 50,346 50,348 50,376 50,378 50,418 50,420 50,448 50,450 52,450 253.3125,450 C 333.18823,450 403.70923,379.1691 404,297.71875 L 404,98 404,97.4375 403.71875,96.96875 373.71875,46.96875 373.125,46 372,46 363.625,46 340.375,46 332,46 330.875,46 z M 333.125,50 339.5625,50 330.03125,97.59375 330,97.8125 330,98 330,298 C 330,316.10863 319.71395,335.72355 304.71875,350.71875 289.72355,365.71395 270.10863,376 252,376 L 54,376 54,350 253.78125,350 C 282.94788,350 303.89432,328.92555 304,299.1875 L 304,98.5625 333.125,50 z M 343.65625,50 360.34375,50 370,98.25 370,298 C 370,326.79645 355.00878,356.36622 332.6875,378.6875 310.36622,401.00878 280.79642,416.03961 252,416 L 243.90625,416 243.90625,380 252,380 C 271.60373,380 291.98579,369.13921 307.5625,353.5625 323.13921,337.98579 334,317.60373 334,298 L 334,98.25 343.65625,50 z M 364.4375,50 370.875,50 400,98.5625 400,297.71875 C 400,376.84466 330.81598,446.10591 253.3125,446 L 54,446 54,420 252,420 C 282.17624,420 312.5957,404.4668 335.53125,381.53125 358.4668,358.5957 374,328.17624 374,298 L 374,98 374,97.8125 373.96875,97.59375 364.4375,50 z" stroke="none" strokeLinecap="butt" strokeWidth="1px" fill={this.props.color || "#000"}/>
					 </g>
				</svg>
            }
        }
        $SvgRlPiege.propTypes = {
            //styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $SvgRlPiege
    }
}
    


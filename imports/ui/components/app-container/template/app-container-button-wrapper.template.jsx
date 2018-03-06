

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function AppContainer_ButtonWrapper(_optional) {
    return (WrappedComponent) => {
        class $AppContainer_ButtonWrapper extends Component {
            constructor(props) {
                super(props);
                this.state = {
					wrappedComponent : props.children
				}
				//console.log(props.children)
				
				this.attr={
					color : props.color ||"grey",
					fill : props.fill ||"none"
				}
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
					let els = e.currentTarget.childNodes
					els[0].style.stroke = this.props.hoverBoxStrokeColor || "red"
					els[0].style.fill = this.props.hoverBoxFill || "white"
					els[1].style.stroke = this.props.hoverColor ||"red"
					els[1].style.fill = this.props.hoverFill ||"white"
				}
			}
			
			mouseOut(e){
				if(this.props.color){
					let els = e.currentTarget.childNodes
					els[0].style.stroke = this.props.boxStrokeColor ||"grey"
					els[0].style.fill = this.props.boxFill || "none"
					els[1].style.stroke = this.props.color ||"grey"
					els[1].style.fill = this.props.fill ||"grey"
				}
			}

            render() {
				const WrappedComponent = this.props.svgIcon
                return  <div style={{width : "100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
				<svg id="svg2" height={this.props.width || 90} width={this.props.width || 90} viewBox="0 0 500 500" onMouseOver={(e)=>this.mouseOver(e)} onMouseOut={(e)=>this.mouseOut(e)}>
					 {this.props.showBox ?
						<path id="contour" d="M 30,30 C 40.000001,20.000002 176.36425,9.9999999 249.99999,9.9999996 323.63573,9.9999993 459.99998,19.999999 470,30 480,39.999981 489.99998,176.36425 489.99998,249.99999 489.99998,323.63573 480.00002,460.00002 470,470 459.99998,479.99998 323.63573,489.99998 249.99999,489.99998 176.36425,489.99998 39.999981,480 30,470 19.999999,459.99998 9.9999993,323.63573 9.9999996,249.99999 9.9999999,176.36425 19.999999,39.999998 30,30 z" fill={this.props.boxFill || "none"} stroke={this.props.boxStrokeColor || "#000"} strokeWidth="20px"/> :
					   <path />}
					<WrappedComponent {...this.attr}/>
					{/*React.cloneElement(this.state.wrappedComponent, {...this.attr})*/}
					
				</svg>
				</div>
            }
        }
        $AppContainer_ButtonWrapper.propTypes = {
            //styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $AppContainer_ButtonWrapper
    }
}
    


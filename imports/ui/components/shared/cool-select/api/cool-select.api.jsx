
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

// EXTERNAL LIBS
import '/node_modules/carousel-3d/bower_components/jquery/dist/jquery.js'
import '/node_modules/carousel-3d/bower_components/javascript-detect-element-resize/jquery.resize.js'
import '/node_modules/carousel-3d/bower_components/waitForImages/dist/jquery.waitforimages.js'
import '/node_modules/carousel-3d/bower_components/modernizr/modernizr.js'
import '/node_modules/carousel-3d/dist/jquery.carousel-3d.js'



export default function CoolSelect_Api(_optional) {
    return (WrappedComponent) => {
        class $CoolSelect_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {}
				this.nbItems = props.items.length
				this.actualAppIndex = 0
            }
            componentDidMount(){
				// METTRE L INITIALISATION EN COMMENTAIRE DANS /node_modules/carousel-3d/dist/jquery.carousel-3d.js ligne 183
				$('[data-carousel-3d]').Carousel3d();
				let _prevButton = $('<div data-prev-button></div>')[0];
				$('#point0').css("background-color", this.props.stylesOptions.theme.colors.primary)
			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            rotate(event, index, pointId){
				$('#myCarousel').Carousel3d('rotate', index);
				this.actualAppIndex = index;
				$('.point').css("background-color", "transparent")
				$('#'+pointId).css("background-color", this.props.stylesOptions.theme.colors.primary)
			}

			nextApp(e){
				$('#myCarousel').Carousel3d('next');
				$('.point').css("background-color", "transparent")

				if(this.actualAppIndex===this.nbItems-1){
					this.actualAppIndex = 0
				}
				else this.actualAppIndex = this.actualAppIndex+1

				let pointId = "point"+this.actualAppIndex	
				$('#'+pointId).css("background-color", this.props.stylesOptions.theme.colors.primary)

			}

			prevApp(e){
				$('#myCarousel').Carousel3d('prev');
				$('.point').css("background-color", "transparent")

				if(this.actualAppIndex===0){
					this.actualAppIndex = this.nbItems-1
				}
				else this.actualAppIndex = this.actualAppIndex-1

				let pointId = "point"+this.actualAppIndex
				$('#'+pointId).css("background-color", this.props.stylesOptions.theme.colors.primary)
			}

            render() {
                return <WrappedComponent
				{...this.props}
				rotate={(event, index, pointId)=>this.rotate(event, index, pointId)}
				nextApp={(e)=>this.nextApp(e)}
				prevApp={(e)=>this.prevApp(e)}
				/>
            }
        }
        $CoolSelect_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $CoolSelect_Api
    }
}
    
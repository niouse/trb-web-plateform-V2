
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function SimpleMap_Api(GoogleMapsLoader) {
    return (WrappedComponent) => {
        class $SimpleMap_Api extends Component {
            constructor(props) {
                super(props);
				this.map;
				this.marker = [];
                this.state = {
					message : "",
					showMarkersOptions : false,
					clients : props.clients,
					iconList : props.iconList,
				}
            }
            componentDidMount() {
				this.loadMap()
			}
            componentWillReceiveProps(newProps) {
			}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            loadMap(){
				GoogleMapsLoader.KEY = 'AIzaSyBYpDxD02s53whM6m-NCZwkfWH8shEponY';
				GoogleMapsLoader.load((google)=>{
					this.map = new google.maps.Map(document.getElementById('map'),{
					center: {lat: 45.760329, lng: 4.825506},
					zoom: 5,
				  });
				  this.loadItems(google);
				});
			}
		
			loadItems(google){
				//if(this.state.events.length === this.marker['event'].length){return}
				this.marker['items']=[]
				if (!this.props.items || this.props.items.length ===0){return}

				for (var i = 0; i < this.props.items.length; i++) {
					var item = this.props.items[i];
					var icon;
					if (item.iconInfos){
						icon = {
							  url:  item.iconInfos.url || '/trb-map/trbCircle.png',
							  size: new google.maps.Size(150, 150),
							  origin: new google.maps.Point(item.iconInfos.origin[0] || 0, item.iconInfos.origin[1] || 0),
							  anchor: new google.maps.Point(item.iconInfos.anchor[0] || 17, item.iconInfos.anchor[1] || 34),
							  scaledSize: new google.maps.Size(item.iconInfos.scaledSize[0] || 30, item.iconInfos.scaledSize[1] || 30),
							  name : item.iconInfos.name
					  };
					}
					else {
						icon = null
					}
						
					var marker = new google.maps.Marker({
					 // animation: google.maps.Animation.DROP,  
					  position: {lat: item.lat, lng: item.lng},
					  map: this.map, 
					  icon : icon,
					  title: item.name,
					  zIndex: 3,
					});

					this.marker.push(marker)
					//this.addToMarker(marker, item)
					  }
			}

			getMapIcon(google, iconInfos){

			}

			toggleStateBool(key){
				this.setState({
					[key] : !this.state[key]
				})
			}

			showMessage(message){
				this.setState({
					message : message,
					showMessage : true
				})
			}

			showMarkersOptions(){
				this.setState({
					showMarkersOptions : true
				})
			}

			/*addEventMarker(marker, obj){
				marker.addListener('click', ()=>{
					this.props.showEventDetails(obj)
				});
				this.marker['events'].push(marker);
			}*/

			toggleMarker(e, value){
				//value = 
				this.marker.forEach((x)=> {
					if (x.icon.name === value){
						if(x.map){
							x.setMap(null)
						} 
						else {
							x.setMap(this.map)
						}
					}
				})

				var iconList = this.state.iconList
				var isDisplayed = iconList.filter((x)=>{
					return x.name == value
				})[0].displayed

				iconList.filter((x)=>{
					return x.name == value
				})[0].displayed = !isDisplayed

				this.setState({
					iconList : iconList
				})
			}

            render() {
                return <WrappedComponent
				{...this.props}
				showMarkersOptions={this.state.showMarkersOptions}
				toggleStateBool={(key)=>this.toggleStateBool(key)}
				toggleMarker={(e, value)=>this.toggleMarker(e, value)}
				/>
            }
        }
        $SimpleMap_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $SimpleMap_Api
    }
}
    
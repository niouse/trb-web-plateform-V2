
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function ToolTipClocks_Api(_optional) {
    return (WrappedComponent) => {
        class $ToolTipClocks_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					timeStep : 0,
					time : "",
				}
				this.timer
            }
            componentDidMount() {
				this.startTime()
			}
            componentWillReceiveProps(newProps) {
				this.worldClockZone();
			}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {
				clearTimeout(this.timer)
			}

            startTime(){
				this.timer = window.setTimeout(()=>{
					this.setState({time : this.worldClock(this.props.location.gmt)})
					this.startTime()
				}, 1000)
			}
			
			worldClock(zone){
				var dst = 0
				var time = new Date()
				var gmtMS = time.getTime() + (time.getTimezoneOffset() * 60000)
				var gmtTime = new Date(gmtMS)
				var day = gmtTime.getDate()
				var month = gmtTime.getMonth()
				var year = gmtTime.getYear()
				if(year < 1000){
				year += 1900
				}
				var monthArray = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aôut", 
								"Septembre", "Octobre", "Novembre", "Décembre")
				var monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
				if (year%4 == 0){
				monthDays = new Array("31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
				}
				if(year%100 == 0 && year%400 != 0){
				monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
				}

				var hr = gmtTime.getHours() + zone
				var min = gmtTime.getMinutes()
				var sec = gmtTime.getSeconds()

				if (hr >= 24){
				hr = hr-24
				day -= -1
				}
				if (hr < 0){
				hr -= -24
				day -= 1
				}
				if (hr < 10){
				hr = " " + hr
				}
				if (min < 10){
				min = "0" + min
				}
				if (sec < 10){
				sec = "0" + sec
				}
				if (day <= 0){
				if (month == 0){
					month = 11
					year -= 1
					}
					else{
					month = month -1
					}
				day = monthDays[month]
				}
				if(day > monthDays[month]){
					day = 1
					if(month == 11){
					month = 0
					year -= -1
					}
					else{
					month -= -1
					}
				}
				if (dst == 1){
					hr -= -1
					if (hr >= 24){
					hr = hr-24
					day -= -1
					}
					if (hr < 10){
					hr = " " + hr
					}
					if(day > monthDays[month]){
					day = 1
					if(month == 11){
					month = 0
					year -= -1
					}
					else{
					month -= -1
					}
					}
				return monthArray[month] + " " + day + ", " + year + "<br>" + hr + ":" + min + ":" + sec + " DST"
				}
				else{
				return hr + ":" + min + ":" + sec
				}
			}

			worldClockZone(){
				this.setState({
					time : this.worldClock(this.props.location.gmt)	
				})
			}
			
			goToFlight(code){
				url = `https://www.google.fr/flights/#search;f=LYS,XYD;t=${code};d=2017-03-18;r=2017-03-22`;
				window.open(url,'_blank');
			}

            render() {
                return <WrappedComponent
				{...this.props}
				goToFlight={(code)=>this.goToFlight(code)}
				time={this.state.time}
				/>
            }
        }
        $ToolTipClocks_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $ToolTipClocks_Api
    }
}
    
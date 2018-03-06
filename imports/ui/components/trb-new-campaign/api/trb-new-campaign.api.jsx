
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';
let options = {
						chart: {
							type: 'scatter',
							backgroundColor : "none",
							plotBorderWidth : 1,
							plotBorderColor : "white",
							margin: [70, 50, 60, 80],
							events: {
								click: function (e) {
									// find the clicked values and the series
									var x = Math.round(e.xAxis[0].value),
										y = Math.round(e.yAxis[0].value),
										series = this.series[0];

									// Add it
									series.addPoint([x, y]);

								}
							}
						},
						title: {
							text: 'Profil d\'usure'
						},
						/*subtitle: {
							text: 'Click the plot area to add a point. Click a point to remove it.'
						},*/
						xAxis: {
							gridLineWidth: 1,
							minPadding: 0.2,
							maxPadding: 0.2,
							maxZoom: 60
						},
						yAxis: {
							title: {
								text: 'Distance (mm)'
							},
							minPadding: 0.2,
							maxPadding: 0.2,
							maxZoom: 60,
							plotLines: [{
								value: 0,
								width: 1,
								color: '#808080'
							}]
						},
						legend: {
							enabled: false
						},
						exporting: {
							enabled: false
						},
						plotOptions: {
							boxPlot : {
								color : "white"
							},
							series: {
								lineWidth: 1,
								point: {
									events: {
										'click': function () {
											if (this.series.data.length > 1) {
												this.remove();
											}
										}
									}
								}
							}
						},
						series: [
							{
							color:"red",
							data: [[-30, 100]]
						},
						{
							color:"blue",
							data: [[-25, 100], [-12, 40], [0, 35], [12, 40], [25, 100]]
						}]
					}
export default function TrbNewCampaign_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbNewCampaign_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {}
				this.chart=false
            }
            componentDidMount() {
					
			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {
			
			}
            componentDidUpdate() {}
            componentWillUnmount() {}

            showChart(id) {
					this.chart = Highcharts.chart(id, options) 
            }

            render() {
                return <WrappedComponent
				{...this.props}
				showChart={(id)=>this.showChart(id)}
				/>
            }
        }
        $TrbNewCampaign_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbNewCampaign_Api
    }
}
    
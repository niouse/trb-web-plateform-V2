import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function TrbLabRecorder_Api(FlatButton) {
    return (WrappedComponent) => {
        class $TrbLabRecorder_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					isOnRecord : props.recorder.isOnRecord,
					showRecorderEdit : false,
					showAlert : false,
					text : props.text,
					alertOptions : "justClose",
				}
            }
            componentDidMount() {
				let options = {
					chartId : this.props.recorder._id,
					operation : "addSerie",
					value : [this.props.recorder.serie]
				}
				//console.log(this.props.recorder.serie)
				this.props.updateChartNext(options)
			}
			
            componentWillReceiveProps(newProps) {
				let recorderChanged = newProps.recorder.name !== this.props.recorder.name
				let statusChanged = newProps.recorder.isOnRecord !== this.props.recorder.isOnRecord
				let serieChanged = newProps.recorder.serie.data.length !== this.props.recorder.serie.data.length
				let serieReset = newProps.recorder.serie.data.length === 0
				
				
				/*this.setState({
					text : newProps.text
				})*/

				
				if(recorderChanged){
					let options = {
						chartId : newProps.recorder._id,
						operation : "updateSerie",
						value : [newProps.recorder.serie]
					}
					this.props.updateChartNext(options)
					this.setState({
						isOnRecord : newProps.recorder.isOnRecord,
					})
				}
				
				if(!recorderChanged && statusChanged){
					this.setState({
						isOnRecord : newProps.recorder.isOnRecord,
					})
				}
				
				if(!recorderChanged && serieChanged && !serieReset){
					let n = newProps.recorder.serie.data.length
					let n2 = this.props.recorder.serie.data.length
					if(n<n2){
						console.log("unexpected behaviour")
					}
					else{
						let options = {
							chartId : newProps.recorder._id,
							operation : "addPoints",
							value : {
								index : 0,
								value : newProps.recorder.serie.data.slice(-1)
							}
						}
						//console.log(newProps.recorder.serie.data.slice(-1))
						this.props.updateChartNext(options)
					}
				}
				
				if(serieReset){
					let options = {
						chartId : newProps.recorder._id,
						operation : "updateSerie",
						value : [newProps.recorder.serie]
					}
					this.props.updateChartNext(options)
				}
			}
			
			
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            startRecord(id){
				if(this.state.isOnRecord){
					this.changeText("messages", 0)
					this.setState({
						alertOptions : "justClose",
						showAlert : true
					})
				}
				else {
					let name = this.props.recorder.serie.name
					if(this.props.seriesList.find((x)=>{return x.name===name})!==undefined){
						let text = Object.assign({}, this.props.text)
						text.messages=text.messages[3]+" "+name
						this.setState({
							alertOptions : "justClose",
							showAlert : true,
							text : text
						})
						return
					}
					this.props.updateRecorderStatus(this.props.recorder._id, true,  (err, res)=>{
						if(err){
							alert("Something went wrong when update recorder status. Try to reload page or contact administrator if problem persist")
						}
						else{
							this.setState({
								isOnRecord : true
							})
						}
					})
					
					this.props.resetRecorderSerie(this.props.recorder._id, (err, res)=>{
						if(err){
							alert(err)
						}
					})
		
					
				}
			}
			
			stopRecord(){
				//console.log(typeof(this.props.recorder.serie.maxValue))
				var serie = Object.assign({}, this.props.recorder.serie)
				//console.log(serie.data.lenght===0)
				if (serie.data.length===0){
					serie.data = [[0,0]]
				}
				this.props.createSerie(serie, (err, res)=>{
					if(err){
						console.log(err)
						alert("Something went wrong when update recorder status. Try to reload page or contact administrator if problem persist")
					}
					else{
						alert("Serie was saved")
					}
				})
				
				this.props.resetRecorderSerie(this.props.recorder._id, (err, res)=>{
					if(err){
						alert(err)
					}
				})
	
				this.props.updateRecorderStatus(this.props.recorder._id, false,  (err, res)=>{
					if(err){
						alert("Something went wrong when update recorder status. Try to reload page or contact administrator if problem persist")
					}
					else{
						this.setState({
							isOnRecord : false
						})
					}
				})
			}
			
			handleStopQuery(){
				if(!this.state.isOnRecord){
					this.changeText("messages", 2)
					this.setState({
						alertOptions : "justClose",
						showAlert : true
					})
				}
				else {
					this.changeText("messages", 1)
					this.setState({
						alertOptions : "started",
						showAlert : true,
					})
				}
			}
			
			toggleRecorderEdit(){
				this.setState({
					showRecorderEdit : !this.state.showRecorderEdit
				})
			}
			
			convertTime(time){
				var date = new Date(time);
				var result = (date.getHours()-1)+"hr, "+date.getMinutes()+"min";
				return result
			}
			
			toggleStateBool(key){
				this.setState({
					[key] : !this.state[key]
				})
			}
			
			getAlertOptions(options){
				if(this.state.alertOptions==="justClose"){
					const actions=[
					  <FlatButton
						label={this.props.text.close}
						primary={true}
						onTouchTap={()=>this.toggleStateBool("showAlert")}
					  />,
					]
					return actions
				}
				if(this.state.alertOptions==="started"){
					const actions=[
					  <FlatButton
						label={this.props.text.yes}
						primary={true}
						onTouchTap={()=>{this.stopRecord(); this.toggleStateBool("showAlert")}}
					  />,
					  <FlatButton
						label={this.props.text.no}
						primary={true}
						onTouchTap={()=>this.toggleStateBool("showAlert")}
					  />,
					]
					return actions
				}
			}
			
			changeText(keyToChange, index){
				let text = Object.assign({}, this.props.text)
				for (var key in text){
					if(key===keyToChange){
						text[key]=text[key][index]
					}
				}
				this.setState({
					text : text
				})
			}

            render() {
                return <WrappedComponent
				{...this.props}
				text={this.state.text}
				startRecord={()=>this.startRecord()}
				stopRecord={()=>this.handleStopQuery()}
				isOnRecord={this.state.isOnRecord}
				convertTime={this.convertTime}
				showRecorderEdit={this.state.showRecorderEdit}
				showAlert={this.state.showAlert}
				toggleStateBool={(key)=>this.toggleStateBool(key)}
				message={this.state.message}
				alertOptions={this.getAlertOptions(this.state.alertOptions)}
				/>
            }
        }
        $TrbLabRecorder_Api.propTypes = {
            styles: PropTypes.object.isRequired,
			text : PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbLabRecorder_Api
    }
}
    
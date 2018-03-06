
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function TrbLabRecorderEdit_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbLabRecorderEdit_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					serieName : props.serie.name,
					numDep : props.serie.numDep,
					codeProd : props.serie.codeProd,
					message : " ",
					messageStyle : props.styles.message,
				}
            }
            componentDidMount() {
				document.getElementById('trb-lab-recorder-edit-container').style.display="none"
			}
            componentWillReceiveProps(newProps) {
				if(newProps.show){
					document.getElementById('trb-lab-recorder-edit-container').style.display="inline"
				}else{
					document.getElementById('trb-lab-recorder-edit-container').style.display="none"
				}
				
				if(newProps.serie.name !== this.props.serie.name || newProps.serie.numDep !== this.props.serie.numDep || newProps.serie.codeProd !== this.props.serie.codeProd){
					console.log('hey')
					this.setState({
						serieName : newProps.serie.name,
						numDep : newProps.serie.numDep,
						codeProd : newProps.serie.codeProd,
					})
				}
				/*this.setState({
					serieName : newProps.serie.name,
					numDep : newProps.serie.numDep,
					codeProd : newProps.serie.codeProd,
				})*/
			}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}
			
			toggleStateBool(key){
				this.setState({
					[key] : !this.state[key]
				})
			}

            saveChanges() {
				//console.log(this.state.serieName)
				//console.log(this.props.seriesList.find((x)=>{console.log(x.name); return x.name===this.state.serieName}))
				
				if(this.props.seriesList.find((x)=>{return x.name===this.state.serieName})!==undefined){
					let text = Object.assign({}, this.props.text)
					this.setState({
						messageStyle : Object.assign({}, this.props.styles.message, this.props.styles.message.error)
					})
					this.showMessage(this.props.text.saveAlready + " " + this.state.serieName)
					return
				}
				
  				let options = {
					serie : {
						name : this.state.serieName,
						codeProd : this.state.codeProd,
						numDep : this.state.numDep,
					}
				}
				this.props.updateRecorderSerie(this.props.recorder._id, options, (err, res)=>{
					if(err){
						this.setState({
							messageStyle : Object.assign({}, this.props.styles.message, this.props.styles.message.error)
						})
						this.showMessage(this.props.text.saveFailure)
					}
					else {
						this.setState({
							messageStyle : Object.assign({}, this.props.styles.message, this.props.styles.message.success)
						})
						this.showMessage(this.props.text.saveSuccess)
					}
				})

				
            }
			
			showMessage(message){
				this.setState({
					message : message,
					showMessage : true
				})
				setTimeout(()=>this.setState({
					message : " "
				}), 5000)
			}

			handleTextChange(event, value, key){
				
				this.setState({[key] : value}, ()=>{
					this.setState({
						serieName : this.state.codeProd+'_'+this.state.numDep
					})
				})
			}
			
            render() {
                return <WrappedComponent
				{...this.props}
				saveChanges={()=>this.saveChanges()}
				handleTextChange={(e, value, key)=>this.handleTextChange(e, value, key)}
				numDep={this.state.numDep}
				codeProd={this.state.codeProd}
				name={this.state.serieName}
				message={this.state.message}
				messageStyle={this.state.messageStyle}
				/>
            }
        }
        $TrbLabRecorderEdit_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbLabRecorderEdit_Api
    }
}
    
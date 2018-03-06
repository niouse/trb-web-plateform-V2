
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function ImageCropper_Api(Cropper) {
    return (WrappedComponent) => {
        class $ImageCropper_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					notCroppable:true,
					photo : false,
					smallPhoto : false,
					message : "",
					messageStyle : props.styles.snackbar,
					access : "",
					photoType : "",
					industry : "",
					client : "",
					solution : "",
					tags : "",
					description : "",
					openDrawerFilters :false,
					openMessage : false
					
				}
				this.cropper;
				this.messageStyle=Object.assign({}, this.props.styles.snackbar.body)
            }
            componentDidMount() {
				console.log(this.props)
				var fileInput = document.querySelector('#image-cropper-photoInput');
				fileInput.addEventListener('change', ()=>this.loadCropper(fileInput));
			}
            componentWillReceiveProps(newProps) {}
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
			
			onMenuChange(event, index, value, key){
			  this.setState({[key]: value});
			}

			onTextChange(event, value, key){
			  this.setState({[key]: value});
			}
			
			showMessage(message, type){

				if(type==='error'){ 
					const newStyle=this.props.styles.snackbar
					newStyle.attr.bodyStyle = Object.assign({}, this.props.styles.snackbar.attr.bodyStyle, this.props.styles.snackbar.attr.bodyStyle.error)
					 this.setState({
						 message : message.reason,
						 messageStyle : newStyle,
					  }, ()=>{
						 this.setState({openMessage : true})
					 });
				 }
				if(type==='warning'){
					const newStyle=this.props.styles.snackbar
					newStyle.attr.bodyStyle = Object.assign({}, this.props.styles.snackbar.attr.bodyStyle, this.props.styles.snackbar.attr.bodyStyle.warning)
					 this.setState({
						 message : message,
						  messageStyle : newStyle,
					  }, ()=>{
						 this.setState({openMessage : true})
					 });
				 }
				 if(type==='success'){
					 const newStyle=this.props.styles.snackbar
					newStyle.attr.bodyStyle = Object.assign({}, this.props.styles.snackbar.attr.bodyStyle, this.props.styles.snackbar.attr.bodyStyle.success)
					 this.setState({
						 message : message,
						 messageStyle : newStyle,
					 }, ()=>{
						 this.setState({openMessage : true})
					 })
				 };	
				
				setTimeout(()=>{ 
					 this.setState({openMessage : false})
				 }, 4000);
				
			}
			
			loadCropper(fileInput){
				if (this.cropper){
					this.cropper.destroy()
				}
				var reader = new FileReader();
				reader.onload = (e)=>{
					this.setState({notCroppable:false})
					$('#image-cropper-imageToCrop').attr('src', e.target.result);
					var image = document.getElementById('image-cropper-imageToCrop');		
					this.cropper = new Cropper(image, {
					  aspectRatio: 4 / 3,
					  viewMode : 1,
					  crop: (e)=>{
						  //console.log(e)
					  }
					});
				}
				reader.readAsDataURL(fileInput.files[0]);
			}

            selectPhoto() {
                document.getElementById('image-cropper-photoInput').click()
            }

			cropperAction(action, param){
				this.cropper[action](param)
			}

			clearCropper(){
				this.cropper.destroy()
				this.cropper=false
				$('#image-cropper-imageToCrop').attr('src', "./app/trbLogo2.png");
				let input = $('#image-cropper-photoInput')
				input.replaceWith(input.val('').clone(true));
				var fileInput = document.querySelector('#image-cropper-photoInput');
				fileInput.addEventListener('change', ()=>this.loadCropper(fileInput));
				
			}
			
			saveImage(e){
				if (!this.state.notCroppable){
					this.showMessage(this.props.text.notCroppableWarning, 'warning')
					return
				}

				if (!this.cropper){
					this.showMessage(this.props.text.noPictureWarning, 'warning')
					return
				}

				 var options = {
					createdBy : Meteor.userId(),
					createdAt : new  Date(),
					access : this.state.access || "TRB only",
					photoType : this.state.photoType,
					industry : this.state.industry,
					client : this.state.client,
					solution : this.state.solution,
					tags : this.state.tags,
					description : this.state.description,
					photo : this.state.photo,
					smallPhoto : this.state.smallPhoto,
				 };
				this.props.createPicture(options, (err, res)=>{
					if(err){
						if(err.reason ===undefined){
							this.showMessage(err, "error")
						}
						else{
							this.showMessage(err.reason, "error")
						}

					}
					else{
						this.showMessage(this.props.text.successMessage, "success")
					}
				})

			 }

			crop(){
				//console.log('cropping image')
				var canvas=this.cropper.getCroppedCanvas({
				  width: 640,
				  height: 480,
				});
				var smallCanvas=this.cropper.getCroppedCanvas({
				  width: 64,
				  height: 48,
				});
				
				this.cropper.destroy()
				$('#image-cropper-imageToCrop').attr('src', canvas.toDataURL());
				this.setState({
					notCroppable:true,
					photo : canvas.toDataURL(),
					smallPhoto : smallCanvas.toDataURL(),
				})
			}
			

            render() {
                return <WrappedComponent
				{...this.props}
				toggleStateBool={(key)=>this.toggleStateBool(key)}
				onTextChange={(event, value, key)=>this.onTextChange(event, value, key)}
				onMenuChange={(event, index, value, key)=>this.onMenuChange(event, index, value, key)}
				selectPhoto={()=>this.selectPhoto()}
				saveImage={()=>this.saveImage()}
				crop={()=>this.crop()}
				clearCropper={()=>this.clearCropper()}
				cropperAction={(action, param)=>this.cropperAction(action, param)}
				notCroppable={this.state.notCroppable}
				photo = {this.state.photo}
				message={this.state.message}
				access={this.state.access}
				photoType={this.state.photoType}
				industry={this.state.industry}
				client={this.state.client}
				solution={this.state.solution}
				tags={this.state.tags}
				description={this.state.description}
				openDrawerFilters={this.state.openDrawerFilters}
				openMessage={this.state.openMessage}
				messageStyle={this.state.messageStyle}
			/>
            }
        }
        $ImageCropper_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $ImageCropper_Api
    }
}
    
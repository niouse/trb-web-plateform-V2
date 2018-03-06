
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function TrbGalleryMui_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbGalleryMui_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					picturesList : props.picturesList,
					access : "-",
					photoType : "-",
					industry : "-",
					client : "-",
					solution : "-",
					openDrawerFilters :false,
					openDrawerActions :false,
				}
				this.actualPos=0
				this.keyList=["access", "photoType", "industry", "client", "solution"]
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {
				if(!newProps.picture){
					this.setState({
						picturesList : (newProps.picturesList)
					})
				}
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

            onMenuChange(event, index, value, key){
			  this.setState({[key]: value}, ()=>{
				   this.filterList(key, value)
			  });
			 
			}
			
			/*filterList(key, value){
				document.body.style.cursor = "wait"		
				
				var newList=this.state.picturesList.filter((picture, index)=>{
					if(value==="-") return true
					else return picture[key]===value
				})
				
				this.setState({
					picturesList : newList
				})
				document.body.style.cursor = "default"
			}*/
			
			filterList(key, value){
				document.body.style.cursor = "wait"		
				var newList=this.props.picturesList
				
				
				/*var newList=this.props.picturesList.filter((picture, index)=>{
					if(value==="-") return true
					else return picture[key]===value
				})*/

				for (var i=0; i<this.keyList.length; i++){
					newList=newList.filter((picture, index)=>{
						let key2=this.keyList[i]
						if(this.state[key2]==="-") return true
						else return picture[key2]===this.state[key2]
					})
				}
				
				
				
				this.setState({
					picturesList : newList
				})
				document.body.style.cursor = "default"
			}
			
			
			
			onImageHover(){
				document.getElementById('trb-gallery-mui-infosBox').style.display = "flex"
			}
			
			onImageOut(){
				document.getElementById('trb-gallery-mui-infosBox').style.display = "none"
			}
			
			goLeft(){
				console.log(this.actualPos)
				console.log(this.actualPos+'px')
				el = document.getElementById('trb-gallery-mui-smallImagesBox')
				this.actualPos = this.actualPos - 84
				el.style.left = this.actualPos+'px'
			}
			
			goRight(){
				if(this.actualPos ===0){return}
				var el = document.getElementById('trb-gallery-mui-smallImagesBox')
				this.actualPos = this.actualPos + 84
				el.style.left = this.actualPos+'px'
			}
			
			changeSrc(e, url){
				e.currentTarget.firstChild.src=url
			}
			
			refreshList(){
				this.setState({
					picturesList : this.props.picturesList,
					access : "-",
					photoType : "-",
					industry : "-",
					client : "-",
					solution : "-",
				})
			}
			

            render() {
                return <WrappedComponent
				{...this.props}
				toggleStateBool={(key)=>this.toggleStateBool(key)}
				picturesList={this.state.picturesList}
				onMenuChange={(event, index, value, key)=>this.onMenuChange(event, index, value, key)}
				access={this.state.access}
				photoType={this.state.photoType}
				industry={this.state.industry}
				client={this.state.client}
				solution={this.state.solution}
				onImageHover={this.onImageHover}
				onImageOut={this.onImageOut}
				goLeft={()=>this.goLeft()}
				goRight={()=>this.goRight()}
				changeSrc={this.changeSrc}
				refreshList={()=>this.refreshList()}
				keyList={this.keyList}
				resultsNumber={this.state.picturesList.length}
				openDrawerFilters={this.state.openDrawerFilters}
				openDrawerActions={this.state.openDrawerActions}
				/>
            }
        }
        $TrbGalleryMui_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbGalleryMui_Api
    }
}
    

import React, {Component} from 'react';
import PropTypes from 'prop-types';


var async = require("async");

const styles = {
	container : {
		width :'100%',
		maxWidth : "1280px",
		height : '100%',
		margin : "45px auto 0 auto",
		backgroundColor: "#737d88",
		//backgroundImage : "url('comon/trbFond.png')",
        //backgroundSize : "100% 100%",
	},
	header : {
		display : "flex",
		width : "100%",
		//border : "1px solid black"
		//flexWrap: "wrap",
	},
	toolMenu : {
		display : "flex",
		flex : 1,
		height : "100%",
		flexWrap: "wrap",
		justifyContent : "space-around",
		margin : "10px 20px 0px 10px",
		//border : "1px solid red"
	},
	toolButton : {
		//marginRight: 20,
	},
	title : {
		display : "flex",
		alignItems : "center",
		color : "#00bcd4",
		fontSize : "40px",
		fontWeight : 900,
		margin : 0,
		padding : 0,
		fontFamily : 'Play',
		//border : "1px solid green"
	},
	viewBox : {
		width : "100%",
		height : "100%"
	},
	refresh: {
		display: 'inline-block',
		position: 'relative',
	  },
	test : {
		border : "1px solid green"
	},
	detailViews : {
		display :  "flex",
		flexWrap : "wrap",
		alignItems : "flex-start",
		justifyContent : "space-between"
	},
	detailView : {
		display :  "flex",
		width : "200px",
		height : "200px",
		margin : "0 5px 0 0",
		overflow : "hidden"
	},
	play : {
		fontFamily : 'Play'
	},
		dialogContent : {
		width : "90%",
		maxWidth : "none",
		maxHeight : "none",
		height : "90%",
		//backgroundColor : "white",
		position : "fixed",
		top : "0",
		marginRight : "5%",
		marginLeft : "5%"
	},
	dialogBody : {
		fontFamily : 'Play',
		backgroundColor : "white"
		
	},
	dialogTitle : {
		fontFamily : "'Audiowide', cursive"
	},
    border : {
	    border : "2px solid #00bcd4",
		borderRadius: "10px",
		overflow : "hidden",
	},
	legend : {
		position: "relative",
		top : 0,
		zIndex:100,
		width : "100%",
		display : "flex",
		justifyContent : "center",
		backgroundColor : "#00bcd4",
		color: "white",
		fontWeight : 900
	},
	upload : {
		display : 'flex',
		flexDirection : "column",
		fontFamily : "Play",
		height : "100%"
	},
	dragDrop : {
		flex : 1,
		borderStyle : "dashed",
		borderSize : "1px",
		borderColor : "#00bcd4",
		borderRadius: "10px",
		display : "flex",
		justifyContent : "center",
		alignItems : "center",
		margin : "5% 10% 5% 10%",
		
	},
	center : {
		display : "flex",
		justifyContent : "center",
		alignItems : "center",
		height : "100%"
	},
}
const defaultItems = [
	{
		name : "WELCOME TO THE TRB 3D GALLERY",
		path : "./gallery3d/trbLogo/trbLogo.dae"
	},
	{
		name : "Pièce 1",
		path : "./gallery3d/trbLogo/trbLogo_T.dae"
	},
	{
		name : "Pièce 1",
		path : "./gallery3d/trbLogo/trbLogo_R.dae"
	},
	{
		name : "Pièce 1",
		path : "./gallery3d/trbLogo/trbLogo_B.dae"
	},
	{
		name : "Pièce 1",
		path : "./gallery3d/trbLogo/trbLogo_P1.dae"
	},
	{
		name : "Pièce 1",
		path : "./gallery3d/trbLogo/trbLogo_P2.dae"
	},
	{
		name : "Pièce 1",
		path : "./gallery3d/trbLogo/trbLogo_P3.dae"
	},
	{
		name : "Pièce 1",
		path : "./gallery3d/trbLogo/trbLogo_P4.dae"
	},
	{
		name : "Pièce 1",
		path : "./gallery3d/trbLogo/trbLogo_P5.dae"
	},
]
const itemsList = [
	{
		name : "trbLogo",
		mainGeom : {
			name : "WELCOME TO THE TRB 3D GALLERY",
			path : "./gallery3d/trbLogo/trbLogo.dae"
		},
		detailGeom : [
			{
				name : "Pièce 1",
				path : "./gallery3d/trbLogo/trbLogo_T.dae"
			},
			{
				name : "Pièce 1",
				path : "./gallery3d/trbLogo/trbLogo_R.dae"
			},
			{
				name : "Pièce 1",
				path : "./gallery3d/trbLogo/trbLogo_B.dae"
			},
			{
				name : "Pièce 1",
				path : "./gallery3d/trbLogo/trbLogo_P1.dae"
			},
			{
				name : "Pièce 1",
				path : "./gallery3d/trbLogo/trbLogo_P2.dae"
			},
			{
				name : "Pièce 1",
				path : "./gallery3d/trbLogo/trbLogo_P3.dae"
			},
			{
				name : "Pièce 1",
				path : "./gallery3d/trbLogo/trbLogo_P4.dae"
			},
			{
				name : "Pièce 1",
				path : "./gallery3d/trbLogo/trbLogo_P5.dae"
			},
		]
	},
	{
		name : "Nose-ring",
		mainGeom : {
			name : "Nose Ring",
			path : "./gallery3d/noseRing/noseRing.dae"
		},
		detailGeom : [
			{
				name : "Pièce 1",
				path : "./gallery3d/noseRing/noseRing_Block_Sup.dae"
			},
			{
				name : "Pièce 2",
				path : "./gallery3d/noseRing/noseRing_Block_Inf.dae"
			},
			{
				name : "Pièce 3",
				path : "./gallery3d/noseRing/noseRing_Casing1.dae"
			},
			{
				name : "Pièce 4",
				path : "./gallery3d/noseRing/noseRing_Virolle.dae"
			},
		]
	},
	{
		name : "Goulotte Aluminium",
		mainGeom : {
			name : "Goulotte Aluminium",
			path : "./gallery3d/goulotte/goulotte.dae"
		},
		detailGeom : [
			{
				name : "Pièce 1",
				path : "./gallery3d/goulotte/piece1.dae"
			},
			{
				name : "Pièce 2",
				path : "./gallery3d/goulotte/piece2.dae"
			},
			{
				name : "Pièce 3",
				path : "./gallery3d/goulotte/piece3.dae"
			},
		]
	}
]

export default function TrbGalleryThreeD_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbGalleryThreeD_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					geometries : [],
					camPosZ : [10, 5],
					items : defaultItems,
					itemsList : itemsList,
				}
				this.loader = new THREE.ColladaLoader();
            }
            componentDidMount() {
				 this.loadGeometries(defaultItems)
				function noscroll() {
				  window.scrollTo( 0, 0 );
				}

				window.addEventListener('scroll', noscroll);
				

			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}
			loadGeometry(path, index){
					this.loader.options.convertUpAxis = true;
					//console.log(path)
					this.loader.load( path, (collada) => {
						dae = collada.scene;
						dae.position.set(0,0,0);//x,z,y- if you think in blender dimensions ;)
						dae.scale.set(1.5,1.5,1.5);
						var temp = [];
						//console.log(this.state.geometries.length)
						for (var i=0; i<this.state.geometries.length; i++){
							temp[i] = this.state.geometries[i]
						}
						temp[index] = dae
						this.setState({
							geometries : temp
						})
					});
				}
			loadGeometries(newItems){
				//console.log(newItems);
				var temp = []; 	
				for (var i=0; i<newItems.length; i++){
						temp[i] = null
					}

				this.loader.options.convertUpAxis = true;

				async.forEachOf(newItems,		  
				 (item, index, callback)=>{

					this.loader.load( item.path, (collada) => {
						dae = collada.scene;
						dae.position.set(0,0,0);
						dae.scale.set(1.5,1.5,1.5);
						//console.log(this.state.geometries.length)
						temp[index] = dae
						callback();
					});
				  },
				  // 3rd param is the function to call when everything's done
				  (err)=>{
					if (err) console.error(err.message);
					this.setState({
						geometries : temp,
						items : newItems
					})
				  }
				);
			}

			loadItem(index){

				var newItems = [];
				newItems.push(itemsList[index].mainGeom);

				for (var i=0; i< itemsList[index].detailGeom.length; i++){
					newItems.push(itemsList[index].detailGeom[i])
					//console.log(newItems);
				}

				this.loadGeometries(newItems)
			}


            render() {
                return <WrappedComponent
				{...this.props}
				testMethod={()=>this.testMethod()}
				itemsList={this.state.itemList}
				geometries={this.state.geometries}
				camPosZ={this.state.camPosZ}
				itemsDetail={this.state.items.slice(1)}
				items={this.state.items}
				itemsList={this.state.itemsList}
				loadItem={(index)=>this.loadItem(index)}
				
				/>
            }
        }
        $TrbGalleryThreeD_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbGalleryThreeD_Api
    }
}
    
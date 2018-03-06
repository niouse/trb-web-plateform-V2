import React, { Component } from 'react';

import ImagePictureAsPdf from 'material-ui/svg-icons/image/picture-as-pdf';
import ImageCenterFocusStrong from 'material-ui/svg-icons/image/center-focus-strong';
import {cyan500, cyan900, red100, red500, yellow500, blue500, greenA200} from 'material-ui/styles/colors';



const styles = {
	container : {
		position: "relative",
		height : "100%",
		width : "100%"
	},
	legend3d : {
		position: "relative",
		top : 0,
		zIndex:100,
		width : "100%",
		display : "flex",
		justifyContent : "center",
		//backgroundColor : "#00bcd4",
		color: "white",
		fontWeight : 900
	},
	tools : {
		position: "absolute",
		bottom : 0,
		zIndex:100,
		width : "100%",
		display : "flex",
		justifyContent : "flex-end",
		backgroundColor : "none",
		fontWeight : 900
	},
	toolIcon : {
		margin : "0 5px 5px 5px",
		cursor : "pointer",
	}
}



export default class Gallery3dView extends Component {
  
	constructor(props) {
		super(props);
		
		
		
		var container, loader;
		var camera, controls, scene, renderer, light, lights, geometry;
		var dae;

		  //CREATE CAMERA
		  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
		  camera.position.z = this.props.camPosZ;
		
		  scene = new THREE.Scene();
		  scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );	

			
		  // LIGHTS
		  lights = [];
		  light1 = new THREE.DirectionalLight( 0xffffff );
		  light2 = new THREE.DirectionalLight( 0xffffff );
		  light3 = new THREE.AmbientLight( 0x222222 );
			
		  light1.position.set( 1, 1, 1 );
		  light2.position.set( -1, -1, -1 );
		  lights.push(light1);
		  lights.push(light2);
		  lights.push(light3);

		  scene.add( lights[0], lights[1], lights[2] );
					
		  // GET VIEWS
			//console.log(this.props.viewId)
		  var mainView = document.getElementById(this.props.viewId)
		  var lg = mainView.clientWidth;
		  var ht = mainView.clientHeight;
		
		
		  // RENDERER
		  renderer = new THREE.WebGLRenderer( {antialias:true, alpha: true} );
		  renderer.setClearColor( 0xffffff, 0 );
		  renderer.setSize( lg, ht );
		
  		  // CONTROLS
		  controls = new THREE.OrbitControls( camera, container, renderer.domElement );
		  geometry = props.mainGeometry;

		
		this.state = {
			camera : camera,
			controls : controls,
			renderer: renderer,
			lights : lights,
			geometry : geometry,
			scene : scene
		};
		

		this.animate=this.animate.bind(this);
		this.renderThree=this.renderThree.bind(this);
		this.addGeomToScene = this.addGeomToScene.bind(this);
	}
	
	
	
	

	componentDidMount() {	
		var container;
		container = document.getElementById( this.props.divId );
		container.appendChild( this.state.renderer.domElement )	
		this.state.controls.addEventListener( 'change', this.renderThree );
		this.state.scene.add(this.props.mainGeometry)
		//this.addGeomToScene(this.state.geometry);
		this.animate();	
		//window.addEventListener( 'resize', ()=>this.onWindowResize(), false );
	    }						
  
		componentWillReceiveProps(newProps) {
			this.state.scene.remove(this.state.geometry);
			//this.state.geometry.rotation.y += 0.01;
			this.setState({
				geometry : newProps.mainGeometry
			});
			//addGeomToScene(geom)
			//this.animate()
		}
		
		onWindowResize() {
				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;
				this.renderer.setSize( window.innerWidth, window.innerHeight );
			}
	
		renderThree(){
			this.state.renderer.render( this.state.scene, this.state.camera );
			//console.log(this.state.geometry)
			if(this.state.geometry){
				this.state.geometry.rotation.y += 0.01;
			}
		}
	
		animate() {
		  requestAnimationFrame( this.animate );
		  this.state.controls.update();
		  this.renderThree()
		}

		addGeomToScene(geom){
		    this.state.scene.add(geom)
		}

	render() {
		
		this.addGeomToScene(this.state.geometry);
		//this.animate();
		
		return (
			<div id={this.props.divId} style={styles.container}>
				<div style = {styles.legend3d}>{this.props.legend}</div>
				<div style = {styles.tools}>
					<ImagePictureAsPdf {...this.props.buttonAttr} style={styles.toolIcon}/>
					<ImageCenterFocusStrong {...this.props.buttonAttr} style={styles.toolIcon}/>
				</div>
			</div> 
		);
	}
}
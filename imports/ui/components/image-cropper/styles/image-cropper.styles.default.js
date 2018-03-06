const button = {
	width : "200px",
	height : "50px",
	color : "white",
	borderRadius : "20px",
	border : "2ps solid white",
	backgroundColor : "transparent",
	cursor : "pointer",
	marginRight : "20px",
	marginLeft : "20px",
	fontWeight : 900,
	fontSize:"1em",
}

export default ImageCropper_Styles_Default = {
   container: {
		width: "100%",
        height: "auto",
		maxWidth : "1280px",
		margin : "auto",
		//border : "2px solid white",
		display : "flex",
		flexDirection : "column",
		justifyContent : "center",
		alignItems : "center",
	   	paddingTop:"35px",
	    overflow : "auto",
		//border:"1px solid black",
		//fontFamily : theme.fonts.main
	},
	header : {
		width:"100%",
		height : "100px",
		//margin : "auto",
		display : "flex",
		justifyContent : "center",
		alignItems : "center",
		textAlign : "center",
		fontSize : "1.2em",
		fontWeight : "bold",
		//border : "1px solid red",
	},
	selectButton : button,
	saveButton : button,
	footer : {
		display : "flex",
		justifyContent : "space_between",
		alignItems : "center",
		width : "100%",
		height : "50px",
	},
	content : {
		width : "100%",
		//border:"1px solid blue"
	},
	snackbar : {
		//width : "100%",
		//height : "100px",
		backgroundColor : "red",
		color : "white",
		fontSize : "1.3em",
		
		attr : {
			bodyStyle : {
				backgroundColor : "red",
				color : "white",
				success : {
					backgroundColor : "green",
				},
				warning : {
					backgroundColor : "orange",
				},
				error : {
					backgroundColor : "red",
				},
				//overflow : "visible"
			},
			contentStyle : {
				fontSize : "0.8em",
			}
		}
	},
	drawerFilters : {
		attr : {
			width : 270
		}
	},
	drawerActions : {
		attr : {
			width : 270
		}
	},
	fields :{
		width:"200px",
		height:"100%",
		display: "flex",
		padding : "0px 10px 0px 30px",
		//justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
		justifyContent : "space-around",
		//border:"1px solid blue",
		
	},
	textField: {
		width: '100%',
		margin : "0px"
	},
	menu : {
		width: "100%",
		margin : 0,
		padding : 0,
		//border : "1px solid yellow",
		attr : {
			floatingLabelStyle: {
				color : "white"
			}
		}
	},
	
	photoInputBox : {
			display : "none",
			flexDirection : "column",
			width : "100%",
			//padding : "10px",
			height : "30px",
			alignItems : "center",
			//margin : "10px 5px 10px 5px"
		},
	photoInputLabel : {
		//color : theme.colors.secondary,
		margin : "0px 10px 0px 10px",
		//fontFamily : theme.fonts.main,
	},
	photoInput : {
		//margin : "10px 5px 10px 5px"
		//border:"1px solid black",
		width: "100%",
		marginTop:"5px",
		backgroundColor : "yellow",
		color : "red",
		//border : "1px solid red"
	},
	photoEdit : {
		//flex:1,
		//height : "100%",
		width : "100%",
		maxHeight : "480px",
		display : "flex",
		flexDirection : "column",
		//border:"1px solid black",
	},
	photoBox : {
		width : "100%",
		height : "auto",
		margin : "auto",
		maxHeight : "480px",
		//height : "480px",
		flex : 1,
		////border:"1px solid green",
		display : "flex",
		justifyContent : "center",
		alignItems : "center"
	},
	imageToCrop : {
		//width:"100%",
		height : "auto",
		maxWidth : "100%",
		maxHeight : "600px",
		margin: "auto",
		//border:"1px solid black"
	},
	photoToolBox : {
		width : "100%",
		display : "flex",
		justifyContent : "center",
		alignItems : "center",
		height : "70px",
		//border:"1px solid black"
	},
	toolButton : {
		width : "70px",
		height : "70px",
		//border:"1px solid black",
		margin : 0,
		//padding : 0,
		attr : {
			color : "grey",
			hoverColor : "red"
		}
	},
	message:{
			fontSize:"1em",
			flex : 1,
			height : "1em",
			marginLeft : "10px",
			//textAlign: "center",
			successMessage :{
				color: "green"
			},
			errorMessage: {
				color: "red"
			},
			warningMessage: {
				color: "orange"
			}
		},
}

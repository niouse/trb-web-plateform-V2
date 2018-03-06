const button = {
	width : "150px",
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

export default TrbGalleryMui_Styles_Default = {
    container: {
        width: "100%",
        height: "auto",
		minHeight : "750px",
		maxWidth : "1280px",
		margin : "auto",
		//border : "2px solid white",
		display : "flex",
		flexDirection : "column",
		justifyContent : "center",
		alignItems : "center",
			paddingTop:"35px",
		//flexDirection : "column",
		
		
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
	content : {
		width : "100%",
		
		//display :"flex",
		//margin : "auto",
		//flexWrap : "wrap",
		//border : "1px solid blue",
		//flexDirection : "column"
	},
	filtersButton : button,
	actionsButton : button,
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
    title: {
        color: "black",
		width : "100%"
    },
	selectPhoto : {
		fontWeight : "bold",
		height :"480px",
	},
	imageViewer : {
		//border : "1px solid red",
		width : "100%",
		margin : "auto",
		
	},
	imageSelector : {
		display : "flex",
		width : "100%",
		height : "100px",
		position : "relative",
		justifyContent : "center"
	},
	smallImagesBox : {
		position : "absolute",
		width : "100%",
		maxWidth : "672px",
		//margin : "auto",
		display : "flex",
		flex : 1,
		//border : "1px solid white",
		height : "100%",
		alignItems : "center",
		//justifyContent : "space-around",
		//flexWrap : "wrap",
	},
	smallImagesBox2 : {
		position : "relative",
		width : "100%",
		maxWidth : "672px",
		height : "100%",
		overflow : "hidden",
	},
	goLeft : {
		width : "50px",
		height : "100%",
		cursor : "pointer",
		display : "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent : "center",
	},
	navImage : {
		width : "32px",
	},
	smallImageBox : {
		width : "auto",
		height : 48,
		marginLeft : "10px",
		marginRight : "10px",
	},	
	goRight : {
		width : "50px",
		height : "100%",
		cursor : "pointer",
		display : "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent : "center",
	},
	imageBox : {
		flex : 1,
		width : "100%",
		//height : "480",
		//border : "1px solid orange",
		display : "flex",
		justifyContent : "center",
		//alignItems : "center",
		position : "relative",
	},
	image : {
		width : "640px",
		maxWidth : "100%",
		height :"480px",
	},
	smallImage : {
		cursor : "pointer",
	},
	filtersBox : {
		//border : "1px solid green",
		width: "250px",
		height:"auto",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding : "10px",
		//justifyContent : "center",
	},
	infosBox : {
		width : "100%",
		maxWidth : "640px",
		flexWrap : "wrap",
		margin : "auto",
		bottom : "0%",
		padding : "5px",
		height : "70px",
		display: "flex",
		flexWrap : "wrap",
		alignItems: "center",
		justifyContent : "flex-start",
		//border : "1px solid blue",
	},
	chip : {
		marginLeft : "5px",
	},
	filters : {
		width: "200px",
		filtersHeader : {
			display : "flex",
			justifyContent :"space-between",
			attr : {
				
			}
		},
		refreshButton : {
			//width : "30px",
			cursor : "pointer",
			attr : {
			}
		},
		refreshIcon : {
			attr : {
				color : "white",
				hoverColor : "blue"
			}
		},
		title : {
			color : "white",
			fontWeight : 800,
			fontSize : "1.2em",
		},
		menu : {
			width : "100%",
			maxWidth : "200px",
			margin : "auto",
		},
		resultsNumber : {
			fontWeight : "bold",
			paddingTop : "20px",
			
		}
	},
	controls2 : {
		display : "none",
		width : "100vw",
		justifyContent : "center",
		paddingBottom : "30px",
	},
	goLeft2 : {
		margin : "0 10px 0 10px",
		width : "50px",
		height : "100%",
		cursor : "pointer",
		display : "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent : "center",
	},
	goRight2 : {
		margin : "0 10px 0 10px",
		width : "50px",
		height : "100%",
		cursor : "pointer",
		display : "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent : "center",
	},
}

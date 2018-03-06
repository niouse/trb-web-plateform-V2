export default TrbLabRecorder_Styles_Default = {
    container : {
		width : "100%",
		maxWidth : "1000px",
		margin : "auto",
		paddingTop : "10px",
		//padding : "10px",
		//color : theme.colors.component,
		//borderTop : "1px solid" + theme.colors.primary,
		//borderBottom : "1px solid" + theme.colors.primary,
		//borderRadius : "15px",
		backgroundColor : "none",
		color : "white",
		fontFamily : "Arial"
	},
	 controlBox : {
		width : "100%",
		//height : "220px",
		margin : "0px auto 30px auto",
		justifyContent : "space-between", 
		alignItems : "center",
		display:"flex",
		flexWrap : "wrap",
		fontFamily : "Play",
		// border : "1px solid blue"
	},
	buttonBox : {
		height : "100%",
		minWidth : "300px",
		display : "flex",
		//flexDirection : "row",
		justifyContent : "space-between"
	},
	header : {
		height : "50px",
		width : "100%",
		textAlign : "center",
		fontSize : "2em",
	},
	graph : {
	   width : "100%",
		height : "auto",
   },
	mainBox : {
		display:"flex",
		height : "350px",
		width : "100%",
		color : "rde",
	},
		//border : "3px solid black",
	chart : {
		height : "300px",
		width : "100%",
		//border : "4px solid #b5b5b5",
	},
	results : {
				 //border : "1px solid red",
		display:"flex",
		fontSize : "1em",
		height : "100%",
		//flex : 1,
		minWidth : "150px",
		minWidth : "200px",
		flexDirection: "column",
		justifyContent : "space-between",
		alignItems : "space-around",
		//paddingLeft : "20px",
		//alignItems : "center",
		data : {
			fontSize : "0.8em",
			color : "red"
		},
	},
	serieTitleBox : {
		display : "flex",
		alignItems : "center",
		justifyContent : "space-between",
		cursor : "pointer",
		//borderBottom : "1px solid "+theme.colors.primary,
		paddingBottom : "5px",
	},
	serieTitle : {
		textJustify : "justify",
		fontSize : "1.5em",
		fontWeight : "bold",
		//margin: "0 auto 0 auto",
		//color : theme.colors.primary,



	},
	editButton : {
		//float : "right",
		marginRight : "0px",
		//maxWidth : "80px",
		//minWidth : "50px",
		//border : "1px solid "+theme.colors.primary,
		attr : {
			color : "red",
			hoverColor : "white"
		}
	},
	rowTable : {
		display:"flex",
		flexWrap : "wrap"
	},
	tableCell1 : {
		flex: 1,
		fontWeight : "normal",
		fontSize : "1em"
	},
	tableCell2 : {
		fontWeight : "normal",
		fontSize : "1.5em"
	},
	buttonFuturistic : {
		size : 220,
		small : false
	}
}

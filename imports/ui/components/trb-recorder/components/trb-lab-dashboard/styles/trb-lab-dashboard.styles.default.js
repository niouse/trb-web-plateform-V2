export default TrbLabDashboard_Styles_Default = {
    container : {
		//margin : "auto",
		width : "100%",
		//maxWidth : "1280px",
		margin : "auto",
		//paddingTop : "5px",
		height : "auto",
		//maxHeight : "1175px",
		//overflow : "hidden",
		fontFamily: 'sans-serif',
		display : "flex", 
		//flexDirection : "column",
		flexWrap : "wrap",
		//flexFlow: "row wrap",
		alignItems : "flex-start",
		//paddingBottom : "30px",
		border : "1px solid blue",
		justifyContent : "center",
		position : "relative",
	},
	title : {
		fontSize : "2em",
		width : "100%",
		textAlign : "center",
		color : "white",
	},
	smallViewer : {
	  container : {
			//margin : "0 auto 20px auto",
		 // border : "1px solid blue",
			//backgroundColor : "none",
			height : "70px",
			width : "45%",
		    minWidth : "320px",
		   cursor : "pointer",
		  position : "relative",
		},
	   borders : {
		   position : "absolute",
		   top : 0,
		   left  :0,
		   
	   },
	   content : {
		   height : "100%",
			width : "100%",
		   display : "flex",
		   alignItems : "center",
		   justifyContent : "center",
		  // border : "1px solid blue"
	   },
		title : {
			fontSize : "1.3em",
			marginLeft : "5px",
			width : "25%",
			color : "white",
		},
		lastTemp : {
			width : "25%",
			fontSize : "1.3em",
			color : "white",
		},
		isOnRecord : {
			width : "25%",
			color : "white"
		},
		light : {
			height:"35px", 
			width:"35px", 
			marginRight:"5px"
		}
	}
}

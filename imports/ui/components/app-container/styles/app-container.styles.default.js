
export default AppContainer_Styles_Default = {
    container: {
        width: "100%",
        height: "100%",
		margin : "auto",
		//position : "relative",
		//display : "flex",
		//flexDirection : "column",
		
		//border : "1px solid blue"
    },

	dropContainerTools : {
		position : "absolute",
		top : "0px",
		left : "0px",
		zIndex :"200"
	},

	containerBox : {
		height:"100%",
		//border : "1px solid red",
		borderRadius : "5px",
		display : "flex",
		flexDirection : "column"
		
	},

	content : {
		width : "100%",
		maxWidth : "1280px",
		display : "flex",
		flexWrap : "wrap",
	   //flexDirection : "column",
	   //justifyContent : "space-between",
		flex : 1,
		margin : "auto",
		paddingTop : "10px",
	},
	contentHeader : {
		width : "100%",
		//minHeight : "30px",
		height : "35px",
		//fontSize : "1.2em",
		fontWeight : "bold",
		color : "grey",
		borderBottom : "1px solid grey",
		//marginBottom : "10px",
		paddingBottom : "5px",
		display : "flex",
		justifyContent : "space-between",
		alignItems : "center",
		position :"relative"
	},
	applisBox : {
		width : "100%",
		//backgroundColor : "white",
		//height : "100%",
		flex : 1, 
		display : "inline",
		//justifyContent : "space-between",
		alignItems : "flex-start",
		flexWrap : "wrap",
		overflow : "auto",
		//border : "1px solid blue",
	},
	widgets : {
		width : "100%",
	},
	videosBox : {
		
	},
	video : {
		height : "120px",
		width : "180px"
	},
	rightContent  : {
		flex : 0.5,
		padding : "5px",
	},
	leftContent : {
		flex : 0.5,
		padding : "5px",
	},
	itemBox : {
		height : "90px",
		width : "90px",
		margin : "5px",
		cursor : "pointer",
		display : "inline-block",
		//justifyContent : "center",
		//verticalAlign:"middle",
		/*alignItems : "center",*/
		//border : "1px solid blue",
		//border : "1px solid red"
	},
	clocksBox : {
		display : "flex",
		flexDirection : "row",
		justifyContent : "space-around",
		margin : "auto",
		flexWrap : "wrap",
		width : "100%",
		height : "auto",
		//border : "3px solid red",
		//margin : "80px 0 0 0", 
		padding : "0px 0px 30px 0px",
		/*borderTopStyle : "solid",
		borderTopColor : theme.colors.primary,
		borderTopWidth : "1px",*/
	},
}


export default TrbLabSerieViewer_Styles_Default = {
    container : {
		width : "100%",
		//borderRadius : "15px",
		color : "white",
		width : "100%",
		//border : "3px solid black",
		display : "flex",
		flexDirection: "column",
		overflow : "hidden",
		//backgroundColor : theme.colors.component,
	},
	 chart : {
			height : "300px",
			width : "100%",
			//overflow : "hidden",
			//border : "3px solid red"
		},
	results : {
		//height : "100%",
		//flex : 1,
		//margin : "auto",
		padding : "10px 0px 10px 0px",
		display : "flex",
		fontSize : "0.8em",
		flexDirection: "column",
		justifyContent : "space-around",
		data : {
			fontSize : "1.2em",
			color : "red"
		},
		//borderLeft : "1px solid black"
	},
	serieTitle : {
		display : "flex",
		fontSize : "1.5em",
		fontWeight : "bold",
		margin: "0 auto 0 auto",
		padding : "10px",
	},
	rowTable : {
		//width : "100%",
		padding :  "10px 10px 10px 10px",
		display : "flex",
	},
	cellTable : {
		minWidth : "200px",
		fontWeight : "bold",
		fontSize : "1.2em",
	}
}

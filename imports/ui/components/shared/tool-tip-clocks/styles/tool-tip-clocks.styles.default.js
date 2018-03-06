const center = {
	display : "flex",
	justifyContent : "center",
	alignItems : "center"
}

export default ToolTipClocks_Styles_Default = {
      container : {
		color : "black",
		display : "flex",
		flexWrap : "wrap",
		justifyContent : "space-around",
		 width : "400px",
		 //maxHeight: "70px",
		//border : "1px solid red",
		},
		titleBox : {
			width : "150px",
			color : "grey",
			fontSize : "1.3em", 
			fontWeight:"bold", 
			display : "flex",
			//border : "1px solid red",
			justifyContent : "center",
			alignItems : "center"
			//textShadow: theme.colors.primary+" 0px 0px 5px",
		},
	   title : {

	   },
		timeBox : {
			width : "80px",
			fontSize : "1em", 
			fontWeight:"normal", 
			color : "white",
			fontWeight : "bold",
			//border : "1px solid red",
			...center,

		},
		buttonBox : {
			width : "120px",
			//border : "1px solid red",
			...center,

		},
		button : {
			attr : {
				color : "black",
				//hoverColor : theme.colors.primary
			}
		}
}

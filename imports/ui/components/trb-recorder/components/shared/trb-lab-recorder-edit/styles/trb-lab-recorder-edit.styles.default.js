
export default TrbLabRecorderEdit_Styles_Default = {
    container : {
			width : "100%",
			height : "100%",
			//margin : "0px auto 0 auto",
			position:"fixed",		
			top : 0,
			left : 0,
			display : "flex",
			justifyContent : "center",
			alignItems : "center",
			zIndex : 100,
			backgroundColor : 'rgba(0,0,0,0.4)',
			//backgroundOpacity : 0.4,	
		},
	   settingsForm : {
		   margin : "auto", 
		   width: "500px",
		   maxWidth : "100%"
	   },
	   content : {
		   position: "relative",
  			top: "50%", 
  			transform: "translate(-50%, -50%)",
		    left: "50%", 
			height : "auto",
			width : "550px",
		   	maxWidth:"100%",
			backgroundColor : "white",
			padding : "20px",
			//border : "3px solid black",
			
		},
		title : {
			fontWeight : "bold",
			fontSize: "1.1em",
			height : "3em",
			//marginBottom : "30px",
		},

		inputs : {
			//maxWidth : "50px",
			fontFamily : 'Play',
			margin : "auto 0 auto 10px",  
		},
		selectField : {
			maxWidth : "70px",
			marginLeft : "10px"
		},
		tableRow :{
			display : "flex",
			flexWrap : "wrap",
			//width : "100%",
			margin : "auto"
		},
		tableCell : {
			display : "flex",
			//flex : 1,
			width : "250px",
		},
		tableCell2 : {
			display : "flex",
			//flex : 1,
			width : "250px",
		},
		buttonBox : {
			width : "100%",
			height : "30px",
			//marginTop : "10px"
		},
		button : {
			marginLeft : "5px",
			float : "right"
		},
		message :{
			height : "1.5em",
			paddingBottom : "0.5em",
			success : {
				color : "#65ff49",
				//margin : "5px auto 5px auto"
			},
			error : {
				color : "red"
			}
		}
}

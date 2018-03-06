
export default TrbGalleryThreeD_Styles_Default = {
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
	toolBar : {
		display : "flex"
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
		//justifyContent : "space-between"
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
	    //border : "2px solid #00bcd4",
		//borderRadius: "10px",
		overflow : "hidden",
	},
	legend : {
		position: "relative",
		top : 0,
		zIndex:100,
		width : "100%",
		display : "flex",
		justifyContent : "center",
		backgroundColor : "none",
		color: "white",
		fontWeight : 900
	},
	upload : {
		display : 'flex',
		flexDirection : "column",
		fontFamily : "Play",
		height : "100%",
		height : "150px"
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
		height : "100%",
		width:"100%"
	},
}

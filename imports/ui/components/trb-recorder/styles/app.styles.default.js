const changeIn = (e)=>{
	e.currentTarget.style.color="white"
}

const changeOut = (e)=>{
	e.currentTarget.style.color="white"
}

export default App_Styles_Default = {
    container: {
        width: "100%",
		display : "flex",
		flexDirection :"column"
        //height: "100%",
		//overflow : "hidden",
		//paddingTop:"35px",
    },
    title: {
        color: "black"
    },
	navigation: {
		width: "auto",
		//height : "50px",
		maxWidth : "1000px",
		margin : "auto",
		display: "flex",
		flexWrap : "wrap",
		justifyContent : "space-around",
		alignItems : "center",	
	},
	navItem : {
		margin: 12,
		cursor: "pointer",
		fontWeight : "bold",
		paddingBottom : "5px",
		color : "black",
		focusColor : "blue",
		fontSize : "1.3em",
	},
	active : {
		borderBottom : "3px solid blue",
		color : "blue"
	}
}


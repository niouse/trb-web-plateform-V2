   function handleHoverRight(e){
	   e.currentTarget.src="/cool-select/trb/rightArrow2.png"
   }
	
	 function handleOutRight(e){
	   e.currentTarget.src="/cool-select/trb/rightArrow.png"
   }
	
    function handleHoverLeft(e){
	   e.currentTarget.src="/cool-select/trb/leftArrow2.png"
   }
	
	 function handleOutLeft(e){
	   e.currentTarget.src="/cool-select/trb/leftArrow.png"
   }


export default CoolSelect_Styles_Default = {
    container: {
		width : "100%",
        maxWidth: "700px",
        height: "100%",
		maxHeight : "400px",
		//border : "1px solid red",
    },
	itemGrid : {
		display : "flex",
		justifyContent : "space-around",
		alignItems : "center",
		flexWrap : "wrap",
		//border : "1px solid yellow",
		//height : "auto",
		width: "100%",
		height : 300,
		maxWidth : 1280,
		margin : "auto",
		padding : "0 0 0 0",
	},
	tab : {
		width : "300px",
		height : "300px",
		//border : "1px solid blue",
	},
    pointsBox : {
		width : "50%",
		height : 24,
		margin : "auto",
		display : "flex",
		justifyContent : "space-around",
		alignItems : "center",
	},
	point : {
		width : 18,	
		height : 18,
		borderRadius : 8,
		border : "1px solid red",
		backgroundColor : "transparent",
		cursor : "pointer",
		attr: {
			onMouseOver : ()=>{return},
			onMouseOut : ()=>{return},
		}
	},
	arrow : {
		height : 20,
		cursor : "pointer",
		attrRight : {
			onMouseOver : (e)=>handleHoverRight(e),
			onMouseOut : (e)=>handleOutRight(e),
		},
		attrLeft : {
			onMouseOver : (e)=>handleHoverLeft(e),
			onMouseOut : (e)=>handleOutLeft(e),
		}
	},
}

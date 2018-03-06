
export default SimpleMap_Styles_Default =  {
   container : {
	   width : "100%",
	   height : "100%",
	  // display : "flex",
	   position : "relative",
	  //border : "1px solid "+theme.colors.primary,
	},
   map : {
	   width : "100%",
	   height : "100%",
	   flex : 1,
	   position : "absolute",
	   //border : "1px solid red"
   },
   options : {
	   width : 230
   },
   toggleOptions : {
	   position : "relative",
	   width : "50px",
	   height : "50px",
	   display : "flex",
	   justifyContent : "center",
	   alignItems : "center",
	   top : "50%",
	  // backgroundColor : "none",
	   borderRadius : "0px 10px 10px 0px",
	   left : "0px",
	   /*borderTop : "1px solid "+theme.colors.primary,
	   borderRight : "1px solid "+theme.colors.primary,
	   borderBottom : "1px solid "+theme.colors.primary,*/
	   zIndex : 100,
	   cursor : "pointer",

	   //border : "1px solid black"
   },
   toggleOptionsIcon : {
	   width : "30px", 
	   height:"30px",
	   attr : {
		  // color : theme.colors.primary,
		    color : "blue",
		   //hoverColor : theme.colors.primary,
	   }
   },
   drawerHeader  :{
	   display : "flex",
	   justifyContent : "space-between",
	   padding : "10px",
	   fontSize : "1.2em",

   },
   drawerTitle  :{
	   //width : "80%",
	   display : "flex",
	   justifyContent : "space-between",
   },
   drawerClose  :{
	   fontWeight : "900",
	   sontSize : "2em",
		cursor : "pointer",
   },
	markerOptions : {
	   width : "100%",
	   height : "70px",
	   display : "flex",
	   alignItems : "center",
	   justifyContent : "space-between",
		cursor : "pointer",
	   //marginLeft : "10px"
   },
	checkBoxes : {
		display : "flex",
	   alignItems : "center",

	},
   leftIconBox : {
	   height : "70px",
	   width : "70px",
	   display : "flex",
	   alignItems : "center"
   },
   leftIcon :  {
	   height : "50px",
	   width : "auto",
	   display : "flex",
	   alignItems : "center",
	   margin:"auto",
   },
   markerName : {
		paddingRight : "15px",

	},
   markersOptionsList : {
	   width : "100%",
	   //height : "100%",
	   //padding : "10px",
   },

}

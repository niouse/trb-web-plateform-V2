
export default function CoolSelect_computeStyles(defaultStyles, stylesOptions, userStyles) {
    var styles = {}
	for (var key in defaultStyles){
		styles[key]=Object.assign({}, defaultStyles[key])
	}
    // Overwrite styles according screen size or theme
	
	styles.container.width=stylesOptions.screenWidth
    styles.title = {
        color: stylesOptions.theme.colors.primary
    }
	/*styles.container = {
		flex : 1
	}*/
	
	styles.point.border = "1px solid " + stylesOptions.theme.colors.primary
	styles.point.width = 16
	styles.point.height = 16

    // Overwrite styles according to device type
    if (stylesOptions.device === "pc") {}
    if (stylesOptions.device === "smartPhone" || stylesOptions.screenWidth < 640) {
		styles.itemGrid.height="150px" 
		styles.tab.height="75px"
		styles.tab.width="75px"
		styles.pointsBox.width="100%"
	}

    // Overwrite styles according user provided styles
    for (var key in userStyles) {
        if (styles[key]) {
            for (var key2 in userStyles[key]) {
                console.log(userStyles[key][key2])
                styles[key][key2] = userStyles[key][key2]
            }
        }
    }
    return styles
}

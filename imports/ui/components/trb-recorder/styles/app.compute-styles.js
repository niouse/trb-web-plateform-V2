
export default function App_computeStyles(defaultStyles, stylesOptions, userStyles) {
    var styles = {}
	for (var key in defaultStyles){
		styles[key]=Object.assign({}, defaultStyles[key])
	}
    // Overwrite styles according screen size or theme
    styles.title = {
        color: stylesOptions.theme.colors.primary
    }
	//styles.container.width=stylesOptions.screenWidth
	//styles.container.height="auto"
	styles.container.background = "none"
	
	styles.active = Object.assign({}, styles.active, {
		color : stylesOptions.theme.colors.primary,
		borderBottom : "3px solid "+stylesOptions.theme.colors.primary,
	})
	
	styles.navItem = Object.assign({}, styles.navItem, {
		color : "black",
		focusColor : stylesOptions.theme.colors.primary,
		fontFamily :  stylesOptions.theme.fonts.main,
	})


    // Overwrite styles according to device type
    if (stylesOptions.device === "pc") {}
    if (stylesOptions.device === "smartPhone" || stylesOptions.screenWidth < 640) {}

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

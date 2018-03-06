
export default function TabHover_computeStyles(defaultStyles, stylesOptions, userStyles) {
    var styles = {}
	for (var key in defaultStyles){
		styles[key]=Object.assign({}, defaultStyles[key])
	}
    // Overwrite styles according screen size or theme
    styles.itemName.fontFamily = stylesOptions.theme.fonts.main
	styles.container.color = stylesOptions.theme.colors.secondary
    // Overwrite styles according to device type
    if (stylesOptions.device === "pc") {}
	
    if (stylesOptions.device === "smartPhone" || stylesOptions.screenWidth < 640) {
		styles.itemName.fontSize="3px"
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

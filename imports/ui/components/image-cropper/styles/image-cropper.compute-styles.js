
export default function ImageCropper_computeStyles(defaultStyles, stylesOptions, userStyles) {
    var styles = {}
	for (var key in defaultStyles){
		styles[key]=Object.assign({}, defaultStyles[key])
	}
    // Overwrite styles according screen size or theme
    //styles.title.color= stylesOptions.theme.colors.primary
	styles.selectButton.border = "2px solid " + stylesOptions.theme.colors.primary
	styles.selectButton.color =  stylesOptions.theme.colors.primary
	styles.saveButton.border = "2px solid " + stylesOptions.theme.colors.primary
	styles.saveButton.color = stylesOptions.theme.colors.primary
	styles.container.paddingTop = 35
	styles.menu.attr.floatingLabelStyle.color=stylesOptions.theme.colors.primary
	styles.toolButton.attr.color=stylesOptions.theme.colors.secondary
	styles.toolButton.attr.hoverColor=stylesOptions.theme.colors.primary
    // Overwrite styles according to device type
	
	
    if (stylesOptions.device === "pc") {}
    if (stylesOptions.device === "smartPhone" || stylesOptions.screenWidth < 640) {
			styles.saveButton.fontSize="0.6em"
			styles.selectButton.fontSize="0.6em"
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

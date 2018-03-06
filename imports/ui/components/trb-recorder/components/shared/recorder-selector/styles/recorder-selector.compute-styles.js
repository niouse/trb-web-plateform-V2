
export default function RecorderSelector_computeStyles(defaultStyles, stylesOptions, userStyles) {
     var styles = {}
	for (var key in defaultStyles){
		styles[key]=Object.assign({}, defaultStyles[key])
	}
    // Overwrite styles according screen size or theme
    // Overwrite styles according screen size or theme
	styles.container.fontFamily = stylesOptions.theme.fonts.main
	styles.label.color=stylesOptions.theme.colors.primary
    // Overwrite styles according to device type
    if (stylesOptions.device === "pc") {}
    if (stylesOptions.device === "smartPhone" || stylesOptions.screenWidth < 640) {
		styles.container.width="auto"
		styles.container.margin="auto"
		styles.label.fontSize="0.8em"
	}

    // Overwrite styles according user provided styles
    for (var key in userStyles) {
        if (styles[key]) {
            for (var key2 in userStyles[key]) {
                styles[key][key2] = userStyles[key][key2]
            }
        }
    }
    return styles
}

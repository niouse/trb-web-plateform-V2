
export default function TrbLabRecorderEdit_computeStyles(defaultStyles, stylesOptions, userStyles) {
    let styles = Object.assign({}, defaultStyles);
    // Overwrite styles according screen size or theme
	styles.container.width = stylesOptions.screenWidth
	styles.container.height = stylesOptions.screenHeight
	
    styles.title.color = stylesOptions.theme.colors.primary

    // Overwrite styles according to device type
    if (stylesOptions.device === "pc") {}
    if (stylesOptions.device === "smartPhone") {
		styles.tableRow.flexDirection="column"
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

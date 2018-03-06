
export default function TrbLabGraphs_computeStyles(defaultStyles, stylesOptions, userStyles) {
    let styles = Object.assign({}, defaultStyles);
    // Overwrite styles according screen size or theme
    styles.title = {
        color: stylesOptions.theme.colors.primary
    }
    // Overwrite styles according screen size or theme
    styles.title = {
        color: stylesOptions.theme.colors.primary
    }

    // Overwrite styles according to device type
    if (stylesOptions.device === "pc") {}
    if (stylesOptions.device === "smartPhone" || stylesOptions.screenWidth < 640) {
		styles.container.display="flex"
		styles.container.flexDirection="column"	
		styles.container.justifyContent="center"	
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

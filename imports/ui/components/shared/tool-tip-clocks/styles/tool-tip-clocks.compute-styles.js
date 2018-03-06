
export default function ToolTipClocks_computeStyles(defaultStyles, stylesOptions, userStyles) {
    var styles = {}
	for (var key in defaultStyles){
		styles[key]=Object.assign({}, defaultStyles[key])
	}
	styles.title.color = stylesOptions.theme.colors.primary
    // Overwrite styles according screen size or theme
	styles.button.attr.color = stylesOptions.theme.colors.primary
	styles.button.attr.hoverColor = stylesOptions.theme.colors.secondary
	//styles.titleBox.textShadow = stylesOptions.theme.colors.primary+" 0px 0px 5px"
		
    // Overwrite styles according to device type
    if (stylesOptions.device === "pc") {}
    if (stylesOptions.device === "smartPhone" || stylesOptions.screenWidth < 640) {
		styles.container.width="100%"
		styles.container.display="flex"
		styles.container.justifyContent="space-around"
		styles.titleBox.fontSize="1em"
		styles.timeBox.fontSize="0.8em"
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

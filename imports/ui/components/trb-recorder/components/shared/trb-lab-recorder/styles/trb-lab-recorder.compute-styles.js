
export default function TrbLabRecorder_computeStyles(defaultStyles, stylesOptions, userStyles) {
   var styles = {}
	for (var key in defaultStyles){
		styles[key]=Object.assign({}, defaultStyles[key])
	}
    // Overwrite styles according screen size or theme
    // Overwrite styles according screen size or theme
    //styles.title.color = stylesOptions.theme.colors.primary
   
	styles.container.fontFamily = stylesOptions.theme.fonts.main
	styles.editButton.attr={
		color : stylesOptions.theme.colors.primary,
		hoverColor : stylesOptions.theme.colors.secondary
	}
	styles.results.color=stylesOptions.theme.colors.secondary

    // Overwrite styles according to device type
    if (stylesOptions.device === "pc") {}
    if (stylesOptions.device === "smartPhone" || stylesOptions.screenWidth < 640) {
		styles.controlBox.flexDirection="column-reverse"
		styles.buttonBox.height="120px"
		styles.results.width="80%"
		styles.results.margin="auto"
		styles.results.height="auto"
		styles.results.minHeight="150px"
		styles.results.paddingTop="10px"
		styles.results.borderTop = "1px solid "+stylesOptions.theme.colors.primary
		styles.results.borderBottom = "1px solid "+stylesOptions.theme.colors.primary
		styles.tableCell2.fontSize="1em"
		styles.buttonBox.width="100%"
		styles.buttonFuturistic.size=140
		styles.buttonFuturistic.small=true
		styles.controlBox.height="400px"
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

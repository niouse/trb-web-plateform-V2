
export default function TrbGalleryMui_computeStyles(defaultStyles, stylesOptions, userStyles) {
    var styles = {}
	for (var key in defaultStyles){
		styles[key]=Object.assign({}, defaultStyles[key])
	}
    // Overwrite styles according screen size or theme
    styles.filters.title.color= stylesOptions.theme.colors.secondary
	styles.filters.refreshIcon.attr = {
		color : stylesOptions.theme.colors.primary,
		hoverColor : stylesOptions.theme.colors.secondary
	}
	styles.filtersButton.border = "2px solid " + stylesOptions.theme.colors.primary
	styles.filtersButton.color =  stylesOptions.theme.colors.primary
	styles.actionsButton.border = "2px solid " + stylesOptions.theme.colors.primary
	styles.actionsButton.color = stylesOptions.theme.colors.primary
	
	styles.filters.resultsNumber.color=stylesOptions.theme.colors.primary
    // Overwrite styles according to device type
    if (stylesOptions.device === "pc") {}
    if (stylesOptions.device === "smartPhone" || stylesOptions.screenWidth < 640) {
				styles.container.minHeight="640px"
				styles.image.height="320px"
				styles.selectPhoto.height="320px"
				styles.goLeft.display="none"
				styles.goRight.display="none"
				styles.controls2.display="flex"
				styles.smallImagesBox.maxWidth=672/2
				styles.smallImagesBox2.maxWidth=672/2
				styles.filtersButton.fontSize="0.6em"
				styles.actionsButton.fontSize="0.6em"
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

const homeRender = (req, res) => {
    res.render('home');
}

const colorPickerRender = (req, res) => {
    res.render('colorPicker');
}

module.exports = {
    homeRender,
    colorPickerRender
}
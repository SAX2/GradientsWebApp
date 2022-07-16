const signinRender = (req, res) => {
    res.render('auth/signin');
}

const signupRender = (req, res) => {
    res.render('auth/signup');
}

module.exports = {
    signinRender,
    signupRender
}
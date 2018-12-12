var passport = require('passport');

module.exports = app => {
    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        }));

    app.get('/login', passport.authenticate('google'), (req, res) =>{
        res.send(req.user)
    });

    app.get('/api/logout', (req, res) => {
        req.logout(res.user);
        return "/";

    });

    app.get('/api/current_user', (req, res) => {
        console.log('Current user is:', req.user);
        res.send(req.user)
    })
};
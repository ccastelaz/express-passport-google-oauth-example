const GoogleStrategy = require('passport-google-oauth')
    .OAuth2Strategy;

module.exports = function (passport) {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
        clientID: "626230097341-8p9elu64hepi435g8akuebcs37ohdmg1.apps.googleusercontent.com",
        clientSecret: "VHQpHdnpsG3fbtQ9sDyxj2j2",
        callbackURL: 'http://localhost:3000/auth/google/callback'
    }, (token, refreshToken, profile, done) => {
        return done(null, {
            profile: profile,
            token: token
        });
    }));
};

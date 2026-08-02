import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL || "/api/user/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const { id, displayName, emails, photos } = profile;
        const email = emails[0].value;
        const image = photos[0]?.value || '';

        // Check if user exists
        let user = await User.findOne({ email });

        if (user) {
            // Update googleId if not set
            if (!user.googleId) {
                user.googleId = id;
                if (image) user.image = image;
                await user.save();
            }
            return done(null, user);
        } else {
            // Create new user
            user = await User.create({
                name: displayName,
                email,
                googleId: id,
                image,
                password: '' // OAuth users don't need password
            });
            return done(null, user);
        }
    } catch (error) {
        return done(error, null);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

export default passport;





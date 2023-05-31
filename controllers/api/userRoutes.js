const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    }
    catch (err) {
        res.status(400).send({ message: "Failed to create your account"})
    }
});

router.post("/login", async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email} });

        if(!userData) {
            res.status(400).send({ message: "Incorrect email or Password, Please try again!" });
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).send({ message: "Incorrect email or Password, Please try again!" });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData;
            req.session.logged_in = true;

            res.send({ user: userData, message: "You're Logged In!" });
        });
    }
    catch (err) {
        res.status(400).send({ message: "Failed to Login" });
    }
});

router.post("/logout", (req, res) => {
    if(req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;
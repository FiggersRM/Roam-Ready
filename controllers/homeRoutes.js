const router = require('express').Router();
const { User, Itinerary } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const itinData = await Itinerary.findAll({
      include: [
        {
          model: User, 
          attributes: ['username'],
        }, // not sure if i should include comments too
      ],
    });

    const itineraries = itinData.map((itinerary) =>
      itinerary.get({ plain: true })
    );

    res.render('homepage', {
      itineraries,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findOne({ 
          where: {
            id: req.session.user_id
          },
          include: [{ model: Itinerary }],
          attributes: { exclude: ['password'] },
        });
        console.log("MY USER",userData)

        const user = userData.get({ plain: true });
        const itineraries = user.itineraries

        res.render('dashboard', {
            itineraries,
            // logged_in: true
        });
    } catch (err) {
      console.log("error", err)
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

module.exports = router;

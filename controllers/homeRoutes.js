const router = require('express').Router();
const { User, Itinerary } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const itinData = await Itinerary.findAll({
      include: [
        {
          model: User, 
          attributes: ['name'],
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
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Itinerary }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', withAuth, async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

module.exports = router;

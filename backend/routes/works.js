const router = require('express').Router();
let Work = require('../models/work.model');

router.route('/').get((req, res) => {
    Work.find()
      .then(blog => res.json(blog))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const dateFrom = req.body.date.dateFrom;
    const dateTo = req.body.date.dateTo;
    const location = req.body.author.location;
    const organization = req.body.organization;
    const description = req.body.description;

    const newWork = new Work({
        username,
        title,
        dateFrom,
        dateTo,
        location,
        organization,
        description,
    });

    newWork.save()
      .then(() => res.json('Work added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Work.findById(req.params.id)
      .then(work => res.json(work))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Work.findByIdAndDelete(req.params.id)
      .then(() => res.json('Work deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Work.findById(req.params.id)
      .then(work => {
          work.username = req.body.username;
          work.title = req.body.title;
          work.dateFrom = req.body.date.dateFrom;
          work.dateTo = req.body.date.dateTo;
          work.location = req.body.author.location;
          work.organization = req.body.organization;
          work.description = req.body.description;

          work.save()
            .then(() => res.json('Work updated.'))
            .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
const router = require('express').Router();
let Work = require('../models/work.model');

router.route('/').get((req, res) => {
    Work.find()
      .then(blog => res.json(blog))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const isProject = Boolean(req.body.isProject);
    const title = req.body.title;
    const dateFrom = Date.parse(req.body.dateFrom);
    const dateTo = req.body.dateTo ? Date.parse(req.body.dateTo) : null;
    const location = req.body.location;
    const organization = req.body.organization;
    const description = req.body.description;
    const links = req.body.links;

    const newWork = new Work({
        isProject,
        title,
        dateFrom,
        dateTo,
        location,
        organization,
        description,
        links
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
          work.isProject = Boolean(req.body.isProject);
          work.title = req.body.title;
          work.dateFrom = Date.parse(req.body.dateFrom);
          work.dateTo = req.body.dateTo != null ? Date.parse(req.body.dateTo) : null;
          work.location = req.body.location;
          work.organization = req.body.organization;
          work.description = req.body.description;
          work.links = req.body.links;

          work.save()
            .then(() => res.json('Work updated.'))
            .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Job = require('../models/job_models.js');

router.use(express.json());

// GET /api/jobs – List all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find({}, 'title company location'); // only select 3 fields
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/jobs/:id – Get a single job
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: 'Invalid ID' });
  }
});

// POST /api/jobs – Create a new job
router.post(
  '/',
  [
    body('title').notEmpty().withMessage('Job Title is required'),
    body('company').notEmpty().withMessage('Company Name is required'),
    body('location').notEmpty().withMessage('Location is required'),
    body('description').notEmpty().withMessage('Job Description is required'),
    body('requirements').notEmpty().withMessage('Requirements are required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    try {
      const newJob = new Job(req.body);
      await newJob.save();
      res.status(201).json(newJob);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

module.exports = router;

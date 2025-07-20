const express = require('express');
const router = express.Router();

// GET managers
router.get('/', (req, res) => {
  res.json({ 
    message: 'GET managers - Retrieves list of all managers ' 
  });
});

// POST new manager
router.post('/', (req, res) => {
  res.json({ 
    message: 'POST new manager - Adds a new manager to database' 
  });
});

// PUT replace all managers
router.put('/', (req, res) => {
  res.json({ 
    message: 'PUT replace managers - Replaces entire manager database (admin only)' 
  });
});

// PATCH update managers
router.patch('/', (req, res) => {
  res.json({ 
    message: 'PATCH update managers - updates multiple manager records' 
  });
});

// DELETE all managers
router.delete('/', (req, res) => {
  res.json({ 
    message: 'DELETE managers - Removes manager records (admin only)' 
  });
});

// Individual manager routes
router.route('/:id')
  .get((req, res) => {
    res.json({ 
      message: `GET manager ${req.params.id} - Retrieves details for specific manager` 
    });
  })
  .put((req, res) => {
    res.json({ 
      message: `PUT replace manager ${req.params.id} - Completely replaces manager record` 
    });
  })
  .patch((req, res) => {
    res.json({ 
      message: `PATCH update manager ${req.params.id} - Partially updates manager record` 
    });
  })
  .delete((req, res) => {
    res.json({ 
      message: `DELETE manager ${req.params.id} - Removes manager from system` 
    });
  });

module.exports = router;
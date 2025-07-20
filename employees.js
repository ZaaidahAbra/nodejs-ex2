const express = require('express');
const router = express.Router();

// GET employees
router.get('/', (req, res) => {
  res.json({ 
    message: 'GET employees - Retrieves list of all employees' 
  });
});

// POST new employee
router.post('/', (req, res) => {
  res.json({ 
    message: 'POST new employee - Adds a new employee to the database' 
  });
});

// PUT replace all employees
router.put('/', (req, res) => {
  res.json({ 
    message: 'PUT replace employees - Replaces entire employee database (admin  should only have access to PUT)' 
  });
});

// PATCH update employees
router.patch('/', (req, res) => {
  res.json({ 
    message: 'PATCH update employees - updates multiple employee records' 
  });
});

// DELETE all employees
router.delete('/', (req, res) => {
  res.json({ 
    message: 'DELETE employees - Removes all employee records (admin should only have access)' 
  });
});

// Individual employee routes
router.route('/:id')
  .get((req, res) => {
    res.json({ 
      message: `GET employee ${req.params.id} - Retrieves details for specific employee` 
    });
  })
  .put((req, res) => {
    res.json({ 
      message: `PUT replace employee ${req.params.id} - replaces employee record` 
    });
  })
  .patch((req, res) => {
    res.json({ 
      message: `PATCH update employee ${req.params.id} - updates employee record` 
    });
  })
  .delete((req, res) => {
    res.json({ 
      message: `DELETE employee ${req.params.id} - Removes employee from system` 
    });
  });

module.exports = router;
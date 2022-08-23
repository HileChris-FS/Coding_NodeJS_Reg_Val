const express = require('express')
const validation = express.Router();
let errors = {};
let FAILURE = 'Registration Failed';

validation.post("/registration", (req, res) => {
   res.render('registration', {
      pagename: "Registration",
      errors: errors,
  });
   if (!/^\d{5}(?:[-\s]\d{4})?$/.test(req.body.zip)) {
      errors.zipMsg =
        'Zip code must be at least 5 characters and of the proper format (12345, 12345 1223, or 12345-1234)';
      errors.status = FAILURE;
  }
});




module.exports = validation;
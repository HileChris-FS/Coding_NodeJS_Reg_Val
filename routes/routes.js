const express = require('express');
const router = express.Router();

router.get("/",(req, res) => {
    res.render('index', {
        pagename: "Home",
    });
});

router.get("/about",(req, res) => {
    res.render('about', {
        pagename: "About",
    });
});

router.get("/contact",(req, res) => {
    res.render('contact', {
        pagename: "Contact",
    });
});

router.get("/projects",(req, res) => {
    res.render('projects', {
        pagename: "Projects",
    });
});

module.exports = router;
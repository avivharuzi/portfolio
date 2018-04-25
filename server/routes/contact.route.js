const express = require('express');
const router = express.Router();

const ContactController = require('./../controllers/contact.controller');
const RouteHandler = require('./../handlers/route.handler');

router.post('/', (req, res) => {
    ContactController.checkContact(req.body)
        .then(ContactController.sendEmail)
        .then((successContact) => RouteHandler.success(res, successContact))
        .catch((err) => RouteHandler.error(res, 409, 'There was problem by sending this message', err));
});

module.exports = router;

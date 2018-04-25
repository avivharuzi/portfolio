const nodemailer = require('nodemailer');

const ValidationHandler = require('./../handlers/validation.handler');
const EmailHandler = require('./../handlers/email.handler');

class ContactController {
    static checkContact(contact) {
        return new Promise((resolve, reject) => {
            let errors = [];

            if (ValidationHandler.regex(contact.fullname, /^[A-Za-z ]{2,55}$/)) {
                contact.fullname = ValidationHandler.testInput(contact.fullname);
            } else {
                errors.push('Full name is invalid');
            }

            if (ValidationHandler.isEmail(contact.email.toLowerCase())) {
                contact.email = ValidationHandler.testInput(contact.email);
            } else {
                errors.push('Email is invalid');
            }

            if (ValidationHandler.checkScriptTag(contact.message)) {
                contact.message = ValidationHandler.testInput(contact.message);
            } else {
                errors.push('Message is invalid');
            }
            
            if (errors.length) {
                reject(errors);
            } else {
                resolve(contact);
            }
        });
    }

    static sendEmail(contact) {
        return EmailHandler.sendEmail(contact.fullname, 'avivharuzi@gmail.com', contact.fullname, contact.message);
    }
}

module.exports = ContactController;

var Raven = require('raven-js');

function logCustomMessage(message, context) {
    Raven.captureMessage(message, {
        level: 'error',
        extra: context
    });

    console.log(message);
}

module.exports = logCustomMessage;

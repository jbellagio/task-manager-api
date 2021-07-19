const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jacobbellagio@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. Let me know how to get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jacobbellagio@gmail.com',
        subject: 'Cancellation confirmation',
        text: `We are sorry to see you leave, ${name}! Is there a reason as to why you are leaving?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
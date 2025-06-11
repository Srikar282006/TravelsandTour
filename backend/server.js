const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Nodemailer transporter
// Replace 'YOUR_APP_PASSWORD_HERE' with the 16-character App Password you generated
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use 'gmail' service, which often implies secure connection
    auth: {
        user: process.env.USER_EMAIL, // Your Gmail address
        pass:process.env.USER_PASS // <--- REPLACE THIS WITH YOUR GENERATED APP PASSWORD
        // If using environment variables: process.env.GMAIL_APP_PASSWORD
    }
});

// Basic GET route to check if the server is running
app.get('/', (req, res) => {
    res.send('Server is running and listening for requests.');
});

// POST route to handle email sending
app.post('/send_email', (req, res) => {
    // Extract data from the request body.
    // Ensure that 'contact' and 'message' fields are correctly named in your frontend form
    // as 'contact' and 'message' as used in req.body.
    // In your frontend code, you used 'contact' for phone and 'message' for workdetails,
    // so this mapping is correct.
    const { name, email, contact, message } = req.body;

    // Email options for sending
    const mailOptions = {
        from: email, // Sender's email (from the form)
        to: process.env.TO_EMAIL_USER, // Recipient's email
        subject: 'New Client Information from Website', // Subject of the email
        html: `
            <p><b>Hi, I am ${name}</b></p>
            <p><b>You can contact me with this email: ${email}</b></p>
            <p><b>Phone: ${contact}</b></p>
            <p><b>Work details (Message): ${message}</b></p>
        `,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); // Use console.error for errors
            res.status(500).json({ message: "Error sending mail: Bad response or authentication issue. Please check server logs." });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: "Email sent successfully!" });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const User = require('../models/User');
const { generateToken, authenticateUser, authenticateToken } = require('../Utils/jwtUtils.js');

const FRONT_END_URL = 'http://3.144.5.98/';

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'ywy1535312185@gmail.com',
        pass: 'xdft lukv zysh oajw'
    }
});

async function sendVerificationEmail(token,user) {

// verification url
const verificationUrl = FRONT_END_URL `verify?token=${token}`;

// send email
await transporter.sendMail({
    from: 'ywy1535312185@gmail.com',
    to: user.email,
    subject: 'Email Verification',
    html: `Please click on the following link to verify your email: <a href="${verificationUrl}">${verificationUrl}</a>`
});
};

module.exports = { sendVerificationEmail };
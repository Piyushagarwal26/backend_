const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];
    const user_id = "john_doe_17091999";  // Replace with your user ID
    const email = "john@xyz.com";         // Replace with your email
    const roll_number = "ABCD123";        // Replace with your roll number

    const numbers = data.filter(item => /^\d+$/.test(item));
    const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));
    const highest_alphabet = alphabets.length 
        ? [alphabets.reduce((a, b) => a.toUpperCase() > b.toUpperCase() ? a : b)] 
        : [];

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

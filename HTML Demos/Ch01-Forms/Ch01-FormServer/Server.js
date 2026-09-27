const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve the static HTML form
app.use(express.static(__dirname));

// Handle the form POST
app.post('/confirm', (req, res) => {
    const { UN, P } = req.body; // Form fields inside the <form>
    
    // Simple HTML response showing posted data
    res.send(`
        <!DOCTYPE html>
        <html>
        <head><title>Form Confirmation</title></head>
        <body>
            <h1>Form Submitted Successfully!</h1>
            <p><strong>User Name:</strong> ${UN}</p>
            <p><strong>Password:</strong> ${P}</p>
            <p><em>Note:</em> The “Favourite word” field was <strong>not</strong> inside the form, so it wasn’t posted.</p>
            <br>
            <a href="/">Go back</a>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

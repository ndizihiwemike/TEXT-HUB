const express = require('express');
const app = express();
const path = require('path');

// Serve static files (like index.html) from a 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html directly (optional if using express.static)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Corrected the env variable usage
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

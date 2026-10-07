const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Fallback for SPA - serve index.html for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'inner.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

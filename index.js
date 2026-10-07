const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 💳 STRIPE WEBHOOK ROUTE (Add this so Stripe doesn't error out!)
app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  // This gives Stripe a place to send payment confirmations
  response.send({received: true});
});

// Regular JSON parsing for other routes
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(__dirname));

// Fallback for SPA - serve inner.html for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'inner.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

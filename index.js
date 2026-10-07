const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Stripe webhook endpoint: must parse raw body as JSON
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  // Handle Stripe event here if needed
  res.send({ received: true });
});

// Parse normal JSON requests for other routes
app.use(express.json());

// Serve static files from the root
app.use(express.static(__dirname));

// Fallback to the app page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'inner.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

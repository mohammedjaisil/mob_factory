const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is your API data' });
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});

// server/app.js — simple metadata logger for defender view (no sensitive data)
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const LOG_FILE = './events.log';

app.post('/log-metadata', (req, res) => {
  const safe = {
    email_domain: req.body.email_domain || 'unknown',
    email_length: req.body.email_length || 0,
    password_length: req.body.password_length || 0,
    timestamp: req.body.timestamp || new Date().toISOString(),
    origin: req.body.demo_origin || 'unknown'
  };

  const line = JSON.stringify(safe) + '\n';
  // append to file (safe metadata only)
  fs.appendFile(LOG_FILE, line, (err) => {
    if (err) {
      console.error('Log write failed', err);
      return res.status(500).send('log error');
    }
    console.log('Logged metadata:', safe);
    res.status(200).send('ok');
  });
});

app.listen(3000, () => console.log('PhishGuard server listening on http://localhost:3000'));

import path from 'path';
import express from 'express';

import {
  getBasicTemplate,
  getBasicWithAvatarTemplate,
  getMonthlyReportWriterTemplate,
  getNewSupporterTemplate,
  getReferralTxTemplate,
} from '../dist';

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/static', express.static(path.join(__dirname, '../src/assets')));

app.get('/basic', (req, res) => {
  res.send(getBasicTemplate(req.query));
});

app.get('/basic/avatar', (req, res) => {
  res.send(getBasicWithAvatarTemplate(req.query));
});

app.get('/new-supporter', (req, res) => {
  res.send(getNewSupporterTemplate(req.query));
});

app.get('/referral-tx', (req, res) => {
  res.send(getReferralTxTemplate(req.query));
});

app.get('/monthly-reports/writer', (req, res) => {
  res.send(getMonthlyReportWriterTemplate(req.query));
});

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

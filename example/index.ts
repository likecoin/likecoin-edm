import express from 'express';

import {
  getBasicTemplate,
  getBasicWithAvatarTemplate,
  getNewSupporterTemplate,
  getReferralTxTemplate,
} from '../dist';

const PORT = process.env.PORT || 3000;

const app = express();

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

app.get('/', (_, res) => {
  res.json({
    templates: [
      {
        basic: [
          'avatar'
        ]
      },
      '/new-supporter',
      '/referral-tx',
    ],
  })
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

import express from 'express';

import { getNewSupporterTemplate } from '../dist';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/new-supporter', (req, res) => {
  res.send(getNewSupporterTemplate(req.query));
});

app.get('/', (_, res) => {
  res.json({
    templates: [
      '/new-supporter',
    ],
  })
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

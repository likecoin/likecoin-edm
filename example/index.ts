import path from 'path';
import express, { RequestHandler } from 'express';

import {
  getBasicTemplate,
  getBasicWithAvatarTemplate,
  getMonthlyReportCreatorTemplate,
  getMonthlyReportCreatorV2Template,
  getMonthlyReportCivicLikerV1Template,
  getMonthlyReportCivicLikerV2Template,
  getNewSupporterTemplate,
  getReferralTxTemplate,
  getResetPasswordTemplate,
  getTransactionTemplate,
  getMonthlyReportCivicLikerV3Template,
  getCreatorFollowConfirmationTemplate,
  getCreatorFollowPublishNewTemplate,
} from '../dist';

import {
  MonthlyReportCivicLikerV1SampleData,
  MonthlyReportCivicLikerV2SampleData,
  MonthlyReportCivicLikerV2ClassicSampleData,
  MonthlyReportCivicLikerV3SampleData,
} from './data/civic-liker';
import {
  MonthlyReportCreatorTemplateSampleData,
  MonthlyReportCreatorV2TemplateSampleData,
} from './data/creator';
import {
  CreatorFollowConfirmationSampleData,
  CreatorFollowPublishNewSampleData,
} from './data/writing-nft';

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/static', express.static(path.join(__dirname, '../src/assets')));
app.use(express.json());

function handleRequest(path: string, handler: RequestHandler) {
  app.get(path, handler);
  app.post(path, handler);
}

handleRequest('/basic', (req, res) => {
  const { body } = getBasicTemplate({ ...req.query, ...req.body });
  res.send(body);
});

handleRequest('/basic/avatar', (req, res) => {
  const { body } = getBasicWithAvatarTemplate({ ...req.query, ...req.body });
  res.send(body);
});

handleRequest('/reset-password', (req, res) => {
  const { body } = getResetPasswordTemplate({ ...req.query, ...req.body });
  res.send(body);
});

handleRequest('/transaction', (req, res) => {
  const { body } = getTransactionTemplate({ ...req.query, ...req.body });
  res.send(body);
});

handleRequest('/new-supporter', (req, res) => {
  const { body } = getNewSupporterTemplate({ ...req.query, ...req.body });
  res.send(body);
});

handleRequest('/referral-tx', (req, res) => {
  const { body } = getReferralTxTemplate({ ...req.query, ...req.body });
  res.send(body);
});

handleRequest('/monthly-reports/creator', (req, res) => {
  const { subject, body } = getMonthlyReportCreatorTemplate({
    ...MonthlyReportCreatorTemplateSampleData,
    ...req.query,
    ...req.body,
  });
  res.send(subject.concat(body));
});

handleRequest('/monthly-reports/creator/v2', (req, res) => {
  const { subject, body } = getMonthlyReportCreatorV2Template({
    ...MonthlyReportCreatorV2TemplateSampleData,
    ...req.query,
    ...req.body,
  });
  res.send(subject.concat(body));
});

handleRequest('/monthly-reports/civic-liker/v1', (req, res ) => {
  const { subject, body } = getMonthlyReportCivicLikerV1Template({
    ...MonthlyReportCivicLikerV1SampleData,
    ...req.query,
    ...req.body,
  });
  res.send(subject.concat(body));
});

handleRequest('/monthly-reports/civic-liker/v2', (req, res) => {
  const { subject, body } = getMonthlyReportCivicLikerV2Template({
    ...MonthlyReportCivicLikerV2SampleData,
    ...req.query,
    ...req.body,
  });
  res.send(subject.concat(body));
});

handleRequest('/monthly-reports/civic-liker/classic', (req, res) => {
  const { subject, body } = getMonthlyReportCivicLikerV2Template({
    ...MonthlyReportCivicLikerV2ClassicSampleData,
    ...req.query,
    ...req.body,
  });
  res.send(subject.concat(body));
});

handleRequest('/monthly-reports/civic-liker/v3', (req, res) => {
  const { subject, body } = getMonthlyReportCivicLikerV3Template({
    ...MonthlyReportCivicLikerV3SampleData,
    ...req.query,
    ...req.body,
  });
  res.send(subject.concat(body));
});

handleRequest('/writing-nft/creator-follow/confirmation', (req, res) => {
  const { subject, body } = getCreatorFollowConfirmationTemplate({
    ...CreatorFollowConfirmationSampleData,
    ...req.query,
    ...req.body,
  });
  res.send(subject.concat(body));
});

handleRequest('/writing-nft/creator-follow/publish-new', (req, res) => {
  const { subject, body } = getCreatorFollowPublishNewTemplate({
    ...CreatorFollowPublishNewSampleData,
    ...req.query,
    ...req.body,
  });
  res.send(subject.concat(body));
});

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

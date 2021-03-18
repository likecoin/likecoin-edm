import * as React from 'react';
import { Mjml2HtmlOptions, render } from 'mjml-react';

import { initIntl } from './i18n';

import {
  getLocalizedMonthlyReportSubject,
  getLocalizedTransactionSubject,
} from './utils/localization';

import { BasicTemplate, BasicTemplateProps } from './templates/basic';
import {
  BasicWithAvatarTemplate,
  BasicWithAvatarTemplateProps,
} from './templates/basic-with-avatar';

import {
  ResetPasswordTemplate,
  ResetPasswordTemplateProps,
} from './templates/reset-password';

import {
  TransactionTemplate,
  TransactionTemplateProps,
} from './templates/transaction';

import {
  NewSupporterTemplate,
  NewSupporterTemplateProps,
} from './templates/new-supporter';
import {
  ReferralTxTemplate,
  ReferralTxTemplateProps,
} from './templates/referral-tx';
import { MonthlyReportCreatorTemplate } from './templates/reports/monthly/creator';
import { MonthlyReportCreatorTemplateProps } from './templates/reports/monthly/creator/types';
import { MonthlyReportCivicLikerV1Template } from './templates/reports/monthly/civic-liker/v1';
import { MonthlyReportCivicLikerV1TemplateProps } from './templates/reports/monthly/civic-liker/v1.types';
import { MonthlyReportCivicLikerV2Template } from './templates/reports/monthly/civic-liker/v2';
import { MonthlyReportCivicLikerV2TemplateProps } from './templates/reports/monthly/civic-liker/v2.types';

export const getBasicTemplate = (
  props: BasicTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const { html: body } = render(<BasicTemplate {...props} />, options);
  return { body };
};

export const getBasicWithAvatarTemplate = (
  props: BasicWithAvatarTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const { html: body } = render(
    <BasicWithAvatarTemplate {...props} />,
    options
  );
  return { body };
};

export const getResetPasswordTemplate = (
  props: ResetPasswordTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const { html: body } = render(<ResetPasswordTemplate {...props} />, options);
  return { body };
};

export const getTransactionTemplate = (
  props: TransactionTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  const subject = getLocalizedTransactionSubject(intl, props.amount);
  const { html: body } = render(
    <TransactionTemplate {...{ ...props, subject }} />,
    options
  );
  return { subject, body };
};

export const getNewSupporterTemplate = (
  props: NewSupporterTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const { html: body } = render(<NewSupporterTemplate {...props} />, options);
  return { body };
};

export const getReferralTxTemplate = (
  props: ReferralTxTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const { html: body } = render(<ReferralTxTemplate {...props} />, options);
  return { body };
};

export const getMonthlyReportCreatorTemplate = (
  props: MonthlyReportCreatorTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  const subject = getLocalizedMonthlyReportSubject(
    intl,
    'creator',
    props.timestamp
  );
  const { html: body } = render(
    <MonthlyReportCreatorTemplate {...props} />,
    options
  );
  return { subject, body };
};

export const getMonthlyReportCivicLikerV1Template = (
  props: MonthlyReportCivicLikerV1TemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  const subject = getLocalizedMonthlyReportSubject(
    intl,
    'civic-liker',
    props.timestamp
  );
  const { html: body } = render(
    <MonthlyReportCivicLikerV1Template {...props} />,
    options
  );
  return { subject, body };
};

export const getMonthlyReportCivicLikerV2Template = (
  props: MonthlyReportCivicLikerV2TemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  const subject = getLocalizedMonthlyReportSubject(
    intl,
    'civic-liker',
    props.timestamp
  );
  const { html: body } = render(
    <MonthlyReportCivicLikerV2Template {...props} />,
    options
  );
  return { subject, body };
};

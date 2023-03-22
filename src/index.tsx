import * as React from 'react';
import { Mjml2HtmlOptions, render } from 'mjml-react';

import { initIntl } from './i18n';

import { getLocalizedMonthlyReportSubject } from './utils/localization';
import { formatNumber } from './utils/number';

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
import { MonthlyReportCreatorTemplate } from './templates/reports/monthly/creator/v1';
import { MonthlyReportCreatorTemplateProps } from './templates/reports/monthly/creator/v1/types';
import { MonthlyReportCivicLikerV1Template } from './templates/reports/monthly/civic-liker/v1';
import { MonthlyReportCivicLikerV1TemplateProps } from './templates/reports/monthly/civic-liker/v1.types';
import { MonthlyReportCivicLikerV2Template } from './templates/reports/monthly/civic-liker/v2';
import { MonthlyReportCivicLikerV2TemplateProps } from './templates/reports/monthly/civic-liker/v2.types';
import { MonthlyReportCivicLikerV3Template } from './templates/reports/monthly/civic-liker/v3';
import { MonthlyReportCivicLikerV3TemplateProps } from './templates/reports/monthly/civic-liker/v3.types';
import { MonthlyReportCreatorV2TemplateProps } from './templates/reports/monthly/creator/v2/types';
import { MonthlyReportCreatorV2Template } from './templates/reports/monthly/creator/v2';
import {
  CreatorFollowConfirmationTemplate,
  CreatorFollowConfirmationTemplateProps,
} from './templates/nft/creator-follow/confirmation';
import {
  CreatorFollowPublishNewTemplate,
  CreatorFollowPublishNewTemplateProps,
} from './templates/nft/creator-follow/publish-new';
import {
  NFTNotificationTransferTemplate,
  NFTNotificationTransferTemplateProps,
} from './templates/nft/notification/transfer';
import {
  NFTNotificationPurchaseTemplate,
  NFTNotificationPurchaseTemplateProps,
} from './templates/nft/notification/purchase';

export const getBasicTemplate = (
  props: BasicTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const { html: body } = render(<BasicTemplate {...props} />, {
    minify: false,
    ...options,
  });
  const { subject } = props;
  return { subject, body };
};

export const getBasicWithAvatarTemplate = (
  props: BasicWithAvatarTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const { html: body } = render(<BasicWithAvatarTemplate {...props} />, {
    minify: false,
    ...options,
  });
  const { subject } = props;
  return { subject, body };
};

export const getResetPasswordTemplate = (
  props: ResetPasswordTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  const {
    subject = intl.formatMessage({ id: 'reset-password.subject' }),
  } = props;
  const { html: body } = render(
    <ResetPasswordTemplate {...{ ...props, subject }} />,
    { minify: false, ...options }
  );
  return { subject, body };
};

export const getTransactionTemplate = (
  props: TransactionTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  let subject = intl.formatMessage(
    { id: 'transaction.subject' },
    { amount: props.amount }
  );
  const { isResend } = props;
  if (isResend) subject = intl.formatMessage({ id: 'resend' }).concat(subject);
  const { html: body } = render(
    <TransactionTemplate {...{ ...props, subject }} />,
    { minify: false, ...options }
  );
  return { subject, body };
};

export const getNewSupporterTemplate = (
  props: NewSupporterTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const { subject } = props;
  const { html: body } = render(<NewSupporterTemplate {...props} />, {
    minify: false,
    ...options,
  });
  return { subject, body };
};

export const getReferralTxTemplate = (
  props: ReferralTxTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const { subject } = props;
  const { html: body } = render(<ReferralTxTemplate {...props} />, {
    minify: false,
    ...options,
  });
  return { subject, body };
};

export const getMonthlyReportCreatorTemplate = (
  props: MonthlyReportCreatorTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  const subject = getLocalizedMonthlyReportSubject(
    intl,
    'creator',
    props.timestamp,
    {
      timeZone: props.timeZone,
    }
  );
  const { html: body } = render(<MonthlyReportCreatorTemplate {...props} />, {
    minify: false,
    ...options,
  });
  return { subject, body };
};

export const getMonthlyReportCreatorV2Template = (
  props: MonthlyReportCreatorV2TemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  const subject = getLocalizedMonthlyReportSubject(
    intl,
    'creator',
    props.timestamp,
    {
      timeZone: props.timeZone,
    }
  );
  const { html: body } = render(<MonthlyReportCreatorV2Template {...props} />, {
    minify: false,
    ...options,
  });
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
    { minify: false, ...options }
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
    { minify: false, ...options }
  );
  return { subject, body };
};

export const getMonthlyReportCivicLikerV3Template = (
  props: MonthlyReportCivicLikerV3TemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  const subject = getLocalizedMonthlyReportSubject(
    intl,
    'civic-liker',
    props.timestamp
  );
  const { html: body } = render(
    <MonthlyReportCivicLikerV3Template {...props} />,
    { minify: false, ...options }
  );
  return { subject, body };
};

export const getCreatorFollowConfirmationTemplate = (
  props: CreatorFollowConfirmationTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  const {
    subject = intl.formatMessage(
      { id: 'writing-nft_creator-follow_confirmation_subject' },
      { displayName: props.creatorDisplayName }
    ),
  } = props;
  const { html: body } = render(
    <CreatorFollowConfirmationTemplate {...props} />,
    {
      minify: false,
      ...options,
    }
  );
  return { subject, body };
};

export const getCreatorFollowPublishNewTemplate = (
  props: CreatorFollowPublishNewTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  const {
    subject = intl.formatMessage(
      { id: 'writing-nft_creator-follow_publish-new_subject' },
      { displayName: props.creatorDisplayName }
    ),
  } = props;
  const { html: body } = render(
    <CreatorFollowPublishNewTemplate {...props} />,
    {
      minify: false,
      ...options,
    }
  );
  return { subject, body };
};

export const getNFTNotificationTransferTemplate = (
  props: NFTNotificationTransferTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  const {
    subject = intl.formatMessage(
      { id: 'nft_notification_transfer_subject' },
      { sender: props.senderDisplayName, nftTitle: props.nftTitle }
    ),
  } = props;
  const { html: body } = render(<NFTNotificationTransferTemplate {...props} />, {
    minify: false,
    ...options,
  });
  return { subject, body };
};

export const getNFTNotificationPurchaseTemplate = (
  props: NFTNotificationPurchaseTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  const {
    subject = intl.formatMessage(
      { id: 'nft_notification_purchase_subject' },
      { price: formatNumber(props.priceInLIKE), nftTitle: props.nftTitle }
    ),
  } = props;
  const { html: body } = render(<NFTNotificationPurchaseTemplate {...props} />, {
    minify: false,
    ...options,
  });
  return { subject, body };
};

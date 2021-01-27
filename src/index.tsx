import * as React from 'react';
import { render } from 'mjml-react';

import { BasicTemplate, BasicTemplateProps } from './templates/basic';
import {
  BasicWithAvatarTemplate,
  BasicWithAvatarTemplateProps,
} from './templates/basic-with-avatar';
import {
  NewSupporterTemplate,
  NewSupporterTemplateProps,
} from './templates/new-supporter';
import {
  ReferralTxTemplate,
  ReferralTxTemplateProps,
} from './templates/referral-tx';
import {
  MonthlyReportWriterTemplate,
  MonthlyReportWriterTemplateProps,
} from './templates/reports/monthly/writer';

export const getBasicTemplate = (props: BasicTemplateProps) => {
  const { html } = render(<BasicTemplate {...props} />);
  return html;
};

export const getBasicWithAvatarTemplate = (
  props: BasicWithAvatarTemplateProps
) => {
  const { html } = render(<BasicWithAvatarTemplate {...props} />);
  return html;
};

export const getNewSupporterTemplate = (props: NewSupporterTemplateProps) => {
  const { html } = render(<NewSupporterTemplate {...props} />);
  return html;
};

export const getReferralTxTemplate = (props: ReferralTxTemplateProps) => {
  const { html } = render(<ReferralTxTemplate {...props} />);
  return html;
};

export const getMonthlyReportWriterTemplate = (
  props: MonthlyReportWriterTemplateProps
) => {
  const { html } = render(<MonthlyReportWriterTemplate {...props} />);
  return html;
};

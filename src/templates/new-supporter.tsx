import * as React from 'react';

import { getPriceEmojiURL } from '../utils/civic';

import {
  BasicWithAvatarTemplate,
  BasicWithAvatarTemplateProps,
} from './basic-with-avatar';

export interface NewSupporterTemplateProps
  extends BasicWithAvatarTemplateProps {
  billingPlan?: string;
  amount?: number;
}

export const NewSupporterTemplate = ({
  billingPlan,
  amount,
  ...props
}: NewSupporterTemplateProps) => {
  const priceEmojiURL = getPriceEmojiURL(amount);
  return (
    <BasicWithAvatarTemplate
      {...props}
      subtitle={billingPlan}
      subtitlePrepend={
        <img
          src={priceEmojiURL}
          alt={billingPlan}
          style={{
            height: 48,
            verticalAlign: 'middle',
            marginBottom: 12,
            marginRight: 8,
          }}
        />
      }
    />
  );
};

import React from 'react';

import * as Colors from '../constants/colors';

import { BasicV2Template, BasicV2TemplateProps } from './basic-v2';

export const IntercomTemplate = (props: BasicV2TemplateProps) => {
  const globalCSS = `
    img {
      max-width: 100%;
    }
    .intercom-interblocks-subheading:not(:first-child) {
      margin-top: 2rem;
    }
    .intercom-h2b-button {
      display: inline-block;
      text-align: center;
      padding: 10px 25px;
      color: ${Colors.White};
      background-color: ${Colors.Black13};
      border-radius: 8px;
      font-weight: 600;
      text-decoration: none;
      border: solid 2px ${Colors.Black13};
    }
    .intercom-interblocks-button,
    .intercom-interblocks-image {
      margin-top: 2rem;
    }
    .intercom-interblocks-button:not(:last-child),
    .intercom-interblocks-image:not(:last-child) {
      margin-bottom: 2rem;
    }
    .intercom-interblocks-image {
      margin-left: -32px;
      margin-right: -32px;
    }
    .intercom-interblocks-image:first-child {
      margin-top: -32px;
    }
  `;
  return (
    <BasicV2Template
      content="{{ content }}"
      unsubscribeLink="{{ unsubscribe_url }}"
      isFullHeaderLogo={false}
      globalCSS={globalCSS}
      {...props}
    />
  );
};

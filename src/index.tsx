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

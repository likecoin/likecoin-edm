import * as React from 'react';
import { render } from 'mjml-react';

import {
  BasicWithAvatarTemplate,
  BasicWithAvatarTemplateProps,
} from './templates/basic-with-avatar';
import {
  NewSupporterTemplate,
  NewSupporterTemplateProps,
} from './templates/new-supporter';

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

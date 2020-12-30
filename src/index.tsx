import * as React from 'react';
import { render } from 'mjml-react';

import {
  NewSupporterTemplate,
  NewSupporterTemplateProps,
} from './templates/new-supporter';

export const getNewSupporterTemplate = (props: NewSupporterTemplateProps) => {
  const { html } = render(<NewSupporterTemplate {...props} />);
  return html;
};

import { render } from 'mjml-react';

import {
  compileNewSupporterTemplate,
  NewSupporterTemplateOptions,
} from './templates/new-supporter';

export const getNewSupporterTemplate = (
  options: NewSupporterTemplateOptions
) => {
  const { html } = render(compileNewSupporterTemplate(options));
  return html;
};

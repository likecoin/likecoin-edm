import { getBasicV2Template } from '../src';

import { SAMPLE_TEXT } from './stub/samples';

describe('Render basic v2 templates', () => {
  it('Default', () => {
    const { body } = getBasicV2Template({
      title: SAMPLE_TEXT,
      subtitle: SAMPLE_TEXT,
      content: '<p>Hello</p><p>World</p>',
    });
    expect(body).toMatchSnapshot();
  });

  it('Not full logo', () => {
    const { body } = getBasicV2Template({
      title: SAMPLE_TEXT,
      subtitle: SAMPLE_TEXT,
      content: '<p>Hello</p><p>World</p>',
      isFullHeaderLogo: false,
    });
    expect(body).toMatchSnapshot();
  });
});

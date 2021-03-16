import { getBasicWithAvatarTemplate } from '../src';

import { SAMPLE_IMAGE_URL, SAMPLE_TEXT } from './stub/samples';

describe('Render basic templates', () => {
  it('Default', () => {
    const html = getBasicWithAvatarTemplate(
      {
        title: SAMPLE_TEXT,
        subtitle: SAMPLE_TEXT,
        content: '<p>Hello</p><p>World</p>',
      },
      { minify: false }
    );
    expect(html).toMatchSnapshot();
  });

  it('With avatar', () => {
    const html = getBasicWithAvatarTemplate(
      {
        isCivicLiker: false,
        avatarURL: SAMPLE_IMAGE_URL,
      },
      { minify: false }
    );
    expect(html).toMatchSnapshot();
  });

  it('With avatar (Civic Liker)', () => {
    const html = getBasicWithAvatarTemplate(
      {
        isCivicLiker: true,
        avatarURL: SAMPLE_IMAGE_URL,
      },
      { minify: false }
    );
    expect(html).toMatchSnapshot();
  });
});

import { getBasicWithAvatarTemplate } from '../src';

import { SAMPLE_IMAGE_URL, SAMPLE_TEXT } from './stub/samples';

describe('Render basic templates', () => {
  it('Default', () => {
    const { body } = getBasicWithAvatarTemplate({
      title: SAMPLE_TEXT,
      subtitle: SAMPLE_TEXT,
      content: '<p>Hello</p><p>World</p>',
    });
    expect(body).toMatchSnapshot();
  });

  it('With avatar', () => {
    const { body } = getBasicWithAvatarTemplate({
      isCivicLiker: false,
      avatarURL: SAMPLE_IMAGE_URL,
    });
    expect(body).toMatchSnapshot();
  });

  it('With avatar (Civic Liker)', () => {
    const { body } = getBasicWithAvatarTemplate({
      isCivicLiker: true,
      avatarURL: SAMPLE_IMAGE_URL,
    });
    expect(body).toMatchSnapshot();
  });
});

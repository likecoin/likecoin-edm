import { getResetPasswordTemplate } from '../src';

describe('Render new reset-password templates', () => {
  it('Default', () => {
    const { body } = getResetPasswordTemplate({
      language: 'en',
    });
    expect(body).toMatchSnapshot();
  });
});

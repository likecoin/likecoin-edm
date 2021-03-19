import { getResetPasswordTemplate } from '../src';

describe('Render new reset-password templates', () => {
  it('Default', () => {
    const { body } = getResetPasswordTemplate(
      {
        language: 'en',
      },
      { minify: false }
    );
    expect(body).toMatchSnapshot();
  });
});

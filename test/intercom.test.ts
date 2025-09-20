import { getIntercomTemplate } from '../src';

describe('Render Intercom templates', () => {
  it('Default', () => {
    const { body } = getIntercomTemplate({
      content: `
        <div class="intercom-interblocks-image">
          <img src="https://place-hold.it/1200x630" />
        </div>
        <p>Lorem <b>Ipsum</b></p>
        <div class="intercom-interblocks-button">
          <a class="intercom-h2b-button" href="#">Link</a>
        </div>`,
    });
    expect(body).toMatchSnapshot();
  });
});

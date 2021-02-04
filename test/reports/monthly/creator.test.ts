import { getMonthlyReportCreatorTemplate } from '../../../src';

import { MonthlyReportCreatorTemplateSampleData as SampleData } from '../../stub/creator';

describe('Render writer monthly report templates', () => {
  it('Default', () => {
    const html = getMonthlyReportCreatorTemplate(SampleData);
    expect(html).toMatchSnapshot();
  });
});

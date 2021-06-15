import { getMonthlyReportCreatorTemplate } from '../../../src';

import { MonthlyReportCreatorTemplateSampleData as SampleData } from '../../stub/creator';

describe('Render writer monthly report templates', () => {
  it('Default', () => {
    const { subject, body } = getMonthlyReportCreatorTemplate(SampleData);
    expect(subject).toBeTruthy();
    expect(body).toMatchSnapshot();
  });
});

import {
  getMonthlyReportCreatorTemplate,
  getMonthlyReportCreatorV2Template,
} from '../../../src';

import {
  MonthlyReportCreatorTemplateSampleData as SampleData,
  MonthlyReportCreatorV2TemplateSampleData as V2SampleData,
} from '../../stub/creator';

describe('Render writer monthly report templates', () => {
  it('Default', () => {
    const { subject, body } = getMonthlyReportCreatorTemplate(SampleData);
    expect(subject).toBeTruthy();
    expect(body).toMatchSnapshot();
  });

  it('V2', () => {
    const { subject, body } = getMonthlyReportCreatorV2Template(V2SampleData);
    expect(subject).toBeTruthy();
    expect(body).toMatchSnapshot();
  });
});

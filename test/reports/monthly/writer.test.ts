import { getMonthlyReportWriterTemplate } from '../../../src';

import { MonthlyReportWriterTemplateSampleData as SampleData } from '../../stub/writer';

describe('Render writer monthly report templates', () => {
  it('Default', () => {
    const html = getMonthlyReportWriterTemplate(SampleData);
    expect(html).toMatchSnapshot();
  });
});

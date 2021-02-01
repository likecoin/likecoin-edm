import {
  getMonthlyReportCivicLikerV1Template,
  getMonthlyReportCivicLikerV2Template,
} from '../../../src';

import {
  MonthlyReportCivicLikerV1SampleData as V1SampleData,
  MonthlyReportCivicLikerV2SampleData as V2SampleData,
} from '../../stub/civic-liker';

describe('Render Civic Liker monthly report templates', () => {
  it('V1', () => {
    const html = getMonthlyReportCivicLikerV1Template(V1SampleData);
    expect(html).toMatchSnapshot();
  });

  it('V2', () => {
    const html = getMonthlyReportCivicLikerV2Template(V2SampleData);
    expect(html).toMatchSnapshot();
  });
});

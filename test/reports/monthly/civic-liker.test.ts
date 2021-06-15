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
    const { subject, body } = getMonthlyReportCivicLikerV1Template(
      V1SampleData
    );
    expect(subject).toBeTruthy();
    expect(body).toMatchSnapshot();
  });

  it('V2', () => {
    const { subject, body } = getMonthlyReportCivicLikerV2Template(
      V2SampleData
    );
    expect(subject).toBeTruthy();
    expect(body).toMatchSnapshot();
  });
});

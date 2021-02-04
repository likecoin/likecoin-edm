import { MonthlyReport, User } from '../../../../types';

export interface SupportedCreator extends User {
  amountInLIKE?: number;
  contentsCount?: number;
}

export interface MonthlyReportCivicLikerV1TemplateProps extends MonthlyReport {
  creatorsCount?: number;
  contentsCount?: number;
  supportedCreators?: SupportedCreator[];
}

import { Content, MonthlyReport, User } from '../../../../types';

export interface SubscribingCreator extends User {
  amount?: number;
}

export type SupportedContent = Content & User;

export interface MonthlyReportCivicLikerV2TemplateProps extends MonthlyReport {
  subject?: string;
  totalSupportedCreatorsBySubscription?: number;
  totalSupportedCreatorsByFund?: number;
  billingDateTimestamp?: number;
  subscribingCreators?: SubscribingCreator[];
  supportedContents?: SupportedContent[];
  supportedContentsRemainsCount?: number;
}

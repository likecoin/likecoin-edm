import { Content, Liker } from '../../../../types';

export interface SubscribingCreator extends Liker {
  amount?: number;
}

export type SupportedContent = Content & Liker;

export interface MonthlyReportCivicLikerV2TemplateProps {
  language?: string;
  avatarSrc?: string;
  isCivicLiker?: boolean;
  timestamp?: number;
  totalSupportedCreatorsBySubscription?: number;
  totalSupportedCreatorsByFund?: number;
  billingDateTimestamp?: number;
  subscribingCreators?: SubscribingCreator[];
  supportedContents?: SupportedContent[];
}

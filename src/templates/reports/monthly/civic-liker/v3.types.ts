import { MonthlyReport, User } from '../../../../types';

export interface SupportedCreator extends User {
  workCount?: number;
  likeAmount?: number;
}

export interface CivicLikerV3StatusBannerProps {
  isActive?: boolean;
  activeSince?: number;
}

export interface MonthlyReportCivicLikerV3TemplateProps extends MonthlyReport {
  subject?: string;
  activeSince?: number;
  totalSupportedAmount?: number;
  totalSupportedAmountInUSD?: number;
  balance?: number;
  balanceInUSD?: number;
  delegationRewards?: number;
  creatorsFundRewards?: number;
  supportedWorkCount?: number;
  supportedCreatorCount?: number;
  supportedCreators?: SupportedCreator[];
}

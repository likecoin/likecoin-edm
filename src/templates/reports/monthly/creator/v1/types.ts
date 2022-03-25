import { Content, MonthlyReport } from '../../../../../types';

export interface MonthlyReportCreatorTopContent extends Content {
  likesCount?: number;
}

export interface MonthlyReportCreatorTopContentRowProps
  extends MonthlyReportCreatorTopContent {
  isFirstChild?: boolean;
}

interface RewardsDetailsDataRow {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  value?: number;
  valueUnit?: React.ReactNode;
  diff?: number;
  diffUnit?: React.ReactNode;
}

export interface MonthlyReportCreatorRewardsDetailsColumnProps
  extends React.PropsWithChildren<{}> {
  title?: React.ReactNode;
  amountInLIKE?: number;
  amountInUSD?: number;
  dataRows?: RewardsDetailsDataRow[];
}

export interface MonthlyReportCreatorTemplateProps extends MonthlyReport {
  subject?: string;
  totalRewardsInLIKE?: number;
  totalRewardsInUSD?: number;
  totalRewardsDiffPercentStr?: string;
  subscriptionAmountInLIKE?: number;
  subscriptionAmountInUSD?: number;
  subscribersCount?: number;
  subscribersDiff?: number;
  legacySubscribersCount?: number;
  legacySubscribersDiff?: number;
  fundAmountInLIKE?: number;
  fundAmountInUSD?: number;
  civicLikersCount?: number;
  civicLikersDiff?: number;
  likersCount?: number;
  likersDiff?: number;
  topContents?: MonthlyReportCreatorTopContent[] | string;
}

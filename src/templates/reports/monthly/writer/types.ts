export interface MonthlyReportWriterTopContent {
  title?: string;
  imageSrc?: string;
  url?: string;
  likesCount?: number;
}

export interface WriterTopContentRowProps
  extends MonthlyReportWriterTopContent {
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

export interface RewardsDetailsColumnProps extends React.PropsWithChildren<{}> {
  title?: React.ReactNode;
  amountInLIKE?: number;
  amountInUSD?: number;
  dataRows?: RewardsDetailsDataRow[];
}

export interface MonthlyReportWriterTemplateProps {
  language?: string;
  likerID?: string;
  avatarSrc?: string;
  isCivicLiker?: boolean;
  timestamp?: number;
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
  topContents?: MonthlyReportWriterTopContent[] | string;
}

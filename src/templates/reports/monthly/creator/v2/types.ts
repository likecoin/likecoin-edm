import * as React from 'react';
import { Content, MonthlyReport, User } from '../../../../../types';

export interface MonthlyReportCreatorV2TopContent extends Content {
  likesAmount?: number;
  likersCount?: number;
  civicLikersCount?: number;
}

export interface MonthlyReportCreatorV2TemplateProps extends MonthlyReport {
  subject?: string;
  totalRewardsInLIKE?: number;
  totalRewardsInUSD?: number;
  totalRewardsDiffInPercent?: number;

  likersCount?: number;
  likersDiff?: number;
  civicLikersCount?: number;
  civicLikersDiff?: number;
  worksCount?: number;
  worksDiff?: number;
  likesCount?: number;
  likesDiffInPercent?: number;

  topSupporters?: User[] | string;
  topContents?: MonthlyReportCreatorV2TopContent[] | string;
}

export interface MonthlyReportCreatorV2StatsColumnProps {
  value?: number;
  isBold?: boolean;
  label?: React.ReactNode;
  diff?: number;
  isDiffInPercent?: boolean;
}

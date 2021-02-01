import { Liker } from '../../../../types';

export interface SupportedCreator extends Liker {
  amountInLIKE?: number;
  contentsCount?: number;
}

export interface MonthlyReportCivicLikerV1TemplateProps {
  language?: string;
  avatarSrc?: string;
  isCivicLiker?: boolean;
  timestamp?: number;
  creatorsCount?: number;
  contentsCount?: number;
  supportedCreators?: SupportedCreator[];
}

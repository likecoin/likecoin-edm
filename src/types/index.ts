export interface User {
  likerID?: string;
  displayName?: string;
  avatarSrc?: string;
  isCivicLiker?: boolean;
}

export interface Content {
  url?: string;
  title?: string;
  imageSrc?: string;
}

export interface MonthlyReport extends User {
  language?: string;
  timestamp?: number;
}

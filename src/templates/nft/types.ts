export interface NFTCreatorTemplateProps {
  subject?: string;
  language?: string;
  creatorLikerId?: string;
  creatorDisplayName?: string;
  creatorAvatarSrc?: string;
  creatorIsCivicLiker?: boolean;
  followerDisplayName?: string;
  unsubscribeLink?: string;
}

export interface NFTTemplateProps extends NFTCreatorTemplateProps {
  nftTitle?: string;
  nftCoverImageSrc?: string;
  nftURL?: string;
}

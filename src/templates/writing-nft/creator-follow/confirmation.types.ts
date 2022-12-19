export interface CreatorFollowTemplateProps {
  subject?: string;
  language?: string;
  creatorLikerId?: string;
  creatorDisplayName?: string;
  creatorAvatarSrc?: string;
  creatorIsCivicLiker?: boolean;
  followerDisplayName?: string;
  unsubscribeLink?: string;
}

export interface CreatorFollowConfirmationTemplateProps
  extends CreatorFollowTemplateProps {
  confirmationLink?: string;
}

export interface CreatorFollowPublishNewTemplateProps
  extends CreatorFollowTemplateProps {
  nftTitle?: string;
  nftCoverImageSrc?: string;
  nftURL?: string;
}

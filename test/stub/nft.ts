import { NFTNotifcationTransferTemplateProps } from '../../dist/templates/nft/notification/transfer';
import { NFTNotifcationPurchaseTemplateProps } from '../../dist/templates/nft/notification/purchase';
import { CreatorFollowConfirmationTemplateProps } from '../../dist/templates/nft/creator-follow/confirmation';
import { CreatorFollowPublishNewTemplateProps } from '../../dist/templates/nft/creator-follow/publish-new';

import {
  SAMPLE_IMAGE_URL,
  SAMPLE_LIKER_DISPLAY_NAME,
  SAMPLE_CREATOR_DISPLAY_NAME,
  SAMPLE_CREATOR_LIKER_ID,
  SAMPLE_URL,
  SAMPLE_TEXT,
  SAMPLE_LIKEE_ID,
  SAMPLE_LIKEE_DISPLAY_NAME,
} from './samples';

export const CreatorFollowConfirmationSampleData: CreatorFollowConfirmationTemplateProps = {
  creatorLikerId: SAMPLE_CREATOR_LIKER_ID,
  creatorDisplayName: SAMPLE_CREATOR_DISPLAY_NAME,
  creatorAvatarSrc: SAMPLE_IMAGE_URL,
  creatorIsCivicLiker: true,
  followerDisplayName: SAMPLE_LIKER_DISPLAY_NAME,
  confirmationLink: SAMPLE_URL,
  unsubscribeLink: SAMPLE_URL,
};

export const CreatorFollowPublishNewSampleData: CreatorFollowPublishNewTemplateProps = {
  ...CreatorFollowConfirmationSampleData,
  nftTitle: SAMPLE_TEXT,
  nftCoverImageSrc: SAMPLE_IMAGE_URL,
  nftURL: SAMPLE_URL,
};

export const NFTNotificationTransferSampleData: NFTNotifcationTransferTemplateProps = {
  ...CreatorFollowConfirmationSampleData,
  senderLikerId: SAMPLE_LIKEE_ID,
  senderDisplayName: SAMPLE_LIKEE_DISPLAY_NAME,
  senderAvatarSrc: SAMPLE_IMAGE_URL,
  senderIsCivicLiker: true,
  nftTitle: SAMPLE_TEXT,
  nftCoverImageSrc: SAMPLE_IMAGE_URL,
  nftURL: SAMPLE_URL,
};

export const NFTNotificationPurchaseSampleData: NFTNotifcationPurchaseTemplateProps = {
  ...CreatorFollowConfirmationSampleData,
  buyerLikerId: SAMPLE_LIKEE_ID,
  buyerDisplayName: SAMPLE_LIKEE_DISPLAY_NAME,
  buyerAvatarSrc: SAMPLE_IMAGE_URL,
  buyerIsCivicLiker: true,
  nftTitle: SAMPLE_TEXT,
  nftCoverImageSrc: SAMPLE_IMAGE_URL,
  nftURL: SAMPLE_URL,
};

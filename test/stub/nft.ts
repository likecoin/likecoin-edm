import { NFTNotificationTransferTemplateProps } from '../../dist/templates/nft/notification/transfer';
import { NFTNotificationPurchaseTemplateProps } from '../../dist/templates/nft/notification/purchase';
import { NFTNotificationPurchaseMultipleTemplateProps } from '../../dist/templates/nft/notification/purchase-multiple';
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
  SAMPLE_NFT_IMAGE_URL,
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
  nftCoverImageSrc: SAMPLE_NFT_IMAGE_URL,
  nftURL: SAMPLE_URL,
};

export const NFTNotificationTransferSampleData: NFTNotificationTransferTemplateProps = {
  ...CreatorFollowConfirmationSampleData,
  senderLikerId: SAMPLE_LIKEE_ID,
  senderDisplayName: SAMPLE_LIKEE_DISPLAY_NAME,
  senderAvatarSrc: SAMPLE_IMAGE_URL,
  senderIsCivicLiker: true,
  nftTitle: SAMPLE_TEXT,
  nftCoverImageSrc: SAMPLE_NFT_IMAGE_URL,
  nftURL: SAMPLE_URL,
  message: SAMPLE_TEXT,
};

export const NFTNotificationPurchaseSampleData: NFTNotificationPurchaseTemplateProps = {
  ...CreatorFollowConfirmationSampleData,
  buyerLikerId: SAMPLE_LIKEE_ID,
  buyerDisplayName: SAMPLE_LIKEE_DISPLAY_NAME,
  buyerAvatarSrc: SAMPLE_IMAGE_URL,
  buyerIsCivicLiker: true,
  priceInLIKE: 200000,
  nftTitle: SAMPLE_TEXT,
  nftCoverImageSrc: SAMPLE_NFT_IMAGE_URL,
  nftURL: SAMPLE_URL,
  message: SAMPLE_TEXT,
};

export const NFTNotificationPurchaseMultipleSampleData: NFTNotificationPurchaseMultipleTemplateProps = {
  unsubscribeLink: SAMPLE_URL,
  sellerDisplayName: SAMPLE_LIKER_DISPLAY_NAME,
  buyerLikerID: SAMPLE_LIKEE_ID,
  buyerDisplayName: SAMPLE_LIKEE_DISPLAY_NAME,
  buyerAvatarSrc: SAMPLE_IMAGE_URL,
  buyerIsCivicLiker: true,
  buyerMessage: SAMPLE_TEXT,
  purchasedItems: [
    {
      title: SAMPLE_TEXT,
      coverImageSrc: SAMPLE_NFT_IMAGE_URL,
      url: SAMPLE_URL,
      priceInLIKE: 2048,
    },
    {
      title: SAMPLE_TEXT,
      coverImageSrc: SAMPLE_NFT_IMAGE_URL,
      url: SAMPLE_URL,
      priceInLIKE: 1024,
    },
    {
      title: SAMPLE_TEXT,
      coverImageSrc: SAMPLE_NFT_IMAGE_URL,
      url: SAMPLE_URL,
      priceInLIKE: 64,
    },
    {
      title: SAMPLE_TEXT,
      coverImageSrc: SAMPLE_NFT_IMAGE_URL,
      url: SAMPLE_URL,
      priceInLIKE: 32,
    },
    {
      title: SAMPLE_TEXT,
      coverImageSrc: SAMPLE_NFT_IMAGE_URL,
      url: SAMPLE_URL,
      priceInLIKE: 16,
    },
    {
      title: SAMPLE_TEXT,
      coverImageSrc: SAMPLE_NFT_IMAGE_URL,
      url: SAMPLE_URL,
      priceInLIKE: 8,
    },
  ],
  totalPriceInLIKE: 3192,
};

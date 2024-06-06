import { NFTNotificationTransferTemplateProps } from '../../dist/templates/nft/notification/transfer';
import { NFTNotificationPurchaseTemplateProps } from '../../dist/templates/nft/notification/purchase';
import { NFTNotificationPurchaseMultipleTemplateProps } from '../../dist/templates/nft/notification/purchase-multiple';
import { CreatorFollowConfirmationTemplateProps } from '../../dist/templates/nft/creator-follow/confirmation';
import { CreatorFollowPublishNewTemplateProps } from '../../dist/templates/nft/creator-follow/publish-new';
import { NFTTwoContentWithMessageAndButtonTemplateProps } from '../../dist/templates/nft/two-content-with-message-and-button';

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

export const NFTTwoContentWithMessageAndButtonTemplateSampleData: NFTTwoContentWithMessageAndButtonTemplateProps = {
  title1: '領取你的電子書',
  title2: 'Claim your ebook',
  content1: `<p>親愛的讀者：</p>
  <p>恭喜你，你已成功領取你的電子書《XXX》。你可到 <a href="#">Liker Land 個人主頁</a>查看你的收藏，及閱讀內容。</p>`,
  content2: `<p>Dear reader,</p>
  <p>Congratulations! You have successfully claimed your ebook "<a href="#">XXX</a>". You can view your collection and read the content on your <a href="#">Liker Land profile</a>.</p>`,
  append1: `<p>如有任何疑問，歡迎<a href="#">聯絡客服</a>查詢。<br>感謝珍藏此書，願你享受閱讀的樂趣。</p>
  <p>Liker Land</p>`,
  append2: `<p>If you have any questions, please feel free to contact our <a href="#">Customer Service</a> for assistance.<br>
  Thank you for cherishing this book, and may you enjoy the pleasure of reading.</p>
  <p>Liker Land</p>`,
  messageTitle1: '突破出版的留言：',
  messageTitle2: 'Message from the publisher:',
  messageContent1: '感謝支持，2024 散步去！',
  messageContent2: 'Thank you for your support, 2024 to the moon!',
  buttonText1: '查看收藏',
  buttonText2: 'View Collection',
  buttonHref1: SAMPLE_URL,
  buttonHref2: SAMPLE_URL,
};

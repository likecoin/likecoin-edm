import { CreatorFollowConfirmationTemplateProps } from '../../src/templates/writing-nft/creator-follow/confirmation.types';

import {
  SAMPLE_IMAGE_URL,
  SAMPLE_LIKER_ID,
  SAMPLE_LIKER_DISPLAY_NAME,
  SAMPLE_URL,
} from './samples';

export const CreatorFollowConfirmationSampleData: CreatorFollowConfirmationTemplateProps = {
  creatorLikerId: SAMPLE_LIKER_ID,
  creatorDisplayName: SAMPLE_LIKER_DISPLAY_NAME,
  creatorAvatarSrc: SAMPLE_IMAGE_URL,
  creatorIsCivicLiker: true,
  followerDisplayName: SAMPLE_LIKER_DISPLAY_NAME,
  confirmationLink: SAMPLE_URL,
  unsubscribeLink: SAMPLE_URL,
};

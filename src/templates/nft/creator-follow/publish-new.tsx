import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { Link } from '../../../components/link';

import { NFTDefaultTemplate } from '../default';
import { NFTTemplateProps } from '../types';

export type CreatorFollowPublishNewTemplateProps = NFTTemplateProps;

export const CreatorFollowPublishNewTemplate = (
  props: CreatorFollowPublishNewTemplateProps
) => {
  const {
    creatorLikerId,
    creatorDisplayName = '',
    creatorAvatarSrc,
    creatorIsCivicLiker = false,
    nftTitle,
    nftURL,
  } = props;
  return (
    <NFTDefaultTemplate
      {...props}
      headerAvatarSrc={creatorAvatarSrc}
      headerAvatarLikerID={creatorLikerId}
      headerAvatarDisplayName={creatorDisplayName}
      headerAvatarIsCivicLiker={creatorIsCivicLiker}
      headerText={
        <FormattedMessage
          key="title"
          id="writing-nft_creator-follow_publish-new_title"
          values={{ displayName: creatorDisplayName }}
        />
      }
      body={
        <FormattedMessage
          id="writing-nft_creator-follow_publish-new_content"
          values={{
            a: () => (
              <Link href={nftURL} isWrapUtm={true}>
                {nftTitle}
              </Link>
            ),
          }}
        />
      }
      shouldShowCTA={true}
    />
  );
};

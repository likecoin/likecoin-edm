import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { Link } from '../../../components/link';

import { NFTDefaultTemplate, NFTDefaultTemplateProps } from '../default';

export interface NFTNotifcationPurchaseTemplateProps
  extends NFTDefaultTemplateProps {
  sellerLikerId?: string;
  sellerDisplayName?: string;
  sellerAvatarSrc?: string;
  sellerIsCivicLiker?: boolean;
}

export const NFTNotifcationPurchaseTemplate = (
  props: NFTNotifcationPurchaseTemplateProps
) => {
  const {
    sellerLikerId,
    sellerDisplayName = '',
    sellerAvatarSrc,
    sellerIsCivicLiker = false,
    nftTitle,
    nftURL,
  } = props;
  return (
    <NFTDefaultTemplate
      {...props}
      headerAvatarSrc={sellerAvatarSrc}
      headerAvatarDisplayName={sellerDisplayName}
      headerAvatarLikerID={sellerLikerId}
      headerAvatarIsCivicLiker={sellerIsCivicLiker}
      headerText={
        <FormattedMessage
          id="nft_notification_purchase_title"
          values={{ nftTitle }}
        />
      }
      body={
        <FormattedMessage
          id="nft_notification_purchase_content"
          values={{
            nft: () => (
              <Link href={nftURL} isWrapUtm={true}>
                {nftTitle}
              </Link>
            ),
            details: (text: string) => (
              <Link href={nftURL} isWrapUtm={true}>
                {text}
              </Link>
            ),
          }}
        />
      }
    />
  );
};

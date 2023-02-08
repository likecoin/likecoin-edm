import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { Link } from '../../../components/link';
import { LIKER_LAND_ROOT } from '../../../constants';

import { NFTDefaultTemplate, NFTDefaultTemplateProps } from '../default';

export interface NFTNotifcationTransferTemplateProps
  extends NFTDefaultTemplateProps {
  senderLikerId?: string;
  senderDisplayName?: string;
  senderAvatarSrc?: string;
  senderIsCivicLiker?: boolean;
}

export const NFTNotifcationTransferTemplate = (
  props: NFTNotifcationTransferTemplateProps
) => {
  const {
    senderLikerId,
    senderDisplayName = '',
    senderAvatarSrc,
    senderIsCivicLiker = false,
    nftTitle,
    nftURL,
  } = props;
  return (
    <NFTDefaultTemplate
      {...props}
      headerAvatarSrc={senderAvatarSrc}
      headerAvatarDisplayName={senderDisplayName}
      headerAvatarLikerID={senderLikerId}
      headerAvatarIsCivicLiker={senderIsCivicLiker}
      headerText={
        <FormattedMessage
          id="nft_notification_transfer_title"
          values={{ sender: senderDisplayName, nftTitle }}
        />
      }
      body={
        <FormattedMessage
          id="nft_notification_transfer_content"
          values={{
            sender: () => (
              <Link
                href={`${LIKER_LAND_ROOT}/${senderLikerId}`}
                isWrapUtm={true}
              >
                {senderLikerId}
              </Link>
            ),
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

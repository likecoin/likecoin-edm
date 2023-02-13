import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { LIKER_LAND_ROOT } from '../../../constants';
import * as Colors from '../../../constants/colors';

import { Link } from '../../../components/link';

import { NFTDefaultTemplate, NFTDefaultTemplateProps } from '../default';
import { formatNumber } from '../../../utils/number';

export interface NFTNotifcationPurchaseTemplateProps
  extends NFTDefaultTemplateProps {
  buyerLikerId?: string;
  buyerDisplayName?: string;
  buyerAvatarSrc?: string;
  buyerIsCivicLiker?: boolean;
  priceInLIKE?: number;
}

export const NFTNotifcationPurchaseTemplate = (
  props: NFTNotifcationPurchaseTemplateProps
) => {
  const {
    buyerLikerId,
    buyerDisplayName = '',
    buyerAvatarSrc,
    buyerIsCivicLiker = false,
    nftTitle,
    nftURL,
    priceInLIKE = 0,
  } = props;
  const formattedPrice = formatNumber(priceInLIKE);
  return (
    <NFTDefaultTemplate
      {...props}
      headerAvatarSrc={buyerAvatarSrc}
      headerAvatarDisplayName={buyerDisplayName}
      headerAvatarLikerID={buyerLikerId}
      headerAvatarIsCivicLiker={buyerIsCivicLiker}
      headerText={
        <FormattedMessage
          id="nft_notification_purchase_title"
          values={{ price: formattedPrice, nftTitle }}
        />
      }
      body={
        <FormattedMessage
          id="nft_notification_purchase_content"
          values={{
            buyer: () => (
              <Link
                href={`${LIKER_LAND_ROOT}/${buyerLikerId}`}
                isWrapUtm={true}
              >
                {buyerDisplayName}
              </Link>
            ),
            price: (unit: string) => (
              <strong style={{ color: Colors.LikeGreen }}>
                {formattedPrice} {unit}
              </strong>
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

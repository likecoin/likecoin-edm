import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { MjmlColumn, MjmlText } from 'mjml-react';

import * as Colors from '../../../constants/colors';

import { Avatar } from '../../../components/avatar';
import { WritingNFTCTASection } from '../../../components/cta-writing-nft';
import { FooterSection } from '../../../components/footer';
import { HeaderSection } from '../../../components/header';
import { TemplateBase } from '../../../components/template-base';
import { BasicSection } from '../../../components/sections/basic';
import { NFTWidget } from '../../../components/nft-widget';

import { formatNumber } from '../../../utils/number';
import { Link } from '../../../components/link';
import { LIKER_LAND_ROOT } from '../../../constants';

export interface NFTPurchaseItem {
  title?: string;
  coverImageSrc?: string;
  url?: string;
  priceInLIKE?: number;
}

export interface NFTNotificationPurchaseMultipleTemplateProps {
  subject?: string;
  language?: string;
  unsubscribeLink?: string;

  sellerLikerID?: string;
  sellerDisplayName?: string;
  sellerAvatarSrc?: string;
  sellerIsCivicLiker?: boolean;

  buyerLikerID?: string;
  buyerDisplayName?: string;
  buyerAvatarSrc?: string;
  buyerIsCivicLiker?: boolean;
  buyerMessage?: string;

  purchasedItems: NFTPurchaseItem[];

  totalPriceInLIKE?: number;
}

export const NFTNotificationPurchaseMultipleTemplate = ({
  subject,
  language,
  unsubscribeLink,

  sellerDisplayName,

  buyerLikerID,
  buyerDisplayName,
  buyerAvatarSrc,
  buyerIsCivicLiker,
  buyerMessage,

  purchasedItems = [],

  totalPriceInLIKE,
}: NFTNotificationPurchaseMultipleTemplateProps) => {
  const formattedTotalPrice = formatNumber(totalPriceInLIKE);
  return (
    <TemplateBase language={language} subject={subject}>
      <HeaderSection />
      <BasicSection
        backgroundColor={Colors.LikeGreen}
        paddingTop={48}
        paddingBottom={48}
      >
        <MjmlColumn>
          <MjmlText
            color="white"
            fontSize={24}
            fontWeight={600}
            align="left"
            paddingTop={24}
          >
            <FormattedMessage
              id="nft_notification_purchase_multiple_title"
              values={{
                price: formattedTotalPrice,
                count: purchasedItems.length,
              }}
            />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      <BasicSection paddingTop={48} paddingBottom={0}>
        <MjmlColumn>
          <MjmlText>
            <FormattedMessage
              id="greeting"
              values={{ name: sellerDisplayName }}
            />
          </MjmlText>
          <MjmlText paddingTop={24}>
            <FormattedMessage
              id="nft_notification_purchase_multiple_content"
              values={{
                buyer: () => (
                  <Link
                    href={`${LIKER_LAND_ROOT}/${buyerLikerID}`}
                    isWrapUtm={true}
                  >
                    {buyerDisplayName}
                  </Link>
                ),
                price: (unit: string) => (
                  <strong style={{ color: Colors.LikeGreen }}>
                    {formattedTotalPrice} {unit}
                  </strong>
                ),
              }}
            />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      {!!buyerMessage && (
        <BasicSection paddingTop={64} paddingLeft={64} paddingRight={64}>
          <MjmlColumn padding={16} backgroundColor="white" borderRadius={24}>
            <Avatar
              src={buyerAvatarSrc}
              likerID={buyerDisplayName}
              displayName={buyerLikerID}
              isCivicLiker={buyerIsCivicLiker}
              size={44}
              style={{ marginTop: -48 }}
            />
            <MjmlText paddingTop={16} paddingBottom={24} align="center">
              {buyerMessage}
            </MjmlText>
          </MjmlColumn>
        </BasicSection>
      )}
      <BasicSection paddingTop={32} paddingBottom={32}>
        <MjmlColumn width={320}>
          {purchasedItems.map((item, index) => {
            const { title, coverImageSrc, url, priceInLIKE } = item;
            return (
              <NFTWidget
                key={url}
                title={title}
                coverImageSrc={coverImageSrc}
                url={url}
                priceLabel={`${formatNumber(priceInLIKE)} LIKE`}
                style={{ marginTop: index > 0 ? 32 : 0 }}
              />
            );
          })}
        </MjmlColumn>
      </BasicSection>
      <WritingNFTCTASection />
      <FooterSection unsubscribeLink={unsubscribeLink} />
    </TemplateBase>
  );
};

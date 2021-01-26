import * as React from 'react';
import { MjmlColumn, MjmlText, MjmlImage } from 'mjml-react';
import { FormattedMessage } from 'react-intl';

import * as Colors from '../constants/colors';
import { getAssetPath } from '../utils/url';

import { Avatar } from '../components/avatar';
import { AppCTASection } from '../components/cta-app';
import { FooterSection } from '../components/footer';
import { HeaderSection } from '../components/header';
import { Link } from '../components/link';
import { BasicSection } from '../components/section';
import { TemplateBase } from '../components/template-base';

interface ReferralUserColumnProps {
  displayName?: string;
  avatarSrc?: string;
  isCivicLiker?: boolean;
  amount?: number;
}

const ReferralUserColumn = (props: ReferralUserColumnProps) => {
  const { displayName, avatarSrc, isCivicLiker = false, amount = 0 } = props;
  return (
    <MjmlColumn padding={8}>
      <Avatar src={avatarSrc} isCivicLiker={isCivicLiker} size={88} />
      <MjmlText
        color={Colors.LikeGreen}
        fontSize={18}
        fontWeight={600}
        align="center"
        paddingTop={8}
        paddingBottom={8}
      >
        {displayName}
      </MjmlText>
      <MjmlText fontSize={20} fontWeight={600} align="center">
        +{amount} LIKE
      </MjmlText>
    </MjmlColumn>
  );
};

export interface ReferralTxTemplateProps {
  language?: string;
  receiverLikerID?: string;
  refereeLikerID?: string;
  refereeDisplayName?: string;
  refereeAvatarSrc?: string;
  isRefereeCivicLiker?: boolean;
  refereeAmount?: number;
  referrerLikerID?: string;
  referrerDisplayName?: string;
  referrerAvatarSrc?: string;
  isReferrerCivicLiker?: boolean;
  referrerAmount?: number;
}

export const ReferralTxTemplate = ({
  language,
  receiverLikerID,
  refereeLikerID,
  refereeDisplayName,
  refereeAvatarSrc,
  isRefereeCivicLiker = false,
  refereeAmount = 0,
  referrerDisplayName,
  referrerAvatarSrc,
  isReferrerCivicLiker = false,
  referrerAmount = 0,
}: ReferralTxTemplateProps) => {
  const isReceiverReferee = receiverLikerID === refereeLikerID;
  return (
    <TemplateBase language={language}>
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
            align="center"
            paddingBottom={24}
          >
            <FormattedMessage id="referral-tx.title" />
          </MjmlText>
          <MjmlImage
            src={getAssetPath('/banners/referral-rewards.png')}
            width={288}
          />
          <MjmlText
            paddingTop={32}
            color={Colors.LikeCyan}
            fontSize={14}
            fontWeight={600}
            align="center"
          >
            <FormattedMessage
              id={`referral-tx.description.${
                isReceiverReferee ? 'referee' : 'referrer'
              }`}
              values={{
                span: () => (
                  <span style={{ color: 'white' }}>
                    {isReceiverReferee
                      ? referrerDisplayName
                      : refereeDisplayName}
                  </span>
                ),
                amount: isReceiverReferee ? refereeAmount : referrerAmount,
                br: () => <br />,
              }}
            />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      <BasicSection>
        <ReferralUserColumn
          displayName={referrerDisplayName}
          avatarSrc={referrerAvatarSrc}
          isCivicLiker={isReferrerCivicLiker}
          amount={referrerAmount}
        />
        <ReferralUserColumn
          displayName={refereeDisplayName}
          avatarSrc={refereeAvatarSrc}
          isCivicLiker={isRefereeCivicLiker}
          amount={refereeAmount}
        />
      </BasicSection>
      <BasicSection paddingTop={0}>
        <MjmlColumn>
          <MjmlText align="center" color={Colors.Grey9B}>
            <FormattedMessage
              id="referral-tx.check-wallet"
              values={{
                a: (title: string) => (
                  <Link
                    href="https://like.co/in/getapp"
                    style={{ textDecoration: 'underline' }}
                  >
                    {title}
                  </Link>
                ),
              }}
            />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      <AppCTASection />
      <FooterSection />
    </TemplateBase>
  );
};

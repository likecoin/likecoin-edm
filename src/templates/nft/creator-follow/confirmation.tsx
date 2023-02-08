import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { MjmlColumn, MjmlText } from 'mjml-react';

import * as Colors from '../../../constants/colors';

import { Avatar } from '../../../components/avatar';
import { WritingNFTCTASection } from '../../../components/cta-writing-nft';
import { FooterSection } from '../../../components/footer';
import { HeaderSection } from '../../../components/header';
import { Link } from '../../../components/link';
import { BasicSection } from '../../../components/sections/basic';
import { TemplateBase } from '../../../components/template-base';

import { NFTCreatorTemplateProps } from '../types';

export interface CreatorFollowConfirmationTemplateProps
  extends NFTCreatorTemplateProps {
  confirmationLink?: string;
}

export const CreatorFollowConfirmationTemplate = ({
  subject,
  language,
  creatorLikerId,
  creatorDisplayName = '',
  creatorAvatarSrc,
  creatorIsCivicLiker = false,
  followerDisplayName = '',
  confirmationLink,
  unsubscribeLink,
}: CreatorFollowConfirmationTemplateProps) => {
  return (
    <TemplateBase language={language} subject={subject}>
      <HeaderSection />
      <BasicSection
        backgroundColor={Colors.LikeGreen}
        paddingTop={48}
        paddingBottom={48}
      >
        <MjmlColumn>
          <Avatar
            src={creatorAvatarSrc}
            likerID={creatorLikerId}
            isCivicLiker={creatorIsCivicLiker}
            size={44}
            display="inline-block"
            align="left"
          />
          <MjmlText
            color="white"
            fontSize={24}
            fontWeight={600}
            align="left"
            paddingTop={24}
          >
            <FormattedMessage
              id="writing-nft_creator-follow_confirmation_title"
              values={{ displayName: creatorDisplayName }}
            />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      <BasicSection paddingTop={48} paddingBottom={0}>
        <MjmlColumn>
          <MjmlText>
            <FormattedMessage
              id="greeting"
              values={{ name: followerDisplayName }}
            />
          </MjmlText>
          <MjmlText paddingTop={24}>
            <FormattedMessage
              id="writing-nft_creator-follow_confirmation_content"
              values={{
                displayName: creatorDisplayName,
                a: (chunks: string) => (
                  <Link href={confirmationLink} isWrapUtm={true}>
                    {chunks}
                  </Link>
                ),
              }}
            />
          </MjmlText>
          <MjmlText paddingTop={24}>
            <Link href={confirmationLink}>{confirmationLink}</Link>
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      <WritingNFTCTASection />
      <FooterSection unsubscribeLink={unsubscribeLink} />
    </TemplateBase>
  );
};

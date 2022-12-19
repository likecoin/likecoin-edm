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

import { CreatorFollowPublishNewTemplateProps } from './confirmation.types';
import { NFTWidget } from '../../../components/nft-widget';

export const CreatorFollowPublishNewTemplate = ({
  subject,
  language,
  creatorLikerId,
  creatorDisplayName = '',
  creatorAvatarSrc,
  creatorIsCivicLiker = false,
  followerDisplayName = '',
  unsubscribeLink,
  nftTitle,
  nftCoverImageSrc,
  nftURL,
}: CreatorFollowPublishNewTemplateProps) => {
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
              id="writing-nft_creator-follow_publish-new_title"
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
              id="writing-nft_creator-follow_publish-new_content"
              values={{
                a: () => (
                  <Link href={nftURL} isWrapUtm={true}>
                    {nftTitle}
                  </Link>
                ),
              }}
            />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      <BasicSection paddingTop={32} paddingBottom={32}>
        <MjmlColumn>
          <NFTWidget
            title={nftTitle}
            coverImageSrc={nftCoverImageSrc}
            url={nftURL}
          />
        </MjmlColumn>
      </BasicSection>
      <WritingNFTCTASection />
      <FooterSection unsubscribeLink={unsubscribeLink} />
    </TemplateBase>
  );
};

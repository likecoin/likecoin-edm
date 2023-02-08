import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { MjmlColumn, MjmlText } from 'mjml-react';

import * as Colors from '../../constants/colors';

import { WritingNFTCTASection } from '../../components/cta-writing-nft';
import { FooterSection } from '../../components/footer';
import { HeaderSection } from '../../components/header';
import { NFTWidget } from '../../components/nft-widget';
import { BasicSection } from '../../components/sections/basic';
import { TemplateBase } from '../../components/template-base';

import { NFTTemplateProps } from './types';
import { Avatar } from '../../components/avatar';

export interface NFTDefaultTemplateProps extends NFTTemplateProps {
  headerAvatarSrc?: string;
  headerAvatarDisplayName?: string;
  headerAvatarLikerID?: string;
  headerAvatarIsCivicLiker?: boolean;
  headerText?: React.ReactNode;
  body?: React.ReactElement;
}

export const NFTDefaultTemplate = ({
  subject,
  language,
  headerAvatarSrc,
  headerAvatarDisplayName,
  headerAvatarLikerID,
  headerAvatarIsCivicLiker,
  headerText,
  body,
  followerDisplayName = '',
  unsubscribeLink,
  nftTitle,
  nftCoverImageSrc,
  nftURL,
}: NFTDefaultTemplateProps) => {
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
            src={headerAvatarSrc}
            likerID={headerAvatarDisplayName}
            displayName={headerAvatarLikerID}
            isCivicLiker={headerAvatarIsCivicLiker}
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
            {headerText}
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
          <MjmlText paddingTop={24}>{body}</MjmlText>
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

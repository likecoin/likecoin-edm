import * as React from 'react';
import { MjmlColumn, MjmlText } from 'mjml-react';

import * as Colors from '../constants/colors';

import { ContentSection } from '../components/content';
import { CivicLikerCTASection } from '../components/cta-civic-liker';
import { WritingNFTCTASection } from '../components/cta-writing-nft';
import { FooterSection } from '../components/footer';
import { HeaderSection } from '../components/header';
import { BasicSection } from '../components/sections/basic';
import { TemplateBase } from '../components/template-base';

export interface BasicV2TemplateProps {
  subject?: string;
  title?: string;
  titleTop?: React.ReactElement;
  subtitle?: string;
  subtitlePrepend?: React.ReactElement;
  avatarURL?: string;
  isCivicLiker?: boolean;
  content?: string;
  cta?: string;
  unsubscribeLink?: string;
  language?: string;
}

export const BasicV2Template = ({
  subject,
  title,
  titleTop,
  subtitle,
  subtitlePrepend,
  content,
  cta = '',
  unsubscribeLink,
  language,
}: BasicV2TemplateProps) => {
  return (
    <TemplateBase language={language} subject={subject}>
      <HeaderSection />
      <BasicSection
        backgroundColor={Colors.LikeGreen}
        paddingTop={48}
        paddingBottom={48}
      >
        <MjmlColumn>
          {titleTop}
          <MjmlText color="white" fontSize={36} fontWeight={600} align="left">
            {title}
          </MjmlText>
          {subtitle && (
            <MjmlText
              color={Colors.LighterCyan}
              fontSize={24}
              align="left"
              paddingTop={16}
            >
              {subtitlePrepend}
              {subtitle}
            </MjmlText>
          )}
        </MjmlColumn>
      </BasicSection>
      <ContentSection content={content} />
      {cta === 'civic-liker' && <CivicLikerCTASection />}
      {cta === 'writing-nft' && <WritingNFTCTASection />}
      <FooterSection unsubscribeLink={unsubscribeLink} />
    </TemplateBase>
  );
};

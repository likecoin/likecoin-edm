import * as React from 'react';
import { MjmlColumn, MjmlText } from 'mjml-react';

import * as Colors from '../constants/colors';

import { ContentSection } from '../components/content';
import { FooterV2Section } from '../components/footer-v2';
import { HeaderV2Section } from '../components/header-v2';
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
  unsubscribeLink?: string;
  language?: string;
  isFullHeaderLogo?: boolean;
}

export const BasicV2Template = ({
  subject,
  title,
  titleTop,
  subtitle,
  subtitlePrepend,
  content,
  unsubscribeLink,
  isFullHeaderLogo = true,
  language,
}: BasicV2TemplateProps) => {
  return (
    <TemplateBase
      language={language}
      subject={subject}
      textColor={Colors.Black13}
      bodyBackgroundColor={Colors.Black13}
      linkColor={Colors.Black13}
    >
      <HeaderV2Section isFullLogo={isFullHeaderLogo} />
        <BasicSection
          backgroundColor={Colors.GreyF9}
          borderBottom={`solid 2px ${Colors.Black13}`}
        >
          <MjmlColumn>
            {titleTop}
            <MjmlText
              color={Colors.Black13}
              fontSize={24}
              fontWeight={600}
              align="left"
            >
              {title}
            </MjmlText>
            {subtitle && (
              <MjmlText
                color={Colors.Black13}
                fontSize={20}
                align="left"
                paddingTop={16}
              >
                {subtitlePrepend}
                {subtitle}
              </MjmlText>
            )}
          </MjmlColumn>
        </BasicSection>
      <ContentSection paddingX={32} content={content} />
      <FooterV2Section unsubscribeLink={unsubscribeLink} />
    </TemplateBase>
  );
};

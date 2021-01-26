import * as React from 'react';
import { MjmlColumn, MjmlText, MjmlSpacer, MjmlImage } from 'mjml-react';

import * as Colors from '../constants/colors';

import { ContentSection } from '../components/content';
import { AppCTASection } from '../components/cta-app';
import { FooterSection } from '../components/footer';
import { HeaderSection } from '../components/header';
import { BasicSection } from '../components/section';
import { TemplateBase } from '../components/template-base';

export interface BasicTemplateProps {
  title?: string;
  titleTop?: React.ReactElement;
  subtitle?: string;
  subtitlePrepend?: React.ReactElement;
  avatarURL?: string;
  isCivicLiker?: boolean;
  content?: string;
  language?: string;
}

export const BasicTemplate = ({
  title,
  titleTop,
  subtitle,
  subtitlePrepend,
  content,
  language,
}: BasicTemplateProps) => {
  return (
    <TemplateBase language={language} isExtruded={true}>
      <HeaderSection />
      <BasicSection
        paddingTop={0}
        paddingBottom={0}
        paddingLeft={0}
        paddingRight={0}
        backgroundUrl="https://static.like.co/edm/templates/basic/header-top.jpg"
      >
        <MjmlColumn width={120} paddingLeft={0} paddingRight={0}>
          {titleTop || (
            <MjmlImage
              src="https://static.like.co/edm/likecoin-logo.png"
              width={120}
              height={120}
              borderRadius={60}
            />
          )}
        </MjmlColumn>
      </BasicSection>
      <BasicSection
        backgroundUrl="https://static.like.co/edm/templates/basic/header-middle.jpg"
        paddingTop={16}
        paddingBottom={16}
      >
        <MjmlColumn>
          {title && (
            <MjmlText align="center" fontSize={24}>
              {title}
            </MjmlText>
          )}
          {subtitle && (
            <MjmlText
              align="center"
              fontSize={36}
              color={Colors.LikeGreen}
              paddingTop={16}
            >
              {subtitlePrepend}
              {subtitle}
            </MjmlText>
          )}
        </MjmlColumn>
      </BasicSection>
      <BasicSection
        paddingTop={0}
        paddingBottom={0}
        paddingLeft={0}
        paddingRight={0}
        backgroundUrl="https://static.like.co/edm/templates/basic/header-bottom.jpg"
      >
        <MjmlColumn>
          <MjmlSpacer height={8} />
        </MjmlColumn>
      </BasicSection>
      <ContentSection content={content} />
      <AppCTASection />
      <FooterSection />
    </TemplateBase>
  );
};

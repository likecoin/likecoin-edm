import * as React from 'react';
import {
  Mjml,
  MjmlHead,
  MjmlBody,
  MjmlColumn,
  MjmlText,
  MjmlAttributes,
  MjmlAll,
  MjmlSpacer,
  MjmlImage,
} from 'mjml-react';

import { ContentSection } from '../components/content';
import { BasicSection } from '../components/section';
import { HeaderSection } from '../components/header';
import { AppCTASection } from '../components/cta-app';
import { FooterSection } from '../components/footer';

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
    <Mjml>
      <MjmlHead>
        <MjmlAttributes>
          <MjmlAll
            fontFamily="Arial"
            fontSize="14px"
            color="#4a4a4a"
            padding={0}
          />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody backgroundColor="white" width={616}>
        <HeaderSection />
        <BasicSection
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
          paddingLeft={32}
          paddingRight={32}
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
                color="#28646e"
                paddingTop={16}
              >
                {subtitlePrepend}
                {subtitle}
              </MjmlText>
            )}
          </MjmlColumn>
        </BasicSection>
        <BasicSection backgroundUrl="https://static.like.co/edm/templates/basic/header-bottom.jpg">
          <MjmlColumn>
            <MjmlSpacer height={8} />
          </MjmlColumn>
        </BasicSection>
        <ContentSection content={content} />
        <AppCTASection language={language} />
        <FooterSection language={language} />
      </MjmlBody>
    </Mjml>
  );
};

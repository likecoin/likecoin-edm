import React from 'react';

import {
  Mjml,
  MjmlHead,
  MjmlBody,
  MjmlColumn,
  MjmlImage,
  MjmlText,
  MjmlAttributes,
  MjmlAll,
  MjmlRaw,
  MjmlSpacer,
} from 'mjml-react';

import { getPriceEmojiURL } from '../utils/civic';

import { ContentSection } from '../components/content';
import { BasicSection } from '../components/section';
import { HeaderSection } from '../components/header';
import { AppCTASection } from '../components/cta-app';
import { FooterSection } from '../components/footer';

export interface NewSupporterTemplateOptions {
  title?: string;
  billingPlan?: string;
  amount?: number;
  avatarURL?: string;
  isCivicLiker?: boolean;
  content?: string;
  helpCenterText?: string;
  unsubscribeText?: string;
}

export const compileNewSupporterTemplate = ({
  title,
  billingPlan,
  amount,
  avatarURL,
  isCivicLiker = false,
  content,
  helpCenterText,
  unsubscribeText,
}: NewSupporterTemplateOptions) => {
  const priceEmojiURL = getPriceEmojiURL(amount);
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
            {isCivicLiker ? (
              <MjmlRaw>
                <div
                  style={{
                    textAlign: 'center',
                    padding: 8,
                    backgroundImage:
                      'url(https://static.like.co/avatar/halo/civic-liker.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                  }}
                >
                  <img
                    src={avatarURL}
                    style={{
                      width: 102,
                      height: 102,
                      borderRadius: '100%',
                      objectFit: 'cover',
                      border: '2px solid #ccc',
                    }}
                  />
                </div>
              </MjmlRaw>
            ) : (
              <MjmlImage
                src={avatarURL}
                width={102}
                height={102}
                borderRadius={56}
                border="2px solid #ccc"
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
            {billingPlan && (
              <MjmlText
                align="center"
                fontSize={36}
                color="#28646e"
                paddingTop={16}
              >
                {priceEmojiURL && (
                  <img
                    src={priceEmojiURL}
                    alt={billingPlan}
                    style={{ height: 48, verticalAlign: 'middle' }}
                  />
                )}
                {billingPlan}
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
        <AppCTASection />
        <FooterSection {...{ helpCenterText, unsubscribeText }} />
      </MjmlBody>
    </Mjml>
  );
};

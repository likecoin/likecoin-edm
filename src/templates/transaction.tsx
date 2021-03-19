import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { MjmlColumn, MjmlText, MjmlSpacer, MjmlImage } from 'mjml-react';

import * as Colors from '../constants/colors';
import { getAssetPath } from '../utils/url';

import { AppCTASection } from '../components/cta-app';
import { FooterSection } from '../components/footer';
import { HeaderSection } from '../components/header';
import { BasicSection } from '../components/sections/basic';
import { TemplateBase } from '../components/template-base';

export interface TransactionTemplateProps {
  subject?: string;
  language?: string;
  toDisplayName?: string;
  fromDisplayName?: string;
  viewTxURL?: string;
  amount: string;
}

export const TransactionTemplate = ({
  subject,
  language,
  toDisplayName,
  fromDisplayName,
  viewTxURL,
  amount,
}: TransactionTemplateProps) => {
  return (
    <TemplateBase language={language} isExtruded={true} subject={subject}>
      <HeaderSection />
      <BasicSection
        paddingTop={0}
        paddingBottom={0}
        paddingLeft={0}
        paddingRight={0}
        backgroundUrl={getAssetPath('/templates/basic/header-top.jpg')}
      >
        <MjmlColumn width={120} paddingLeft={0} paddingRight={0}>
          <MjmlImage
            src={getAssetPath('/tx.png')}
            width={120}
            height={120}
            borderRadius={60}
          />
        </MjmlColumn>
      </BasicSection>
      <BasicSection
        backgroundUrl={getAssetPath('/templates/basic/header-middle.jpg')}
        paddingTop={16}
        paddingBottom={16}
      >
        <MjmlColumn>
          <MjmlText
            align="center"
            fontSize={36}
            color={Colors.LikeGreen}
            paddingTop={16}
          >
            <FormattedMessage
              id="transaction.subtitle"
              values={{
                amount: amount,
              }}
            />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      <BasicSection
        paddingTop={0}
        paddingBottom={0}
        paddingLeft={0}
        paddingRight={0}
        backgroundUrl={getAssetPath('/templates/basic/header-bottom.jpg')}
      >
        <MjmlColumn>
          <MjmlSpacer height={8} />
        </MjmlColumn>
      </BasicSection>
      <BasicSection
        paddingTop={32}
        paddingLeft={40}
        paddingRight={40}
        paddingBottom={0}
      >
        <MjmlColumn>
          <MjmlText fontSize={18}>
            <FormattedMessage
              id="transaction.content"
              values={{
                br: () => <br />,
                name: toDisplayName,
                amount: amount,
                fromUser: fromDisplayName,
              }}
            />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      <BasicSection
        paddingTop={32}
        paddingLeft={40}
        paddingRight={40}
        paddingBottom={0}
      >
        <MjmlColumn>
          <MjmlText fontSize={18} color={Colors.LikeGreen}>
            {viewTxURL}
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      <AppCTASection />
      <FooterSection />
    </TemplateBase>
  );
};

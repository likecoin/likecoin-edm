import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  MjmlColumn,
  MjmlText,
  MjmlSpacer,
  MjmlImage,
  MjmlButton,
} from 'mjml-react';

import * as Colors from '../constants/colors';
import { getAssetPath } from '../utils/url';

import { AppCTASection } from '../components/cta-app';
import { FooterSection } from '../components/footer';
import { HeaderSection } from '../components/header';
import { BasicSection } from '../components/sections/basic';
import { TemplateBase } from '../components/template-base';

export interface ResetPasswordTemplateProps {
  subject?: string;
  language?: string;
}

export const ResetPasswordTemplate = ({
  language,
}: ResetPasswordTemplateProps) => {
  return (
    <TemplateBase language={language} isExtruded={true}>
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
            src={getAssetPath('/security.png')}
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
            <FormattedMessage id="reset-password.subtitle" />
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
              id="reset-password.content"
              values={{
                br: () => <br />,
                name: '{display_name}',
              }}
            />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      <BasicSection padding-top="18px" padding-bottom="0px">
        <MjmlColumn>
          <MjmlButton
            fontFamily="Arial"
            backgroundColor={Colors.LighterCyan}
            color={Colors.LikeGreen}
            fontSize="14px"
            borderRadius="12px"
            width="256px"
            href="{reset_password_link}"
          >
            <FormattedMessage id="reset-password.cta" />
          </MjmlButton>
        </MjmlColumn>
      </BasicSection>
      <BasicSection padding-top="10px" padding-bottom="0px">
        <MjmlColumn>
          <MjmlText
            align="center"
            fontSize={14}
            color={Colors.Grey9B}
            paddingTop={0}
          >
            <FormattedMessage
              id="reset-password.text"
              values={{
                br: () => <br />,
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

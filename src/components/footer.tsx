import * as React from 'react';
import { MjmlButton, MjmlColumn, MjmlDivider, MjmlText } from 'mjml-react';
import { FormattedMessage } from 'react-intl';

import * as Colors from '../constants/colors';
import { wrapUtm } from '../utils/url';

import { BasicSection } from './sections/basic';
import { HelpCenterLink } from './help-center-link';
import { UnsubscribeLink } from './unsubscribe-link';
import { SocialElements } from './social-elements';

export const FooterSection = ({
  unsubscribeLink,
  shouldShowDivider = true,
}: {
  unsubscribeLink?: string;
  shouldShowDivider?: boolean;
}) => {
  return (
    <>
      <BasicSection
        backgroundColor="white"
        backgroundUrl={undefined}
        paddingBottom={24}
      >
        <MjmlColumn>
          {shouldShowDivider && (
            <MjmlDivider
              paddingTop={0}
              paddingBottom={32}
              borderColor={Colors.PaleCyan}
              borderWidth={2}
            />
          )}
          <MjmlButton
            color={Colors.LighterCyan}
            fontWeight={600}
            backgroundColor={Colors.LikeGreen}
            borderRadius={14}
            href={wrapUtm('https://3ook.com/store', { source: 'edm-footer' })}
            rel="noopener noreferrer"
          >
            <FormattedMessage id="footer_browse_store" />
          </MjmlButton>
          <SocialElements paddingTop={16} paddingBottom={16} />
          <MjmlText align="center" padding={4}>
            <HelpCenterLink utmSource="edm-footer" />
          </MjmlText>
          {!!unsubscribeLink && (
            <MjmlText align="center" padding={4}>
              <UnsubscribeLink href={unsubscribeLink} utmSource="edm-footer" />
            </MjmlText>
          )}
        </MjmlColumn>
      </BasicSection>
    </>
  );
};

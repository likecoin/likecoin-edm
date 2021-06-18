import * as React from 'react';
import { MjmlColumn, MjmlImage, MjmlGroup, MjmlText } from 'mjml-react';
import { FormattedMessage } from 'react-intl';
import * as Colors from '../constants/colors';
import { GetAppLink } from '../components/link';

import { getAssetPath } from '../utils/url';

import { BasicSection } from './sections/basic';

export const HeaderSection = () => {
  return (
    <BasicSection
      paddingTop={32}
      paddingRight={40}
      paddingLeft={40}
      paddingBottom={32}
    >
      <MjmlGroup>
        <MjmlColumn width="65%">
          <MjmlImage
            align="left"
            width={145}
            src={getAssetPath(
              '/banners/like-coin-press-kit-liker-land-dark@3x.png'
            )}
          />
        </MjmlColumn>
        <MjmlColumn width="15%" cssClass="hide_on_mobile">
          <MjmlText
            color={Colors.Grey4A}
            fontSize={14}
            fontWeight={600}
            lineHeight="3.0"
            align="right"
          >
            <FormattedMessage id="download" />
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn width="10%" cssClass="hide_on_mobile">
          <MjmlText fontSize={14} lineHeight="3.0" align="center">
            <GetAppLink operatingSystem="iOS"></GetAppLink>
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn width="10%" cssClass="hide_on_mobile">
          <MjmlText fontSize={14} lineHeight="3.0">
            <GetAppLink operatingSystem="Android"></GetAppLink>
          </MjmlText>
        </MjmlColumn>
      </MjmlGroup>
    </BasicSection>
  );
};

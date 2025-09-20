import * as React from 'react';
import { MjmlButton, MjmlColumn, MjmlText } from 'mjml-react';
import { FormattedMessage } from 'react-intl';

import * as Colors from '../constants/colors';
import { wrapUtm } from '../utils/url';

import { BasicSection } from './sections/basic';
import { UnsubscribeLinkV2 } from './unsubscribe-link-v2';
import { SocialElements } from './social-elements';

export const FooterV2Section = ({
  unsubscribeLink,
}: {
  unsubscribeLink?: string;
}) => {
  return (
    <>
      <BasicSection
        backgroundColor={Colors.GreyF9}
        borderTop={`solid 2px ${Colors.Black13}`}
        borderBottom={`solid 12px ${Colors.LikeCyan}`}
      >
        <MjmlColumn>
          <MjmlButton
            color={Colors.Black13}
            fontWeight={600}
            border={`solid 2px ${Colors.Black13}`}
            backgroundColor="transparent"
            borderRadius={8}
            href={wrapUtm('https://3ook.com/store', { source: 'edm-footer' })}
            rel="noopener noreferrer"
          >
            <FormattedMessage id="footer_browse_store" />
          </MjmlButton>
          <SocialElements paddingTop={16} />
          {!!unsubscribeLink && (
            <MjmlText align="center" paddingTop={12} fontSize={10}>
              <UnsubscribeLinkV2 href={unsubscribeLink} />
            </MjmlText>
          )}
        </MjmlColumn>
      </BasicSection>
    </>
  );
};

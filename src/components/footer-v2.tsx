import * as React from 'react';
import { MjmlColumn, MjmlText } from 'mjml-react';

import * as Colors from '../constants/colors';

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

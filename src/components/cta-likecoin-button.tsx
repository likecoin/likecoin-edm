import * as React from 'react';
import { MjmlColumn, MjmlTable } from 'mjml-react';
import { FormattedMessage } from 'react-intl';

import * as Colors from '../constants/colors';

import { getAssetPath } from '../utils/url';

import { BasicSection, BasicSectionProps } from './sections/basic';

const MAX_WIDTH = 360;

export const LikeCoinButtonCTA = (props: BasicSectionProps) => {
  return (
    <BasicSection
      backgroundColor="white"
      paddingTop={24}
      paddingBottom={48}
      {...props}
    >
      <MjmlColumn>
        <MjmlTable>
          <tr>
            <td>
              <img
                src={getAssetPath('/banners/cta-likecoin-button.png')}
                style={{
                  display: 'block',
                  width: '100%',
                  margin: '0 auto',
                  maxWidth: MAX_WIDTH,
                }}
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>
              <div
                style={{
                  boxSizing: 'border-box',
                  maxWidth: MAX_WIDTH,
                  margin: '0 auto',
                  padding: 24,
                  paddingTop: 0,
                  color: 'white',
                  fontSize: 16,
                  textAlign: 'center',
                  backgroundColor: Colors.LikeGreen,
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                }}
              >
                <FormattedMessage id="cta.likecoin-button" />
              </div>
            </td>
          </tr>
        </MjmlTable>
      </MjmlColumn>
    </BasicSection>
  );
};

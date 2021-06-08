import * as React from 'react';
import {
  BorderProps,
  ClassNameProps,
  MjmlColumn,
  MjmlSectionProps,
  MjmlTable,
  PaddingProps,
} from 'mjml-react';

import { getAssetPath } from '../utils/url';

import { BasicSection, BasicSectionProps } from './sections/basic';

const MAX_WIDTH = 218;

export const ClassicBadge = (
  props: BasicSectionProps &
    MjmlSectionProps &
    BorderProps &
    PaddingProps &
    ClassNameProps
) => {
  return (
    <BasicSection
      backgroundColor="white"
      paddingTop={32}
      paddingBottom={24}
      {...props}
    >
      <MjmlColumn>
        <MjmlTable>
          <tr>
            <td>
              <img
                src={getAssetPath('/badges/civic-liker-icon@3x.png')}
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
        </MjmlTable>
      </MjmlColumn>
    </BasicSection>
  );
};

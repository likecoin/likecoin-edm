import * as React from 'react';
import { MjmlColumn, MjmlText } from 'mjml-react';

import { BasicSection } from './sections/basic';

export const ContentSection = ({
  content,
  paddingTop = 32,
  paddingX = 40,
  paddingBottom = 32,
}: {
  content?: string;
  paddingTop?: number;
  paddingX?: number;
  paddingBottom?: number;
}) => {
  return (
    <BasicSection
      paddingTop={paddingTop}
      paddingLeft={paddingX}
      paddingRight={paddingX}
      paddingBottom={paddingBottom}
    >
      <MjmlColumn>
        <MjmlText>
          {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
        </MjmlText>
      </MjmlColumn>
    </BasicSection>
  );
};

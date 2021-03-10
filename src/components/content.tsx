import * as React from 'react';
import { MjmlColumn, MjmlText } from 'mjml-react';

import { BasicSection } from './sections/basic';

export const ContentSection = ({
  content,
  paddingBottom,
}: {
  content?: string;
  paddingBottom?: number;
}) => {
  return (
    <BasicSection
      paddingTop={32}
      paddingLeft={40}
      paddingRight={40}
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

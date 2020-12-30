import * as React from 'react';
import { MjmlColumn, MjmlText } from 'mjml-react';

import { BasicSection } from './section';

export const ContentSection = ({ content }: { content?: string }) => {
  return (
    <BasicSection
      paddingTop={32}
      paddingLeft={32}
      paddingRight={32}
      paddingBottom={32}
    >
      <MjmlColumn>
        <MjmlText>
          {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
        </MjmlText>
      </MjmlColumn>
    </BasicSection>
  );
};

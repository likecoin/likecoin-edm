import * as React from 'react';

import { MjmlColumn, MjmlImage, MjmlText } from 'mjml-react';

import { getAssetPath, wrapUtm } from '../utils/url';

import { BasicSection, BasicSectionProps } from './sections/basic';
import { FormattedMessage, useIntl } from 'react-intl';

export const WritingNFTCTASection = (props: BasicSectionProps) => {
  const intl = useIntl();
  const bannerSrc = getAssetPath(`/banners/cta-writing-nft.jpg`);
  return (
    <BasicSection paddingLeft={16} paddingRight={16} {...props}>
      <MjmlColumn>
        <MjmlText
          paddingBottom={16}
          align="center"
          fontSize={20}
          fontWeight={600}
        >
          <FormattedMessage id="cta.writing-nft.title" />
        </MjmlText>
        <MjmlImage
          src={bannerSrc}
          href={wrapUtm('https://liker.land/campaign/writing-nft')}
          alt={intl.formatMessage({ id: 'cta.writing-nft.title' })}
          width={400}
          borderRadius={24}
        />
      </MjmlColumn>
    </BasicSection>
  );
};

import * as React from 'react';
import { MjmlButton, MjmlColumn, MjmlImage, MjmlText } from 'mjml-react';
import { FormattedMessage, useIntl } from 'react-intl';

import { LIKER_LAND_ROOT } from '../constants';
import * as Colors from '../constants/colors';

import { getAssetPath, wrapUtm } from '../utils/url';

import { BasicSection, BasicSectionProps } from './sections/basic';

export interface WritingNFTCTASectionProps extends BasicSectionProps {
  isButton?: boolean;
  likerID?: string;
}

export const WritingNFTCTASection = ({
  isButton = false,
  likerID,
  ...props
}: WritingNFTCTASectionProps) => {
  const intl = useIntl();
  const url = wrapUtm(
    likerID ? `${LIKER_LAND_ROOT}/${likerID}` : `${LIKER_LAND_ROOT}/writing-nft`
  );
  if (isButton) {
    return (
      <BasicSection paddingLeft={16} paddingRight={16} {...props}>
        <MjmlColumn>
          <MjmlButton
            color={Colors.LikeGreen}
            fontWeight={600}
            backgroundColor={Colors.LighterCyan}
            borderRadius={14}
            href={url}
            rel="noopener noreferrer"
          >
            <FormattedMessage id="cta.writing-nft.title" />
          </MjmlButton>
        </MjmlColumn>
      </BasicSection>
    );
  }

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
          href={url}
          alt={intl.formatMessage({ id: 'cta.writing-nft.title' })}
          width={400}
          borderRadius={24}
        />
      </MjmlColumn>
    </BasicSection>
  );
};

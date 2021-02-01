import * as React from 'react';
import { MjmlColumn, MjmlImage, MjmlRaw, MjmlText } from 'mjml-react';
import { FormattedMessage, useIntl } from 'react-intl';

import { LIKER_LAND_ROOT } from '../constants';
import * as Colors from '../constants/colors';
import { getAssetPath } from '../utils/url';

import { BasicSection } from './sections/basic';
import { Link } from './link';

export interface SponsorLinkCTASectionProps {
  likerID?: string;
}

export const SponsorLinkCTASection = (props: SponsorLinkCTASectionProps) => {
  const { likerID } = props;
  const intl = useIntl();
  const bannerSrc = getAssetPath(
    `/banners/cta-sponsor-link/${intl.locale}.png`
  );
  return (
    <BasicSection backgroundColor="white">
      <MjmlColumn>
        <MjmlImage
          src={bannerSrc}
          width={400}
          alt={intl.formatMessage({ id: 'cta.sponsor-link.banner.alt' })}
        />
        <MjmlText color={Colors.LikeGreen} fontSize={18} align="center">
          <MjmlRaw>
            <div
              style={{
                border: `${Colors.LikeCyan} 2px solid`,
                borderRadius: 8,
                marginTop: 8,
                padding: 8,
              }}
            >
              {`${LIKER_LAND_ROOT}/${likerID}`}
            </div>
          </MjmlRaw>
        </MjmlText>
        <MjmlText
          paddingTop={8}
          fontSize={12}
          color={Colors.Grey9B}
          align="center"
        >
          <FormattedMessage
            id="cta.sponsor-link.hint"
            values={{
              a: (text: string) => (
                <Link href={`${LIKER_LAND_ROOT}/creators`}>{text}</Link>
              ),
            }}
          />
        </MjmlText>
      </MjmlColumn>
    </BasicSection>
  );
};

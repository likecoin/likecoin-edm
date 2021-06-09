import {
  MjmlColumn,
  MjmlGroup,
  MjmlImage,
  MjmlText,
  MjmlWrapper,
} from 'mjml-react';
import * as React from 'react';
import { FormattedNumber } from 'react-intl';

import * as Colors from '../../constants/colors';
import { getAssetPath } from '../../utils/url';

import { BasicSection } from './basic';

interface NumberColumnProps {
  value?: number;
  label?: React.ReactNode;
  width?: number | string;
}

const NumberColumn = (props: NumberColumnProps) => {
  const { value = 0, label, width } = props;
  return (
    <MjmlColumn width={width}>
      <MjmlText
        color={Colors.LikeGreen}
        fontSize={42}
        fontWeight={600}
        align="center"
      >
        <FormattedNumber value={value} />
      </MjmlText>
      <MjmlText color={Colors.Grey9B} fontSize={16} align="center">
        {label}
      </MjmlText>
    </MjmlColumn>
  );
};

export interface TwoNumbersSectionProps {
  title?: React.ReactNode;
  value1?: number;
  label1?: React.ReactNode;
  value2?: number;
  label2?: React.ReactNode;
  shouldStackOnMobile?: boolean;
}

export const TwoNumbersSection = (props: TwoNumbersSectionProps) => {
  const {
    title,
    value1,
    label1,
    value2,
    label2,
    shouldStackOnMobile = true,
  } = props;
  return (
    <MjmlWrapper>
      <BasicSection paddingBottom={24} backgroundColor="white">
        <MjmlColumn>
          <MjmlText fontSize={16} fontWeight={600} align="center">
            {title}
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      {shouldStackOnMobile ? (
        <BasicSection paddingTop={0} backgroundColor="white">
          <NumberColumn value={value1} label={label1} />
          <MjmlColumn width={72} padding={24}>
            <MjmlImage width={24} src={getAssetPath('/icons/plus.png')} />
          </MjmlColumn>
          <NumberColumn value={value2} label={label2} />
        </BasicSection>
      ) : (
        <BasicSection paddingTop={0} backgroundColor="white">
          <MjmlGroup>
            <NumberColumn value={value1} label={label1} width="40%" />
            <MjmlColumn
              width="20%"
              paddingTop={24}
              paddingLeft={10}
              paddingRight={10}
            >
              <MjmlImage width={24} src={getAssetPath('/icons/plus.png')} />
            </MjmlColumn>
            <NumberColumn value={value2} label={label2} width="40%" />
          </MjmlGroup>
        </BasicSection>
      )}
    </MjmlWrapper>
  );
};

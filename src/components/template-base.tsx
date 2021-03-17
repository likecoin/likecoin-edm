import * as React from 'react';
import {
  Mjml,
  MjmlHead,
  MjmlBody,
  MjmlAttributes,
  MjmlAll,
  MjmlText,
  MjmlBreakpoint,
  MjmlRaw,
  MjmlStyle,
} from 'mjml-react';

import * as Colors from '../constants/colors';
import { getAssetPath } from '../utils/url';

import { IntlProvider } from '../i18n';

function getThemeConfig(opts: { isExtruded?: boolean } = {}) {
  const { isExtruded = false } = opts;
  const templateWidth = isExtruded ? 616 : 600;
  return {
    templateWidth,
    sectionWidth: templateWidth,
    sectionPaddingX: isExtruded ? 40 : 32,
    sectionBgURL: isExtruded ? getAssetPath('/templates/basic/bg.jpg') : '',
    sectionBgColor: isExtruded ? 'white' : Colors.GreyF7,
  };
}

const ThemeContext = React.createContext(getThemeConfig());

export const useTheme = () => React.useContext(ThemeContext);

export interface TemplateBaseProps extends React.PropsWithChildren<{}> {
  isExtruded?: boolean;
  language?: string;
}

export const TemplateBase = (props: TemplateBaseProps) => {
  const { isExtruded = false, language } = props;
  const theme = getThemeConfig({ isExtruded });
  return (
    <IntlProvider language={language}>
      <ThemeContext.Provider value={theme}>
        <Mjml>
          <MjmlHead>
            <MjmlAttributes>
              <MjmlAll
                fontFamily="Arial"
                fontSize="14px"
                color={Colors.Grey4A}
                padding={0}
              />
              <MjmlText lineHeight="1.5" />
            </MjmlAttributes>

            <MjmlStyle>
              {`
            @media (prefers-color-scheme: dark) {
                .dark-text {
                  background-color: black; 
                  color: white;
                  }`}
            </MjmlStyle>
            <MjmlBreakpoint width={576} />
            <MjmlRaw>
              <meta name="color-scheme" content="light" />
              <meta name="supported-color-schemes" content="light" />
            </MjmlRaw>
          </MjmlHead>
          <MjmlBody backgroundColor="white" width={theme.templateWidth}>
            {props.children}
          </MjmlBody>
        </Mjml>
      </ThemeContext.Provider>
    </IntlProvider>
  );
};

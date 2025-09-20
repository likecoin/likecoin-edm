import * as React from 'react';
import {
  Mjml,
  MjmlHead,
  MjmlBody,
  MjmlAttributes,
  MjmlAll,
  MjmlText,
  MjmlBreakpoint,
  MjmlTitle,
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
    sectionBgColor: isExtruded ? Colors.White : Colors.GreyF7,
  };
}

const ThemeContext = React.createContext(getThemeConfig());

export const useTheme = () => React.useContext(ThemeContext);

export interface TemplateBaseProps extends React.PropsWithChildren<{}> {
  subject?: string;
  isExtruded?: boolean;
  language?: string;
  textColor?: string;
  bodyBackgroundColor?: string;
  linkColor?: string;
}

export const TemplateBase = (props: TemplateBaseProps) => {
  const {
    isExtruded = false,
    language,
    subject = '',
    textColor = Colors.Grey4A,
    bodyBackgroundColor = Colors.White,
    linkColor = Colors.LikeGreen,
  } = props;
  const theme = getThemeConfig({ isExtruded });
  return (
    <IntlProvider language={language}>
      <ThemeContext.Provider value={theme}>
        <Mjml>
          <MjmlHead>
            <MjmlTitle>{subject}</MjmlTitle>
            <MjmlAttributes>
              <MjmlAll
                fontFamily="Arial"
                fontSize="14px"
                color={textColor}
                padding={0}
              />
              <MjmlText lineHeight="1.5" />
            </MjmlAttributes>
            <MjmlStyle>
              {`
                a {
                  color: ${linkColor};
                }
                @media only screen and (max-width: 480px) { 
                  *[class~=hide_on_mobile] { display: none !important;} 
                  *[class~=hoverTable] { table-layout: auto !important;}
                }
              `}
            </MjmlStyle>
            <MjmlBreakpoint width={576} />
          </MjmlHead>
          <MjmlBody
            backgroundColor={bodyBackgroundColor}
            width={theme.templateWidth}
          >
            {props.children}
          </MjmlBody>
        </Mjml>
      </ThemeContext.Provider>
    </IntlProvider>
  );
};

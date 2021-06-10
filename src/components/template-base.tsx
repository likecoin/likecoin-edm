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
    sectionBgColor: isExtruded ? 'white' : Colors.GreyF7,
  };
}

const ThemeContext = React.createContext(getThemeConfig());

export const useTheme = () => React.useContext(ThemeContext);

export interface TemplateBaseProps extends React.PropsWithChildren<{}> {
  subject?: string;
  isExtruded?: boolean;
  language?: string;
}

export const TemplateBase = (props: TemplateBaseProps) => {
  const { isExtruded = false, language, subject = '' } = props;
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
                color={Colors.Grey4A}
                padding={0}
              />
              <MjmlText lineHeight="1.5" />
            </MjmlAttributes>
            <MjmlStyle>
              {`
                  @media only screen and (max-width: 480px) { 
                    *[class~=hide_on_mobile] { display: none !important;} 
                    *[class~=header_columns_left] { width: 45% !important;}
                    *[class~=header_columns_right] { width: 55% !important;}
                    *[class~=hoverTable] { table-layout: auto !important;}
                    
                  }
                `}
            </MjmlStyle>
            <MjmlBreakpoint width={576} />
          </MjmlHead>
          <MjmlBody backgroundColor="white" width={theme.templateWidth}>
            {props.children}
          </MjmlBody>
        </Mjml>
      </ThemeContext.Provider>
    </IntlProvider>
  );
};

import * as React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import messages from './translations';

function normalizedLanguage(language?: string) {
  switch (language) {
    case 'en':
      return 'en';

    case 'cn':
      return 'cn';

    case 'zh':
    default:
      return 'zh';
  }
}

export function IntlProvider(
  props: React.PropsWithChildren<{ language?: string }>
) {
  const language = normalizedLanguage(props.language);

  return (
    <ReactIntlProvider
      messages={messages[language]}
      locale={language}
      onError={err => {
        if (err.code === 'MISSING_DATA') return;
        console.error(err);
      }}
    >
      {props.children}
    </ReactIntlProvider>
  );
}

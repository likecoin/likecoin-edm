import * as React from 'react';
import { MjmlRaw } from 'mjml-react';

import * as Colors from '../constants/colors';

import { Link } from './link';

export interface NFTWidgetProps {
  title?: string;
  coverImageSrc?: string;
  url?: string;
  priceLabel?: string;
  style?: React.CSSProperties;
}

export const NFTWidget = ({
  title,
  coverImageSrc,
  url,
  priceLabel,
  style,
}: NFTWidgetProps) => {
  return (
    <MjmlRaw>
      <table
        style={{
          width: '100%',
          borderRadius: 14,
          backgroundColor: '#ffffff',
          border: `2px solid ${Colors.GreyD8}`,
          display: 'block',
          fontSize: 16,
          lineHeight: 1.5,
          ...style,
        }}
      >
        <tr>
          <td style={{ padding: 16 }}>
            <table style={{ width: '100%' }}>
              <tr>
                <td style={{ padding: 0 }}>
                  <Link href={url} isWrapUtm={true}>
                    <img
                      src={coverImageSrc}
                      alt={title}
                      style={{
                        width: '100%',
                        display: 'block',
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      }}
                    />
                  </Link>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: Colors.GreyF7,
                    padding: 16,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <Link
                    href={url}
                    isWrapUtm={true}
                    style={{ textDecoration: 'none' }}
                  >
                    <strong
                      style={{
                        color: '#000000',
                        fontFamily: 'Arial',
                      }}
                    >
                      {title}
                    </strong>
                  </Link>
                  {!!priceLabel && (
                    <p
                      style={{
                        color: Colors.LikeGreen,
                        fontSize: 14,
                        fontFamily: 'Arial',
                        fontWeight: 600,
                      }}
                    >
                      {priceLabel}
                    </p>
                  )}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </MjmlRaw>
  );
};

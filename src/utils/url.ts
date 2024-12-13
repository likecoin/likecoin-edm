import { ASSETS_ROOT } from '../constants';

export function wrapUtm(
  url: string,
  {
    medium = 'email',
    source = 'edm',
  }: {
    medium?: string;
    source?: string;
  } = {}
) {
  return `${url}${
    url.includes('?') ? '&' : '?'
  }utm_medium=${medium}&utm_source=${source}`;
}

export function getAssetPath(path: string = '') {
  return `${ASSETS_ROOT}${path}`;
}

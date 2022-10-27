import { ASSETS_ROOT } from '../constants';

export function wrapUtm(url: string) {
  return `${url}${
    url.includes('?') ? '&' : '?'
  }utm_medium=email&utm_source=email`;
}

export function getAssetPath(path: string = '') {
  return `${ASSETS_ROOT}${path}`;
}

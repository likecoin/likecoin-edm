import { ASSETS_ROOT } from '../constants';

export function wrapUtm(url?: string, prefix: string = '?') {
  return `${url}${prefix}utm_medium=email&utm_source=email`;
}

export function getAssetPath(path: string = '') {
  return `${ASSETS_ROOT}${path}`;
}

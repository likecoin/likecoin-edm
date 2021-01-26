export const ASSETS_ROOT =
  process.env.NODE_ENV === 'production'
    ? 'https://static.like.co/edm'
    : 'http://localhost:3000/static';

export const DEFAULT_AVATAR_URL = `${ASSETS_ROOT}/default-avatar.jpg`;

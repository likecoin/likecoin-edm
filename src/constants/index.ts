export const ASSETS_ROOT =
  process.env.NODE_ENV === 'production'
    ? 'https://static.like.co/edm'
    : `http://localhost:${process.env.PORT || '3000'}/static`;

export const DEFAULT_AVATAR_URL = `${ASSETS_ROOT}/default-avatar.jpg`;

export const LIKER_LAND_ROOT = 'https://liker.land';

export const CIVIC_LIKER_STAKING_URL =
  'https://dao.like.co/validators/cosmosvaloper1jxpfche2386a6m0kvfpj6xq9zlrjtuqwzda6rn';

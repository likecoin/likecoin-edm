export function getPriceEmojiName(price = 0) {
  if (price >= 100) return 'champagne';
  if (price >= 10) return 'cake';
  if (price > 0) return 'coffee';
  return '';
}

export function getPriceEmojiURL(price = 0) {
  const name = getPriceEmojiName(price);
  if (name) {
    return `https://static.like.co/edm/emoji/${name}.png`
  }
  return '';
}

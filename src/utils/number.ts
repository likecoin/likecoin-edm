const smallNumFormatter = new Intl.NumberFormat('en-US', {
  // @ts-ignore
  maximumFractionDigits: 2,
});

const largeNumFormatter = new Intl.NumberFormat('en-US', {
  // @ts-ignore
  notation: 'compact',
  maximumFractionDigits: 2,
});

export function formatNumber(num: number = 0, options: { isFull?: boolean } = {}) {
  return (!options.isFull && num >= 100000
    ? largeNumFormatter
    : smallNumFormatter
  ).format(num);
}

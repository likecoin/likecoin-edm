export function parseArray<T>(input: string | T[] = []) {
  let array: T[];
  try {
    if (typeof input === 'string') {
      array = JSON.parse(input);
    } else {
      array = input;
    }
    if (!Array.isArray(array)) {
      throw new Error('INVALID_ARRAY');
    }
  } catch {
    array = [];
  }
  return array;
}

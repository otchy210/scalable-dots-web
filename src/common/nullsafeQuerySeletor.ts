export const nullsafeQuerySelector = <T>(query: string): T => {
  const element = document.querySelector(query);
  if (!element) {
    throw new Error(`Not found element: ${query}`);
  }
  return element as unknown as T;
};

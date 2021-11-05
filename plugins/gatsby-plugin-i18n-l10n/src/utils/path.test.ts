import { addLocalePrefix, trimRightSlash } from './path';

describe('trimRightSlash', () => {
  it('should remove the trim the right slash', () => {
    const trimmed = trimRightSlash('https://example.com/');
    expect(trimmed).toBe('https://example.com');
  });
});

describe('addLocalePrefix', () => {
  it("adds locale as prefix if it's not the default locale", () => {
    const prefixed = addLocalePrefix('/path/to/rome', 'it', 'it', 'en');
    expect(prefixed).toBe('/it/path/to/rome');
  });
  it("adds no locale if it's default locale", () => {
    const prefixed = addLocalePrefix('/path/to/rome', 'it', 'it', 'it');
    expect(prefixed).toBe('/path/to/rome');
  });
});

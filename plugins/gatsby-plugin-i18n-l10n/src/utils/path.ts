import { defaultLanguage, Language, languages, slugTranslation } from '../i18n';

export const trimRightSlash = (path: string) => {
  return path === '/' ? path : path.replace(/\/$/, '');
};

export const addLanguagePrefix = (path: string, language: string) => {
  return language !== defaultLanguage ? `/${language}${path}` : path;
};

export const translatePagePaths = (path: string) => {
  const paths: { language: Language; path: string }[] = [];

  languages.forEach((language) => {
    const trimmedPath = trimRightSlash(path);
    const newPath = slugTranslation[language][trimmedPath] ?? trimmedPath;
    paths.push({ language, path: addLanguagePrefix(newPath, language) });
  });

  return paths;
};

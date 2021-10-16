import { Helmet } from "react-helmet";

type I18nHeadProps = {
  currentLocale: string;
}

export default function I18nHead({currentLocale}: I18nHeadProps) {
  return <Helmet>
    <html lang={currentLocale} />
  </Helmet>
}
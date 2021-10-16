import React from 'react';
import { FormattedMessage } from 'react-intl';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <FormattedMessage id="language" />
    </DefaultLayout>
  );
}

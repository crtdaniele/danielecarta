import React from 'react';
import { Div, Title, Text, Spacer } from '../../../../_shared/components';
import { useTranslation } from 'react-i18next';

const TitlePage = () => {
  const { t } = useTranslation();

  return (
    <Div>
      <Spacer height="60px" />
      <Title textAlign="center" weight="400" variant="h2">
        {t('snippetJs.titlePage')}
      </Title>
      <Text textAlign="center">{t('snippetJs.textPage')}</Text>
      <Spacer height="40px" />
    </Div>
  );
};

export default TitlePage;

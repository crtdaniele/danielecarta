import React, { useEffect, useState } from 'react';
import { Div } from '../../../../_shared/components';
import { DataStore } from '@aws-amplify/datastore';
import { SnippetJS } from '../../../../models';
import styles from './styles';
import PreCode from '../../../../_shared/components/PreCode';

const TabLists = () => {
  const [codes, setCodes] = useState<string | undefined>('');

  const getSnippet = async () => {
    const models = await DataStore.query(SnippetJS);
    if (models.length) {
      setCodes(models[0].snippet);
    }
  };

  useEffect(() => {
    getSnippet();
  }, []);

  return (
    <Div style={styles.wrapper}>
      <PreCode>{codes}</PreCode>
    </Div>
  );
};

export default TabLists;

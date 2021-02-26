import React, { useEffect, useState } from 'react';
import { Div } from '../../../_shared/components';
import { DataStore } from '@aws-amplify/datastore';
import { SnippetJS } from '../../../models';
import SyntaxHighlighter from 'react-syntax-highlighter';
import monokai from 'react-syntax-highlighter/dist/esm/styles/hljs/monokai';
import styles from './styles';

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
      <SyntaxHighlighter
        language="javascript"
        style={monokai}
        wrapLongLines={true}
      >
        {codes}
      </SyntaxHighlighter>
    </Div>
  );
};

export default TabLists;

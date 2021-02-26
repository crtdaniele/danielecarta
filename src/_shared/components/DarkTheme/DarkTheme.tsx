import React, { useContext } from 'react';
import { HiOutlineLightBulb, HiLightBulb } from 'react-icons/hi';
import { ThemeContext } from 'styled-components';
import { Absolute } from '../../theme/components/absolute';
import { styles } from './styles';

const DarkTheme = () => {
  const theme = useContext(ThemeContext);

  const turnOnOrOff = (selectedTheme: string) => {
    theme.setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
  };

  return (
    <Absolute top="20px" right="20px">
      {theme.mode === 'light' && (
        <HiLightBulb style={styles.light} onClick={() => turnOnOrOff('dark')} />
      )}
      {theme.mode === 'dark' && (
        <HiOutlineLightBulb
          style={styles.dark}
          onClick={() => turnOnOrOff('light')}
        />
      )}
    </Absolute>
  );
};

export default DarkTheme;

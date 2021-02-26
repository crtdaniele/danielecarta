import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeStyle: React.FC = ({ children }) => {
  const current = localStorage.getItem('theme');
  const [theme, setTheme] = useState(current || 'light');

  return (
    <ThemeProvider theme={{ mode: theme, setTheme: setTheme }}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeStyle;

import React, { useEffect, useState } from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from '@material-ui/core/styles';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';
import { Button, CssBaseline, Paper, Container } from '@material-ui/core';

function App() {
  const [currentTheme, setCurrentTheme] = useState();

  useEffect(() => {
    if (currentTheme) {
      localStorage.setItem('theme', currentTheme.name);
    }
  }, [currentTheme]);

  useEffect(() => {
    const savedThemeName = localStorage.getItem('theme');

    switch (savedThemeName) {
      case 'lightTheme':
        setCurrentTheme(lightTheme);
        break;
      case 'darkTheme':
        setCurrentTheme(darkTheme);
        break;
      default:
        setCurrentTheme(lightTheme);
    }
  }, []);

  return currentTheme ? (
    <div className={currentTheme.name}>
      <React.StrictMode>
        <ThemeProvider
          theme={responsiveFontSizes(createMuiTheme(currentTheme))}
        >
          <CssBaseline />

          <Container className="py-4">
            <Paper>
              <Container className="py-4">
                <h1 className="mt-0">React template by Bill Kampouroudis</h1>

                <p className="mt-0">
                  This template was created using{' '}
                  <a
                    href="https://create-react-app.dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Create React App
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://material-ui.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Material UI
                  </a>
                </p>

                <h2>Themes</h2>

                <p>
                  Below you can change the selected theme. There are two
                  different variations, light and dark. You can edit the current
                  themes or create new ones. There is a detailed documentation
                  for theming that can be found here:{' '}
                  <a
                    href="https://material-ui.com/customization/theming/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>
                </p>

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className="mr-2"
                  onClick={() => setCurrentTheme(lightTheme)}
                >
                  Light theme
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => setCurrentTheme(darkTheme)}
                >
                  Dark theme
                </Button>
              </Container>
            </Paper>
          </Container>
        </ThemeProvider>
      </React.StrictMode>
    </div>
  ) : null;
}

export default App;

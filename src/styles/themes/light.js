import theme from './main';

const lightTheme = {
  ...theme,

  name: 'light-theme',

  palette: {
    ...theme.palette,

    type: 'light'
  }
};

export default lightTheme;

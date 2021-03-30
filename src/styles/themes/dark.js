import theme from './main';

const darkTheme = {
  ...theme,

  name: 'dark-theme',

  palette: {
    ...theme.palette,

    type: 'dark'
  }
};

export default darkTheme;

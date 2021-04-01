import theme from './main';

const darkTheme = {
  ...theme,

  name: 'darkTheme',

  palette: {
    ...theme.palette,

    type: 'dark'
  }
};

export default darkTheme;

import theme from './main';

const lightTheme = {
  ...theme,

  name: 'lightTheme',

  palette: {
    ...theme.palette,

    type: 'light'
  }
};

export default lightTheme;

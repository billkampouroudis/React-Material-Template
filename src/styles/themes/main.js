import scss from '../_variables.module.scss';

const theme = {
  breakpoints: {
    values: {
      xs: scss.breakpointXs,
      sm: scss.breakpointSm,
      md: scss.breakpointMd,
      lg: scss.breakpointLg,
      xl: scss.breakpointXl
    }
  },
  palette: {
    primary: {
      light: scss.primaryLight,
      main: scss.primaryMain,
      dark: scss.primaryDark
    },
    secondary: {
      light: scss.secondaryLight,
      main: scss.secondaryMain,
      dark: scss.secondaryDark
    },
    type: 'light'
  },
  shape: {
    borderRadius: scss.borderRadius
  },
  typography: {
    fontSize: 16,
    fontFamily: '"Open Sans", sans-serif'
  }
};

export default theme;

import scss from '../_variables.module.scss';
import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

const fontSizeToNumber = (text) => {
  return Number(text.replace('rem', '').replace('em', '').replace('px', ''));
};

const theme = {
  ...defaultTheme,

  breakpoints: {
    ...defaultTheme.breakpoints,

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
    error: {
      light: scss.errorLight,
      main: scss.errorMain,
      dark: scss.errorDark
    },
    warning: {
      light: scss.warningLight,
      main: scss.warningMain,
      dark: scss.warningDark
    },
    info: {
      light: scss.infoLight,
      main: scss.infoMain,
      dark: scss.infoDark
    },
    success: {
      light: scss.successLight,
      main: scss.successMain,
      dark: scss.successDark
    }
  },

  typography: {
    ...defaultTheme.typography,

    htmlFontSize: fontSizeToNumber(scss.htmlFontSize),
    fontSize: fontSizeToNumber(scss.fontSize),
    fontFamily: scss.fontFamily,
    fontWeightLight: scss.fontWeightLight,
    fontWeightRegular: scss.fontWeightRegular,
    fontWeightMedium: scss.fontWeightMedium,
    fontWeightBold: scss.fontWeightBold,
    h1: {
      fontFamily: scss.h1FontFamily,
      fontWeight: scss.h1FontWeight,
      fontSize: scss.h1FontSize,
      lineHeight: scss.h1LineHeight,
      letterSpacing: scss.h1LetterSpacing
    },
    h2: {
      fontFamily: scss.h2FontFamily,
      fontWeight: scss.h2FontWeight,
      fontSize: scss.h2FontSize,
      lineHeight: scss.h2LineHeight,
      letterSpacing: scss.h2LetterSpacing
    },
    h3: {
      fontFamily: scss.h3FontFamily,
      fontWeight: scss.h3FontWeight,
      fontSize: scss.h3FontSize,
      lineHeight: scss.h3LineHeight,
      letterSpacing: scss.h3LetterSpacing
    },
    h4: {
      fontFamily: scss.h4FontFamily,
      fontWeight: scss.h4FontWeight,
      fontSize: scss.h4FontSize,
      lineHeight: scss.h4LineHeight,
      letterSpacing: scss.h4LetterSpacing
    },
    h5: {
      fontFamily: scss.h5FontFamily,
      fontWeight: scss.h5FontWeight,
      fontSize: scss.h5FontSize,
      lineHeight: scss.h5LineHeight,
      letterSpacing: scss.h5LetterSpacing
    },
    h6: {
      fontFamily: scss.h6FontFamily,
      fontWeight: scss.h6FontWeight,
      fontSize: scss.h6FontSize,
      lineHeight: scss.h6LineHeight,
      letterSpacing: scss.h6LetterSpacing
    },
    subtitle1: {
      fontFamily: scss.subtitle1FonFamily,
      fontWeight: scss.subtitle1FontWeight,
      fontSize: scss.subtitle1FontSize,
      lineHeight: scss.subtitle1LineHeight,
      letterSpacing: scss.subtitle1LetterSpacing
    },
    subtitle2: {
      fontFamily: scss.subtitle2FontFamily,
      fontWeight: scss.subtitle2FontWeight,
      fontSize: scss.subtitle2FontSize,
      lineHeight: scss.subtitle2LineHeight,
      letterSpacing: scss.subtitle2LetterSpacing
    },
    body1: {
      fontFamily: scss.body1FontFamily,
      fontWeight: scss.body1FontWeight,
      fontSize: scss.body1FontSize,
      lineHeight: scss.body1LineHeight,
      letterSpacing: scss.body1LetterSpacing
    },
    body2: {
      fontFamily: scss.body2FontFamily,
      fontWeight: scss.body2FontWeight,
      fontSize: scss.body2FontSize,
      lineHeight: scss.body2LineHeight,
      letterSpacing: scss.body2LetterSpacing
    },
    button: {
      fontFamily: scss.buttonFontFamily,
      fontWeight: scss.buttonFontWeight,
      fontSize: scss.buttonFontSize,
      lineHeight: scss.buttonLineHeight,
      letterSpacing: scss.buttonLetterSpacing,
      textTransform: scss.buttonTextTransform
    },
    caption: {
      fontFamily: scss.captionFontFamily,
      fontWeight: scss.captionFontWeight,
      fontSize: scss.captionFontSize,
      lineHeight: scss.captionLineHeight,
      letterSpacing: scss.captionLetterSpacing
    },
    overline: {
      fontFamily: scss.overlineFontFamily,
      fontWeight: scss.overlineFontWeight,
      fontSize: scss.overlineFontSize,
      lineHeight: scss.overlineLineHeight,
      letterSpacing: scss.overlineLetterSpacing,
      textTransform: scss.overlineTextTransform
    }
  },

  shape: {
    borderRadius: scss.borderRadius
  },

  transitions: {
    ...defaultTheme.transitions,

    duration: {
      shortest: scss.durationShortest,
      shorter: scss.durationShorter,
      short: scss.durationShort,
      standard: scss.durationStandard,
      complex: scss.durationComplex,
      enteringScreen: scss.durationEnteringScreen,
      leavingScreen: scss.durationLeavingScreen
    },
    zIndex: {
      mobileStepper: scss.zMobileStepper,
      speedDial: scss.zSpeedDial,
      appBar: scss.zAppBar,
      modal: scss.zModal,
      snackbar: scss.zSnackbar,
      tooltip: scss.zTooltip
    }
  }
};

export default theme;

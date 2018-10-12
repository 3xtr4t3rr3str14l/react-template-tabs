import { createMuiTheme } from '@material-ui/core/styles';
// import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import purple from '@material-ui/core/colors/purple';


const overwrites = {
  palette: {
    primary1Color: '#afb42b',
    alternateTextColor: '#afb42b',
  //   primary1Color: '#8bc34a',
  //   primary2Color: '#bf360c',
  //   accent1Color: '#d84315',
  //   accent2Color: '#90a4ae',
  //   primary3Color: '#757575',
  //   accent3Color: '#ff5722',
  //   canvasColor: '#212121',
  },
  typography: {
    fontFamily: 'RavieFont',
  },
};
export default createMuiTheme({ overwrites });

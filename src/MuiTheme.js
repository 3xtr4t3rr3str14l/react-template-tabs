import { createMuiTheme } from '@material-ui/core/styles';


const overwrites = {
  palette: {
    primary1Color: '#afb42b',
    alternateTextColor: '#afb42b',
  },
  typography: {
    fontFamily: 'RavieFont',
  },
};
export default createMuiTheme({ overwrites });

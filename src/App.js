import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import MyMuiTheme from './MuiTheme';
import VisibleView from './containers/VisibleView';
import actions from './actions';
import TopBar from './components/TopBar';
import bambooBg from './images/greenBamboo.jpg';

const styles = {
  content: {
    margin: 'auto',
    width: '50%',
    backgroundColor: 'burlywood',
  },
  background: {
    backgroundImage: `url(${bambooBg})`,
    height: 'inherit',
    paddingTop: '20px',
  },
};

class App extends React.Component {
  componentWillMount() {
    const config = {
      version: '1.0.0',
      // url: 'https://aliwuebalwjcbalwkjfdaslkh.com/',
      // service: {
      //   login: '',
      // },
    };
    this.props.setConfig(config);
  }

  render() {
    return (
      <MuiThemeProvider theme={MyMuiTheme}>
        <div style={styles.background}>
          <div style={styles.content}>
            <TopBar />
            <div>
              <VisibleView />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  setConfig: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setConfig: (config) => {
    dispatch(actions.setConfig(config));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(App);

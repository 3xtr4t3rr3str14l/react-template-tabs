import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import MyMuiTheme from './MuiTheme';
import VisibleView from './containers/VisibleView';
import actions from './actions';
import TopBar from './components/TopBar';
import greenBamboo from './images/greenBamboo.jpg';
import bambooFloor from './images/bambooFloor.jpg';

const styles = {
  content: {
    margin: 'auto',
    width: '81%',
    // backgroundColor: 'burlywood',
    backgroundImage: `url(${bambooFloor})`,
  },
  background: {
    backgroundImage: `url(${greenBamboo})`,
    height: '100%',
    paddingTop: '20px',
  },
  visibleView: {
    paddingBottom: '30px',
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
      <MuiThemeProvider theme={MyMuiTheme} >
        <div style={styles.background}>
          <div style={styles.content}>
            <TopBar />
            <div style={styles.visibleView}>
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

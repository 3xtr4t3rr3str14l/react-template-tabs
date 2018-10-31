import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import MyMuiTheme from './MuiTheme';
import { setConfig } from './actions';
import TopBar from './components/TopBar';
import rainbowBamboo from './images/rainbowBamboo.jpg';
import bambooCovering from './images/bambooCovering.jpg';

const styles = {
  background: {
    backgroundImage: `url(${rainbowBamboo})`,
    paddingTop: '5px',
    paddingBottom: '20px',
    minHeight: '100%',
    width: 'fit-content',
    backgroundRepeat: 'round',
    minWidth: '100%',
  },
  content: {
    margin: 'auto',
    backgroundImage: `url(${bambooCovering})`,
    backgroundRepeat: 'round',
    backgroundSize: 'cover',
    boxShadow: '0px 12px 13px 10px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    marginTop: '0px',
    marginBottom: '30px',
    marginLeft: '90px',
    marginRight: '90px',
  },
  visibleView: {
    paddingBottom: '30px',
    paddingTop: '12px',
  },
};

class App extends React.Component {
  componentWillMount() {
    const config = {
      version: '1.0.0',
      url: 'https://api.emailjs.com/api/v1.0/email/send',
      service: {
        sendmail: '',
      },
      customOrderData: {
        service_id: 'gmail',
        template_id: 'template_yYjE84ME',
        user_id: 'user_uoAncUIB4AD9NWyLIl8iJ',
        template_params: {},
      },
      proShopOrderData: {
        service_id: 'gmail',
        template_id: 'pro_shop',
        user_id: 'user_uoAncUIB4AD9NWyLIl8iJ',
        template_params: {},
      },
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
              {this.props.children}
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
    dispatch(setConfig(config));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(App);

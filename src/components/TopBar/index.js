import React from 'react';
import { connect } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import actions from '../../actions';
import hibiscus from '../../images/hibiscus.png';

const styles = {
  disclaimer: {
    fontSize: '10px',
    margin: 'auto',
    width: '50%',
    textAlign: 'center',
  },
  header: {
    display: 'inline-flex',
  },
  titleText: {
    textAlign: 'center',
    color: 'red',
    fontFamily: 'Ravie',
    fontSize: '80px',
    margin: 'auto',
    width: '50%',
  },
  hibiscus: {
    width: '15%',
    height: '15%',
    padding: '15px',
  },
};

const Header = props => (
  <div>
    <div style={styles.disclaimer}>Bamboo Tobacco Bongs are Intended for Tobacco use only</div>
    <div style={styles.header} onClick={() => props.onClick('HOME')} role="button" tabIndex={0}>
      <img src={hibiscus} alt="Hibiscus Flower" style={styles.hibiscus} />
      <div style={styles.titleText}>Pooka Bongs</div>
      <img src={hibiscus} alt="Hibiscus Flower" style={styles.hibiscus} />
    </div>
  </div>
);

const Menu = props => (
  <Tabs /* value={value} onChange={this.handleChange} */ >
    <Tab
      label="About Us"
      href="#about"
      onClick={() => props.onClick('ABOUT')}
    />
    <Tab
      label="Pipes"
      href="#pipes"
      onClick={() => props.onClick('PIPES')}
    />
    <Tab
      label="Swag"
      href="#swag"
      onClick={() => props.onClick('SWAG')}
    />
    <Tab
      label="Contact"
      href="#contact"
      onClick={() => props.onClick('CONTACT')}
    />
    <Tab
      label="Events"
      href="#events"
      onClick={() => props.onClick('EVENTS')}
    />
    <Tab
      label="Gallery"
      href="#gallery"
      onClick={() => props.onClick('GALLERY')}
    />
  </Tabs>
);

const TopBar = props => (
  <div>
    {Header(props)}
    {Menu(props)}
  </div>
);

const mapDispatchToProps = dispatch => ({
  onClick: (filter) => {
    dispatch(actions.setVisibilityFilter(filter));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(TopBar);

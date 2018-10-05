import React from 'react';
import { connect } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import actions from '../../actions';
import hibiscus from '../../images/hibiscus.png';

const styles = {
  disclaimer: {
    fontSize: '10px',
    margin: 'auto',
    width: '50%',
    textAlign: 'center',
    paddingTop: '10px',
  },
  header: {
    display: 'inline-flex',
  },
  titleText: {
    textAlign: 'center',
    color: 'red',
    fontFamily: 'ravie',
    fontSize: '396%',
    margin: 'auto',
    width: '50%',
  },
  hibiscus: {
    width: '15%',
    height: '15%',
    padding: '15px',
  },
  menu: {
    paddingBottom: '33px',
    display: 'flex',
    justifyContent: 'center',
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

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null };
  }

  handleOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <Tabs style={styles.menu} >
        <Tab
          label="Home"
          href="#"
          onClick={() => this.props.onClick('HOME')}
        />
        <Tab
          label="About"
          href="#about"
          onClick={() => this.props.onClick('ABOUT')}
        />
        <Tab
          label="Pipes"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          // href="#pipes"
          // onClick={() => this.props.onClick('PIPES')}
          onClick={this.handleOpen}
          // onMouseOver={this.handleOpen}
          // onMouseOut={this.handleClose}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem
            href="#standardpipes"
            onClick={() => {
              this.handleClose();
              this.props.onClick('STANDARD_PIPES');
            }}
          >Standard Pipes
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.handleClose();
              this.props.onClick('CUSTOM_PIPES');
            }}
          >Custom Pipes
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.handleClose();
              this.props.onClick('PRO_SHOP');
            }}
          >Pro Shop
          </MenuItem>
        </Menu>
        <Tab
          label="Swag"
          href="#swag"
          onClick={() => this.props.onClick('SWAG')}
        />
        <Tab
          label="Contact"
          href="#contact"
          onClick={() => this.props.onClick('CONTACT')}
        />
        <Tab
          label="Events"
          href="#events"
          onClick={() => this.props.onClick('EVENTS')}
        />
        <Tab
          label="Gallery"
          href="#gallery"
          onClick={() => this.props.onClick('GALLERY')}
        />
      </Tabs>
    );
  }
}

const TopBar = props => (
  <div>
    {Header(props)}
    {<MenuBar onClick={props.onClick} />}
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

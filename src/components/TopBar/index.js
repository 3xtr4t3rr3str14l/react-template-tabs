import React from 'react';
import { connect } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import actions from '../../actions';
import hibiscus from '../../images/hibiscus.png';
import darkBambooFloor from '../../images/darkBambooFloor.jpg';
import './index.css';

const themeColor = '#fa8072';
const styles = {
  root: {
    backgroundImage: `url(${darkBambooFloor})`,
  },
  disclaimer: {
    fontSize: '10px',
    margin: 'auto',
    width: '50%',
    textAlign: 'center',
    paddingTop: '10px',
    color: themeColor,
  },
  header: {
    display: 'inline-flex',
  },
  titleText: {
    textAlign: 'center',
    color: themeColor,
    fontFamily: 'RavieFont',
    fontSize: '300%',
    margin: 'auto',
    // width: '50%',
  },
  hibiscus: {
    width: '15%',
    height: '15%',
    padding: '15px',
  },
  tabs: {
    // display: 'flex',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'RavieFont',
  },
  tab: {
    fontFamily: 'RavieFont',
    fontSize: 'large',
    color: themeColor,
    opacity: '1',
  },
  menu: {
    style: {
      // backgroundColor: 'rgb(255, 255, 255, 0)',
      backgroundImage: `url(${darkBambooFloor})`,
    },
  },
  menuItem: {
    // backgroundImage: `url(${darkBambooFloor})`,
    fontFamily: 'RavieFont',
    fontSize: 'large',
    color: themeColor,
  },
};

const Header = props => (
  <div>
    <div style={styles.disclaimer}>Bamboo Tobacco Bongs are Intended for Tobacco use only</div>
    <div style={styles.header} onClick={() => props.onClick('HOME')} role="button" tabIndex={0}>
      <img src={hibiscus} alt="Hibiscus Flower" style={styles.hibiscus} />
      <div style={styles.titleText}>The Pooka Air Bong</div>
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
      <Tabs style={styles.tabs} scrollable>
        <Tab
          style={styles.tab}
          label="Home"
          href="#"
          onClick={() => this.props.onClick('HOME')}
        />
        <Tab
          style={styles.tab}
          label="About"
          href="#about"
          onClick={() => this.props.onClick('ABOUT')}
        />
        <Tab
          style={styles.tab}
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
          // style={styles.menu}
          MenuListProps={styles.menu}
        >
          <MenuItem
            style={styles.menuItem}
            href="#standardpipes"
            onClick={() => {
              this.handleClose();
              this.props.onClick('STANDARD_PIPES');
            }}
          >Standard Pipes
          </MenuItem>
          <MenuItem
            style={styles.menuItem}
            href="#custompipes"
            onClick={() => {
              this.handleClose();
              this.props.onClick('CUSTOM_PIPES');
            }}
          >Custom Pipes
          </MenuItem>
          <MenuItem
            style={styles.menuItem}
            href="#proshop"
            onClick={() => {
              this.handleClose();
              this.props.onClick('PRO_SHOP');
            }}
          >Pro Shop
          </MenuItem>
        </Menu>
        <Tab
          style={styles.tab}
          label="Swag"
          href="#swag"
          onClick={() => this.props.onClick('SWAG')}
        />
        <Tab
          style={styles.tab}
          label="Contact"
          href="#contact"
          onClick={() => this.props.onClick('CONTACT')}
        />
        <Tab
          style={styles.tab}
          label="Events"
          href="#events"
          onClick={() => this.props.onClick('EVENTS')}
        />
        <Tab
          style={styles.tab}
          label="Gallery"
          href="#gallery"
          onClick={() => this.props.onClick('GALLERY')}
        />
      </Tabs>
    );
  }
}

const TopBar = props => (
  <div style={styles.root}>
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

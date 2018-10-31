import React from 'react';
import { connect } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { push } from 'connected-react-router';

import { setVisibilityFilter } from '../../actions';
import coralHibiscus from '../../images/coralHibiscus.png';
import darkBambooFloor from '../../images/darkBambooFloor.jpg';
import './index.css';

const themeColor = 'white';
const styles = {
  root: {
    backgroundImage: `url(${darkBambooFloor})`,
    backgroundRepeat: 'round',
    backgroundSize: 'cover',
  },
  disclaimer: {
    fontSize: '10px',
    margin: 'auto',
    width: '50%',
    textAlign: 'center',
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
  },
  coralHibiscus: {
    width: '20%',
    height: '15%',
    padding: '15px',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    color: themeColor,
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
      backgroundImage: `url(${darkBambooFloor})`,
      backgroundRepeat: 'round',
    },
  },
  menuItem: {
    fontFamily: 'RavieFont',
    fontSize: 'large',
    color: themeColor,
  },
};

const Header = props => (
  <div>
    <div style={styles.disclaimer}>Bamboo Tobacco Bongs are Intended for Tobacco use only</div>
    <div style={styles.header} onClick={() => props.onClick('HOME')} role="button" tabIndex={0}>
      <img src={coralHibiscus} alt="Hibiscus Flower" style={styles.coralHibiscus} />
      <div style={styles.titleText}>The Original Pooka Air Bong</div>
      {
        // <img src={coralHibiscus} alt="Hibiscus Flower" style={styles.coralHibiscus} />
      }
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
      <Tabs style={styles.tabs}>
        <Tab
          style={styles.tab}
          label="Home"
          onClick={() => this.props.pushRoute('/')}
        />
        <Tab
          style={styles.tab}
          label="About"
          onClick={() => this.props.pushRoute('/about')}
        />
        <Tab
          style={styles.tab}
          label="Pipes"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleOpen}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          MenuListProps={styles.menu}
        >
          <MenuItem
            style={styles.menuItem}
            onClick={() => {
              this.handleClose();
              this.props.onClick('STANDARD_PIPES');
              this.props.pushRoute('/standardpipes');
            }}
          >Standard Pipes
          </MenuItem>
          <MenuItem
            style={styles.menuItem}
            onClick={() => {
              this.handleClose();
              this.props.pushRoute('/custompipes');
            }}
          >Custom Pipes
          </MenuItem>
          <MenuItem
            style={styles.menuItem}
            onClick={() => {
              this.handleClose();
              this.props.pushRoute('/proshop');
            }}
          >Pro Shop
          </MenuItem>
        </Menu>
        <Tab
          style={styles.tab}
          label="Swag"
          onClick={() => this.props.pushRoute('/swag')}
        />
        <Tab
          style={styles.tab}
          label="Contact"
          onClick={() => this.props.pushRoute('/contact')}
        />
        <Tab
          style={styles.tab}
          label="Events"
          onClick={() => this.props.pushRoute('/events')}
        />
        <Tab
          style={styles.tab}
          label="Gallery"
          onClick={() => this.props.pushRoute('/gallery')}
        />
      </Tabs>
    );
  }
}

const TopBar = props => (
  <div style={styles.root}>
    {Header(props)}
    {<MenuBar onClick={props.onClick} pushRoute={props.pushRoute} />}
  </div>
);

const mapDispatchToProps = dispatch => ({
  onClick: (filter) => {
    dispatch(setVisibilityFilter(filter));
  },
  pushRoute: (route) => {
    dispatch(push(route));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(TopBar);

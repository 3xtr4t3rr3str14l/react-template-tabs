import React from 'react';
import { connect } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { push } from 'connected-react-router';

import './index.css';

const themeColor = 'white';
const styles = {
  root: {
    // backgroundImage: `url(${tabBackground})`,
    backgroundColor: 'red',
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
    // display: 'inline-flex',
  },
  titleText: {
    textAlign: 'center',
    color: themeColor,
    fontSize: '300%',
    margin: 'auto',
  },
  // pageIcon: {
  //   width: '20%',
  //   height: '15%',
  //   padding: '15px',
  // },
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    color: themeColor,
  },
  tab: {
    fontSize: 'large',
    color: themeColor,
    opacity: '1',
  },
  menu: {
    style: {
      // backgroundImage: `url(${tabBackground})`,
      backgroundColor: 'red',
      backgroundRepeat: 'round',
    },
  },
  menuItem: {
    fontSize: 'large',
    color: themeColor,
  },
};

const Header = props => (
  <div>
    <div style={styles.header}>
      <div style={styles.titleText}>Sample Page</div>
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
          label="Dropdown"
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
              // this.props.pushRoute('/pageOne');
            }}
          >Page One
          </MenuItem>
          <MenuItem
            style={styles.menuItem}
            onClick={() => {
              this.handleClose();
              // this.props.pushRoute('/pageTwo');
            }}
          >Page Two
          </MenuItem>
          <MenuItem
            style={styles.menuItem}
            onClick={() => {
              this.handleClose();
              // this.props.pushRoute('/pageThree');
            }}
          >Page Three
          </MenuItem>
        </Menu>
      </Tabs>
    );
  }
}

const TopBar = props => (
  <div style={styles.root}>
    {Header(props)}
    {<MenuBar pushRoute={props.pushRoute} />}
  </div>
);

const mapDispatchToProps = dispatch => ({
  pushRoute: (route) => {
    dispatch(push(route));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(TopBar);

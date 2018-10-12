import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';

import ContentCard from '../../ContentCard';

import hibiscus from '../../../images/hibiscus.png';
import fishingPipe from '../../../images/fishingPipe.jpg';
import bambooFloor from '../../../images/bambooFloor.jpg';
import darkBambooFloor from '../../../images/darkBambooFloor.jpg';
import emailIcon from '../../../images/emailIcon.png';
import fbLogo from '../../../images/fbLogo.png';
import greenBamboo from '../../../images/greenBamboo.jpg';
import moonMan from '../../../images/moonMan.jpg';
import phoneIcon from '../../../images/phoneIcon.png';
import stockAccesssories from '../../../images/stockAccessories.jpeg';
import stockhat from '../../../images/stockHat.jpeg';
import stockJewelry from '../../../images/stockJewelry.jpeg';
import stockShirt from '../../../images/stockShirt.jpeg';
import twitterLogo from '../../../images/twitterLogo.png';

const tileData = [
  {
    img: fishingPipe,
    title: 'Fishing Pipe',
  },
  {
    img: hibiscus,
    title: 'Hibiscus',
  },
  {
    img: bambooFloor,
    title: 'Bamboo Floor',
  },
  {
    img: darkBambooFloor,
    title: 'Dark Bamboo Floor',
  },
  {
    img: emailIcon,
    title: 'emailIcon',
  },
  {
    img: fbLogo,
    title: 'fbLogo',
  },
  {
    img: greenBamboo,
    title: 'greenBamboo',
  },
  {
    img: moonMan,
    title: 'moonMan',
  },
  {
    img: twitterLogo,
    title: 'twitterLogo',
  },
  {
    img: stockShirt,
    title: 'stockShirt',
  },
  {
    img: stockJewelry,
    title: 'stockJewelry',
  },
  {
    img: stockhat,
    title: 'stockhat',
  },
  {
    img: stockAccesssories,
    title: 'stockAccesssories',
  },
  {
    img: phoneIcon,
    title: 'phoneIcon',
  },
];

const styles = theme => ({
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    maxWidth: 500,
    maxHeight: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  grid: {
    flexWrap: 'nowrap',
    display: 'flex',
  },
});

// const Gallery = (props) => {
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClose = (value) => {
    this.setState({
      open: false,
    });
  };

  handleListItemClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const paper = {
      style: { backgroundColor: 'rgb(255, 255, 255, 0)' },
    };

    return (
      <ContentCard title="Gallery">
        <Dialog maxWidth="100%" open={this.state.open} onClose={this.handleClose} PaperProps={paper}>
          <div className={classes.grid}>
            {tileData.map(tile => (
              <img src={tile.img} alt={tile.title} style={{ height: 'fit-content', width: 'fit-content', maxHeight: '500px', maxWidth: '500px' }} />
            ))}
          </div>
        </Dialog>
        <div className={classes.content}>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div">Picture Gallery 1</ListSubheader>
            </GridListTile>
            {tileData.map(tile => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  actionIcon={
                    <IconButton className={classes.icon} onClick={this.handleListItemClick}>
                      {
                        // <InfoIcon />
                      }
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </ContentCard>
    );
  }
}

export default withStyles(styles)(Gallery);

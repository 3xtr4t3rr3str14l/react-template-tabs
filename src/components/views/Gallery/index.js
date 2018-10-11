import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';

import ContentCard from '../../ContentCard';
import image from '../../../images/fishingBong.jpg';
import hib from '../../../images/hibiscus.png';

const styles = theme => ({
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  grid: {
    flexWrap: 'nowrap',
    display: 'flex',
  },
});

const tileData = [
  // {
  //   img: hib,
  //   title: 'Hibiscus',
  // },
  {
    img: image,
    title: 'Fishing Pipe',
  },
  {
    img: hib,
    title: 'Hibiscus',
  },
  {
    img: image,
    title: 'Fishing Pipe',
  },
  {
    img: hib,
    title: 'Hibiscus',
  },
  {
    img: hib,
    title: 'Hibiscus',
  },
];

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
              <img src={tile.img} alt={tile.title} style={{ height: '100%', width: 'auto' }} />
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

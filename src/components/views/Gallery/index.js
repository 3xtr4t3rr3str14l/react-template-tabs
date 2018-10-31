import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';

import ContentCard from '../../ContentCard';
import imageCollection from '../../../imageCollection';
import ImageCarousel from '../../ImageCarousel';

const setWidth = 400;
const styles = theme => ({
  content: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflowX: 'scroll',
    margin: '20px',
  },
  gridList: {
    maxWidth: 500,
    maxHeight: 450,
    flexWrap: 'nowrap',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  grid: {
    flexWrap: 'nowrap',
    display: 'flex',
    maxWidth: setWidth,
  },
  img: {
    height: 300,
    maxWidth: setWidth,
    width: '100%',
  },
  bigImg: {
    height: 'fit-content',
    width: 'fit-content',
    maxHeight: '500px',
    maxWidth: '500px',
  },
});

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClose = (value) => {
    console.log('closing');
    this.setState({
      open: false,
    });
  };

  handleListItemClick = (selectedImageId) => {
    console.log('opening');
    this.setState({
      open: true,
      selectedImageId,
    });
  };

  render() {
    const { classes } = this.props;
    const paper = {
      style: { backgroundColor: 'rgb(255, 255, 255, 0.5)', maxWidth: '85%' },
    };

    return (
      <ContentCard title="Gallery">
        <Dialog open={this.state.open} onClose={this.handleClose} PaperProps={paper} scroll="body">
          <ImageCarousel
            initialStep={this.state.selectedImageId}
            overflowX="hidden"
            contentStyle={{ width: '100%' }}
            imageStyle={{
              height: 'fit-content',
              width: 'fit-content',
            }}
          />
        </Dialog>
        <div className={classes.content}>
          <div className={classes.grid}>
            {imageCollection.map(image => (
              <img
                src={image.img}
                alt={image.title}
                className={classes.img}
                onClick={() => { this.handleListItemClick(image.id); }}
              />
            ))}
          </div>
        </div>
      </ContentCard>
    );
  }
}

export default withStyles(styles)(Gallery);

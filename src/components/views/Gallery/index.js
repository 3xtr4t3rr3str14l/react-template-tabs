import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import ContentCard from '../ContentCard';
import image from '../../../images/hibiscus.png';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    // width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const tileData = [
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
];

const Gallery = (props) => {
  const { classes } = props;

  return (
    <ContentCard>
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Picture Gallery 1</ListSubheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
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
};

export default withStyles(styles)(Gallery);

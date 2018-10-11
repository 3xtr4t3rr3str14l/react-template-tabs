import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
// import StarBorderIcon from '@material-ui/icons/StarBorder';

import ContentCard from '../../ContentCard';
import image from '../../../images/fishingBong.jpg';
import hib from '../../../images/hibiscus.png';

const tileData = [
  {
    img: image,
    title: 'Fishing Pipe',
    author: 'author',
  },
  {
    img: image,
    title: 'Fishing Pipe',
    author: 'author',
  },
  {
    img: image,
    title: 'Fishing Pipe',
    author: 'author',
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
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

const Home = (props) => {
  const { classes } = props;

  return (
    <ContentCard title="Welcome!">
      <div className={classes.content}>
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton>
                    {
                      // <StarBorderIcon className={classes.title} />
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

export default withStyles(styles)(Home);

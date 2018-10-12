import React from 'react';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
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
    justifyContent: 'space-around',
    margin: 'auto',
    width: '50%',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    width: 'fit-content',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  gridListTile: {
    // width: 'inherit',
    width: '50%',
    height: 'auto',
  },
  root: {
    maxWidth: 600,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  img: {
    height: 455,
    display: 'block',
    maxWidth: 600,
    overflow: 'hidden',
    width: '100%',
  },
});

class Home extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tileData.length;

    return (
      <ContentCard title="Welcome!">
        <div className={classes.content}>
          <Paper square elevation={0} className={classes.header}>
            <Typography>{tileData[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={this.handleStepChange}
            enableMouseEvents
          >
            {tileData.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img className={classes.img} src={step.img} alt={step.title} />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
            nextButton={
              <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </div>
      </ContentCard>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Home);

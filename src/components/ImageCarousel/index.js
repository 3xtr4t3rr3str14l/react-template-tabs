import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, bindKeyboard } from 'react-swipeable-views-utils';

import ContentCard from '../ContentCard';
import imageCollection from '../../imageCollection';

const setWidth = 1000;
const styles = theme => ({
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
    width: '50%',
    height: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  mobileStepper: {
    background: '#fafafa00',
  },
});

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);

    let FinalView = bindKeyboard(SwipeableViews);
    if (props.autoScroll) {
      FinalView = autoPlay(SwipeableViews);
    }

    this.state = {
      activeStep: props.initialStep || 3,
      FinalView,
    };
  }

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
    const { classes, theme, overflowX, imageStyle, contentStyle, autoScroll } = this.props;
    const { activeStep, FinalView } = this.state;
    const maxSteps = imageCollection.length;

    return (
      <ContentCard style={{ paddingBottom: '10px' }}>
        <div style={contentStyle}>
          <FinalView
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={this.handleStepChange}
            enableMouseEvents
            style={{ overflowX }}
          >
            {imageCollection.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img style={imageStyle} src={step.img} alt={step.title} />
                ) : null}
              </div>
            ))}
          </FinalView>
          <MobileStepper
            className={classes.mobileStepper}
            variant="text"
            position="static"
            activeStep={activeStep}
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

export default withStyles(styles, { withTheme: true })(ImageCarousel);

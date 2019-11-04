import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import PartnerHistoryWrapper, { CounterUpArea } from './partnerHistory.style';
import GoogleImg from 'common/src/assets/image/app/google.svg';
import AppleImg from 'common/src/assets/image/app/apple.svg';
import DribbleImg from 'common/src/assets/image/app/dribbble.svg';
import MailchimpImg from 'common/src/assets/image/app/mailchimp.svg';
import BackgroundImg from 'common/src/assets/image/app/partner-bg.png';
import ParticlesComponent from '../particles';

import AppImg from 'common/src/assets/image/app/appImg.png';

import ladder from 'common/src/assets/image/app/Ladder.png';
import coin from 'common/src/assets/image/app/coin.png';
import dollar from 'common/src/assets/image/app/dollar.png';

const PartnerHistory = ({
  row,
  col,
  cardStyle,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
}) => {
  return (
    <PartnerHistoryWrapper id="partners">
      {/* <ParticlesComponent /> */}
      {/* <Image
        src={BackgroundImg}
        className="backgroungImg"
        alt="backgroungImg"
      /> */}
      <Container>
        <Box className="row" {...row} style={{ display: 'block', fontSize: '1.4em', padding: '2.0em' }}>
            <Heading {...title} content="Be part of the biggest" style={{ marginBottom: '0px', color: '#0e214e', textAlign: 'center' }} />
            <Heading {...title} content="prediction platfrom in the world" style={{ color: '#0e214e', textAlign: 'center' }} />
            <Heading {...sectionSubTitle} content="We are building a community of players from all around the globe who are passionate about predicting the future." style={{ marginTop: '50px', textAlign: 'center' }} />
            <Heading {...sectionSubTitle} content="This community is well informed on what is happening in the world around them and are knowledgeable about Sports, Politics, Markets, and keep up to date with news around them." style={{ textAlign: 'center' }} />
            
            <Heading {...sectionSubTitle} content="Predict Correctly. Win Cash. Be Ranked" style={{ textAlign: 'center' }} />
        </Box>
        <Box className="row" {...row}>
          <Box className="col" {...col} >
            <Image style={{ width: '70px', margin: '0px auto' , paddingLeft: '20px'}} src={ladder} alt="Domain Image" />
            <Heading content="LEADERBOARD" style={{ marginTop: '15px', textAlign: 'center' }}></Heading>
            <Heading {...description} content="Predict correctly and be ranked nationaly" style={{ fontWeight: '300', marginTop: '15px', textAlign: 'center' }}></Heading>
          </Box>
          <Box className="col" {...col} >
            <Image style={{ width: '70px', margin: '0px auto' , paddingLeft: '0px', paddingRight: '0px'}} src={coin} alt="Domain Image" />
            <Heading content="COINS" style={{ marginTop: '15px', textAlign: 'center' }}></Heading>
            <Heading {...description} content="Get coins to save you in case you predict incorrectly" style={{ fontWeight: '300', marginTop: '15px', textAlign: 'center' }}></Heading>
          </Box>
          <Box className="col" {...col} >
            <Image style={{ width: '70px', margin: '0px auto' , paddingLeft: '5px', paddingRight: '5px'}} src={dollar} alt="Domain Image" />
            <Heading content="CASH OUT" style={{ marginTop: '15px', textAlign: 'center' }}></Heading>
            <Heading {...description} content="Once you win, cash out. We will send you a check" style={{ fontWeight: '300', marginTop: '15px', textAlign: 'center' }}></Heading>
          </Box>
        </Box>
      </Container>
    </PartnerHistoryWrapper>
  );
};

// Partner style props
PartnerHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

// Partner default style
PartnerHistory.defaultProps = {
  // Partner section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Partner section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1 / 3, 1 / 3, 1 / 3, 1 / 3],
    // flexBox: true,
    alignSelf: 'center',
    display: 'flex-root',
    textAlign: 'center',
    p: '0px'
  },
  // Card default style
  cardStyle: {
    p: '53px 40px 35px',
    borderRadius: '10px',
    boxShadow: '0px 8px 20px 0px rgba(16, 66, 97, 0.07)',
  },
  // Partner section title default style
  title: {
    fontSize: ['26px', '26px', '30px', '2em', '2.4em'],
    fontWeight: '600',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    m: '0 auto',
    maxWidth: ['100%', '100%', '100%', '80%', '60%'],
    textAlign: ['center', 'center'],
  },
  // Partner section description default style
  description: {
    m: '0 auto',
    width: ['100%','100%','100%','50%','50%'],
    textAlign: 'center'
  },
  sectionSubTitle: {
    fontWeight: '300',
    fontSize: ['22px', '22px', '1.0em', '1.0em', '1.6em'],
    textAlign: ['center', 'center'],
    width: ['100%','100%','80%','80%','80%'],
    m: '0 auto'
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  cardArea: {
    pl: [0, 0, '40px', 0, 0],
  },
};

export default PartnerHistory;

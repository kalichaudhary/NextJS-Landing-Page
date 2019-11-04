import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import { PaymentCircleShape } from '../app.style';
import ParticlesComponent from '../particles';
import ImageOne from 'common/src/assets/image/app/mockup.png';
import ImageTwo from 'common/src/assets/image/app/credit-card.png';

// import PartnerHistoryWrapper, { CounterUpArea } from './partnerHistory.style';
import { BoxWrapper } from './paymentSection.style'

import Mobile2 from 'common/src/assets/image/app/mobile2.png';
import Mobile3 from 'common/src/assets/image/app/mobile3.png';
import Brand from 'common/src/assets/image/app/brand.png';
import DESC from 'common/src/assets/image/app/desc.png';

const PaymentSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  textAreaRow,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
  sectionSubTitle,
  btnStyle,
  fluidImg,
  col1,
  heading,
}) => {
  return (
    <Box style={{ backgroundColor: "#001343" }} {...sectionWrapper} id="payments">
      {/* <ParticlesComponent /> */}

      {/* <Container fullWidth noGutter className="control-sec-container payment">
        <Box {...row} {...imageAreaRow}>
          <Box {...col} {...imageArea}>
            <Card {...imageWrapper} {...imageWrapperOne}>
              <Fade left>
                <Image src={ImageOne} alt="Info Image One" />
              </Fade>
            </Card>
            <Card
              {...imageWrapper}
              {...imageWrapperTwo}
              className="cardExtraImage"
            >
              <Fade right>
                <Image src={ImageTwo} alt="Info Image Two" />
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container> */}
      <Container >
        <BoxWrapper style={{  backgroundImage: 'url('+Mobile2+')', backgroundPosition: 'right', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>

        
        <Box {...textAreaRow} {...row} >
          <Box {...col} {...textArea}>
            <Image {...imageWrapperOne} src={Brand} alt="Domain Image" />
            <Image {...heading} src={DESC} alt="Domain Image" />
            {/* <FeatureBlock
              title={
                <Heading
                  content="LIVE BINARY TRIVIA  "
                  {...title}
                  {...heading}
                />
              }
            />
            <FeatureBlock
              title={
                <Heading
                  content="EVERY DAY"
                  {...title} 
                />
              }
            />
            <FeatureBlock
              title={
                <Heading
                  content="5PM PST"
                  {...title} 
                />
              }
            /> */}
            {/* <Box {...col1}> */}
            {/* <Image src={Brand} alt="Domain Image" /> */}
            {/* <Heading
              content="Along with Live Events, we also host live trivia every day for $250!Play. Win. Be Ranked."
              {...title} style={{  textAlign: 'center', fontSize: '2.4em' }}
            /> */}
            {/* </Box> */}

            {/* <PaymentCircleShape /> */}
          </Box>
          {/* <Box>
              <Image {...fluidImg} src={Mobile3} alt="Domain Image" />
          </Box> */}
        </Box>
        </BoxWrapper>
      </Container>
    </Box>
  );
};

PaymentSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  fluidImg: PropTypes.object,
  heading: PropTypes.object,
  col1: PropTypes.object,
  button: PropTypes.object,
  btnStyle: PropTypes.object,
};

PaymentSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['100px', '100px', '200px', '200px', '80px'],
    pb: ['100px', '100px', '200px', '100px', '80px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  textAreaRow: {
    // flexDirection: 'row-reverse',
    // backgroundImage: 'url('+Mobile2+')'
    minHeight: ['500px','500px','500px','600px','740px'],
    backgroundPosition: 'right', 
    backgroundSize: 'contain', 
    backgroundRepeat: 'no-repeat'
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, '100%', '100%', '100%'],
  },
  textArea: {
    
    zIndex: '1',
  },
  imageArea: {
    width: [0, 0, '52%', '45%', '45%'],
    flexBox: true,
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    // pointerEvents: 'none',
    maxWidth: ['90%','60%','30%','32%','40%'],
    ml: ['auto','auto',"80px","80px","80px"],
    mr: ['auto','auto',"0px","0px","0px"]
  },
  imageWrapperTwo: {
    // alignSelf: 'flex-start',
    // mt: ['0px', '0px', '40px', '50px', '90px'],
    // ml: ['-250px', '-250px', '-180px', '-220px', '-420px'],
    // pointerEvents: 'none',
    width: ['100%','100%','0%']
  },
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: ['center', 'left'],
    fontSize: '14px',
    letterSpacing: '0.11em',
    fontWeight: '700',
    color: '#1a73e8',
    textTransform: 'uppercase',
    mb: '10px',
  },
  title: {
    fontSize: ['24px', '26px', '3em', '3.5em', '4.4em'],
    fontWeight: '600',
    color: '#fff',
    letterSpacing: '-0.010em',
    mt: '0px',
    mb: '0px',
    maxWidth: ['100%', '100%', '100%', '60%', '60%'],
    textAlign: ['center', 'center'],
    fontFamily: "sans-serif"
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    textAlign: ['center', 'left'],
  },
  fluidImg: {
    width: ["100%", "100%",'0%']
  },
  heading: {
    mt:["160px","160px","160px","160px","100px"],
    maxWidth: ['100%','100%','50%','50%','50%'],
  },
  col1: {
    mt: ["20px", "255px"],
    mb: ["20px", "0"],
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default PaymentSection;

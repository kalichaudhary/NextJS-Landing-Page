import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import Input from 'reusecore/src/elements/Input';
import FeatureBlock from 'common/src/components/FeatureBlock';
import ParticlesComponent from '../particles';
import Container from 'common/src/components/UI/Container';
import { email } from 'react-icons-kit/ionicons/email';
import { Icon } from 'react-icons-kit';
import { ic_arrow_forward } from 'react-icons-kit/md/ic_arrow_forward';
import { BannerSquareShape, BannerCircleShape } from '../app.style';
import BannerWrapper, {
  DiscountWrapper,
  DiscountLabel,
  ButtonWrapper,
  EmailInputWrapper,
} from './banner.style';

import AppScreenshot from 'common/src/assets/image/app/mobile-1.png';
import AppStore from 'common/src/assets/image/app/appstore.png';
// import Deck from './deck.pdf';

const DomainSection = ({
  SectionWrapper,
  row,
  col,
  title,
  description,
  description1,
  desc,
  button,
  image,
  appstoreImg,
  imageArea,
  btnStyle,
  btnStyleTwo,
  discountAmount,
  discountText,
}) => {
  return (
    <Box {...SectionWrapper} id="banner">
      {/* <ParticlesComponent /> */}
      <BannerSquareShape />
      {/* <BannerCircleShape /> */}
      <Container>
        <Box {...row}>
          <Box {...col}>
            {/* <Box>
              <DiscountWrapper>
                <DiscountLabel>
                  <Text {...discountAmount} className="discountAmount" />
                  <Text {...discountText} />
                </DiscountLabel>
              </DiscountWrapper>
            </Box> */}
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}           
            />
            <FeatureBlock
              description={<Text {...description1} />}           
            />
            <FeatureBlock
              description={<Text content="Absolutely free to play." {...desc} />}           
            />
            
            {/* <EmailInputWrapper>
              <Input
                inputType="email"
                placeholder="Enter Email Address"
                iconPosition="left"
                aria-label="email"
              />
            </EmailInputWrapper> */}
            <Box>
            <Image src={AppStore} alt="Domain Image" {...appstoreImg} />
            </Box>
            <ButtonWrapper style={{ textAlign: "center" }}>
            
              <Link href="https://apps.apple.com/us/app/coinchamp/id1463166614">
                <a style={{ paddingTop: ['20px','0px'] }}>
                  <Button {...button} {...btnStyle} />
                </a>
              </Link>
              {/* <Link href="#"> */}
                <a  href="./deck.pdf" target="_blank">
                  <Button
                    {...button}
                    {...btnStyleTwo}
                    // icon={<Icon icon={ic_arrow_forward} />}
                    // className="withoutBg"
                  />
                </a>
              {/* </Link> */}
            </ButtonWrapper>
          </Box>
          <Box {...col} {...imageArea}>
            <Image src={AppScreenshot} alt="Domain Image" {...image} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

DomainSection.propTypes = {
  SectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  desc: PropTypes.object,
  description1: PropTypes.object,
  button: PropTypes.object,
  btnStyle: PropTypes.object,
  btnStyleTwo: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
};

DomainSection.defaultProps = {
  SectionWrapper: {
    as: 'section',
    pt: ['120px','150px','150px','150px','0px'],
    pb: ['50px','150px','150px','150px','0px'],
    overflow: 'hidden',
    backgroundSize: 'cover'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '50%', '44%', '44%'],
    mt: '-80px',
  },
  imageArea: {
    width: ['0%', '0%', '43%', '35%', '45%'],
    ml: 'auto',
  },
  title: {
    content: 'The Future of Live Predictions is here.',
    fontSize: ['26px', '30px', '30px', '48px', '48px'],
    fontWeight: '800',
    color: '#0f2137',
    letterSpacing: '-0.01px',
    mb: '20px',
    textAlign: ['center','left']
  },
  description: {
    content:
      'Coinchamp is a platform for Live Binary Predictions. Watch Live events and predict Yes or No if an outcome will happen.',
    fontSize: '1.4em',
    color: '#343d48',
    lineHeight: '1.5em',
    mb: '10px',
    textAlign: ['center','left']
  },
  description1: {
    content:
      'Predict correctly. Win Cash.',
    fontSize: '1.4em',
    color: '#343d48',
    lineHeight: '1.5em',
    mb: '10px',
    textAlign: ['center','left']
  },
  desc: {
    fontSize: '1.4em',
    color: '#343d48',
    lineHeight: '1.5em',
    mb: '10px',
    textAlign: ['center','left']
  },
  button: {
    title: 'Download App',
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    mt: ['20px','0px'],
  },
  image: {
    ml: 'auto',
    mt: '70px',

  },
  appstoreImg: {
    width: '200px',
    mt: ['40px','70px'],
    mr: 'auto',
    mb: ['40px','70px'],
    ml: 'auto'
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '10px',
    ml: '0px',
    mr: ['0px','20px']
  },
  btnStyleTwo: {
    minWidth: '156px',
    title: 'Download Deck',
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '10px',
    ml: ['0px','20px'],
    colors: 'primaryWithBg',
  },
  textArea: {
    width: ['100%', '100%', '50%', '55%', '55%'],
  },
  discountAmount: {
    content: 'update',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    bg: 'rgb(26, 115, 232)',
  },
  discountText: {
    content: 'Version 2.5.0 has just released .',
    fontSize: '13px',
    fontWeight: '400',
    color: '#0f2137',
    mb: 0,
    as: 'span',
    ml: '10px',
  },
};

export default DomainSection;

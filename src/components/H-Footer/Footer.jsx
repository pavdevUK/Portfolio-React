import { getRightFooterData } from 'selectors/pageContent.selector';
import { BackgroundBlue } from 'styled';
import styled, { css } from 'styled-components';
import { getYear } from 'factory/factory';
import React, { useState } from 'react';
import VisitorCounter from 'components/H-Footer/VisitorCounter';
import { getVisitors } from '../../selectors/visitors.selector';
import { connect } from 'react-redux';

const center = css`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  ${BackgroundBlue}
  width: 100%;
  height: 90px;
  @media (max-width: 900px) {
    height: auto;
  }
`;
const InnerWrapper = styled.div`
  height: 90px;
  display: flex;
  margin: auto;
  width: 95%;
  position: relative;
  z-index: 2;
  @media (max-width: 900px) {
    display: block;
    height: auto;
  }
`;
const Left = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
  display: flex;
  align-items: center;
  width: 20%;
`;

const Mid = styled.div`
  ${center};
  flex-direction: column;
  width: 60%;
  @media (max-width: 900px) {
    display: none;
  }
`;
const Mobile = styled.div`
  display: none;
  @media (max-width: 900px) {
    text-align: center;
    padding: 10px;
    display: block;
    margin: auto;
  }
`;

const Right = styled.div`
  ${center};
  width: 20%;
  @media (max-width: 900px) {
    display: none;
  }
`;

const NickHover = css`
  color: #01579b;
  font-size: 20px;
`;

const H2 = styled.h2`
  width: 100%;
  font-size: 16px;
  color: #fff;
  padding: 0px;
  margin: 2px 0px 0px 0px;
  display: flex;
  justify-content: center;
`;

const Nick = styled.p`
  font-family: 'Ubuntu-Light';
  font-weight: 500;
  margin: 0px 3px;
  font-size: 28px;
  font-weight: 600;
  ${(p) =>
    p.nick
      ? css`
          ${NickHover}
        `
      : css`
          color: #fff;
        `};
`;

const Text = styled.p`
  color: #fff;
  font-size: 16px;
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledLi = styled.li`
  list-style: none;
`;

const HeaderWrapper = styled.div`
  text-align: center;
  padding: 0px !important;
  margin: 0px auto;
  width: 280px;
  @media (max-width: 400px) {
    width: 265px;
  }
`;

const Footer = ({ visitors, rightData }) => {
  const [nick, setNick] = useState(false);

  const handleMouseEnter = () => {
    setNick(!nick);
  };

  const FooterHeader = () => {
    return (
      <HeaderWrapper>
        <H2>All rights reserved</H2>
        <H2>Reading UK {getYear()}</H2>
      </HeaderWrapper>
    );
  };

  const rightDataMap = () => {
    return rightData.map((li, i) => (
      <StyledLi key={i}>
        <Text>{li}</Text>
      </StyledLi>
    ));
  };

  return (
    <Wrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseEnter}
      id='FooterWrapper'
    >
      <InnerWrapper>
        <Left>
          <Nick>pavdev</Nick>
        </Left>
        <Mid>
          {FooterHeader()}
          <VisitorCounter h2={H2} visitors={visitors} />
        </Mid>
        <Right>
          <StyledUl>{rightDataMap()}</StyledUl>
        </Right>
        <Mobile>{FooterHeader()}</Mobile>
      </InnerWrapper>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    visitors: getVisitors(state),
    rightData: getRightFooterData(state),
  };
};

export default connect(mapStateToProps)(Footer);

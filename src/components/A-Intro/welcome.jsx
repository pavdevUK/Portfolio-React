import Button from 'components/common/Button';
import { Link } from 'react-router-dom';
import React from 'react';
// import { SvgLoader } from 'react-svgmt'
import { ReactComponent as Logo } from 'img/pavdev.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 170px;
  height: 200px;
  margin: auto;
`;
const LogoTextWrapper = styled.div`
  position: relative;
  padding: 5px;
  margin: auto;
  top: 30%;
`;
const MobilLogo = styled(Logo)`
  display: block;
  width: auto;
  height: 50px;
  margin-bottom: 10px;

  path {
    fill: #fff;
  }
`;
const H1 = styled.h5`
  margin: 0px;
  color: #fff;
  font-size: 20px;
`;
const Text = styled.h5`
  margin: 0px;
  color: #fff;
`;
const LinkWrapper = styled.div`
  margin: 70px;
  display: flex;
  justify-content: center;
`;
const StLink = styled(Link)`
  margin-top: 10px;
  &:hover {
    text-decoration: none;
  }
`;
function Welcome({ ...props }) {
  return (
    <Wrapper>
      <LogoTextWrapper>
        <H1>I'm</H1>
        <MobilLogo />
        <Text>
          This is my Portfolio <br />
        </Text>
      </LogoTextWrapper>
      <LinkWrapper>
        <StLink to='/content'>
          <Button>Enter</Button>
        </StLink>
      </LinkWrapper>
    </Wrapper>
  );
}

export default Welcome;

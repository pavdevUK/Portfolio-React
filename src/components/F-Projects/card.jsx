import { getPLineHight } from 'selectors/pageContent.selector';
import Button from 'components/common/Button';
import styled from 'styled-components';
import { boxShadow12 } from 'styled.js';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Stack from './Stack';
import Header from '../common/Header';

const Underline = styled.div`
  position: absolute;
  height: 1px;
  width: 100%;
  opacity: 0;
  background: #172a3f96;
  border-radius: 5px;
  left: 0px;
  bottom: -1px;
  transition: opacity 0.3s ease;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1000;
  background-color: #fff;
  border: solid 1px #dbdbdb;
  border-radius: 20px;
  ${boxShadow12};
  max-width: 450px;
  height: 488px;
  flex: 1 1 360px;
  @media (max-width: 600px) {
    max-width: 100%;
    height: 388px;
    flex-basis: 100%;
  }
  @media (max-width: 992px) {
    max-width: 640px;
  }
  &:hover ${Underline} {
    opacity: 1;
  }
`;

const HeaderWrapper = styled.div`
  @media (max-width: 600px) {
    margin: 5px auto 0px auto;
  }
  margin: 0px auto 0px auto;
  width: 100%;
  display: flex;
  position: relative;
`;
const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
const TextWrapper = styled.div`
  /* padding: 5px; */
  z-index: 10000;
  text-align: center;
  margin: 0px 10px 0px 10px;
`;
const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-radius: 20px 20px 0px 0px;
  flex-shrink: 0;
  @media (max-width: 600px) {
    height: 180px;
  }
`;
const StImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
const ButtonWrapper = styled.div`
  justify-content: space-between;
  margin: 0px auto 10px auto;
  display: flex;
  /* width: 300px; */
  @media (max-width: 600px) {
    justify-content: center;
    width: 80%;
    margin: 0px auto 10px auto;
  }
`;
const P = styled.p`
  margin: 0px 10px 0px 10px;
`;
const A = styled.a`
  @media (max-width: 600px) {
    margin: 5px;
  }
  margin: 10px;
  display: block;
  ${(props) =>
    props.disabled &&
    `
      pointer-events: none;
      opacity: 0.5;
      cursor: not-allowed;
    `}
  :hover {
    text-decoration: none;
  }
`;

const YearWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #172a3f;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 13px;
  z-index: 10000;
`;

const HeaderInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

function Card({ ...props }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <ImgWrapper>
        <StImg src={props.item.src} alt={props.item.alt}></StImg>
      </ImgWrapper>
      {width >= 650 ? <Stack stack={props.stack}></Stack> : null}
      <HeaderWrapper>
        <TitleWrapper>
          <Header>
            <HeaderInnerWrapper>
              {props.item.title} <p>({props.item.year})</p>
            </HeaderInnerWrapper>
            <Underline></Underline>
          </Header>
        </TitleWrapper>
        {/* <TopBtnWrapper>
          <Expand></Expand>
        </TopBtnWrapper> */}
      </HeaderWrapper>
      <TextWrapper>
        <P className='styledP'>{props.item.text}</P>
      </TextWrapper>
      <ButtonWrapper>
        <A
          href={props.item.webHref.href}
          disabled={props.item.webHref.href ? false : true}
          target='_blank'
        >
          <Button light height='35px' width='150px'>
            {props.item.webHref.button}
          </Button>
        </A>
        <A href={props.item.githubHref} target='_blank'>
          <Button light height='35px' width='150px'>
            Github
          </Button>
        </A>
      </ButtonWrapper>
    </Wrapper>
  );
}
const mapStateToProps = (state) => {
  return {
    p_line_height: getPLineHight(state),
  };
};

export default connect(mapStateToProps)(Card);

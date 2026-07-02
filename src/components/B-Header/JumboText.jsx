import {
  getGithubButton,
  getJumboP,
  getJumboTextAuth,
  getJumboTextHeader,
} from 'selectors/pageContent.selector';

import Button from 'components/common/Button';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const JumboTextWrapper = styled.div`
  text-align: center;
  margin: auto;
  width: 600px;
  padding-top: 1px;
  @media (max-width: 992px) {
    width: 350px;
    height: 200px;
  }
`;

const JumboHeaderWrapper = styled.div`
  position: relative;
  margin: 0px auto auto auto;
  height: 95px;
  width: 400px;
  margin: 100px auto auto auto;
  @media (max-width: 992px) {
    height: 16vw;
    margin-top: 20%;
    height: 80px;
    width: 250px;
  }
`;
const JumboHeader = styled.h1`
  font-weight: 400;
  width: 100%;
  display: block;
  color: white;
  font-size: 35px;
  text-transform: capitalize;

  @media (max-width: 992px) {
    font-size: 26px;
  }
`;
const Quote = styled.p`
  font-style: oblique;
  height: 20px;
  width: 120px;
  position: absolute;
  color: white;
  right: 0px;
  bottom: -5px;
  @media (max-width: 992px) {
    font-size: 13px;
    margin: 3px;
  }
`;
const JumboText = styled.p`
  display: none;
  @media (min-width: 992px) {
    margin-top: 10px;
    display: block;
    color: #fff;
    font-size: 20px;
    font-weight: 200;
  }
`;

const Anchor = styled.a`
  display: block;
  margin-top: 30px;
  &:hover {
    text-decoration: none;
  }
`;

export function JumboMainText({ ...props }) {
  return (
    <JumboTextWrapper>
      <JumboHeaderWrapper>
        <JumboHeader>{props.header}</JumboHeader>
        <Quote>{props.author}</Quote>
      </JumboHeaderWrapper>
      <JumboText>{props.p}</JumboText>
      <Anchor href='https://github.com/pavdevuk' target='_blank'>
        <Button
          width='200px'
          height=' 50px'
          mobile={props.mobile}
          style={{ margin: 'auto' }}
        >
          {props.button}
        </Button>
      </Anchor>
    </JumboTextWrapper>
  );
}

function mapStateToProps(state) {
  return {
    header: getJumboTextHeader(state),
    author: getJumboTextAuth(state),
    p: getJumboP(state),
    button: getGithubButton(state),
  };
}

export default connect(mapStateToProps)(JumboMainText);

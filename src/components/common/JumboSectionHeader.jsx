import React, { useEffect } from 'react';
import { SectionHeader, JumboHeader } from './typography';
import styled, { css } from 'styled-components';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Wrapper = styled.div`
  ${(p) =>
    p.projects
      ? css`
          background-color: #fff;
          margin: 0px !important;
          width: 30%;
          z-index: 1000;
        `
      : css``}
  padding:20px 0px;
  height: 60px;
  position: relative;
  margin: 5px 5px 30px 5px;
`;
const Header = styled(SectionHeader)`
  @media (max-width: 992px) {
    position: absolute;
    left: 7px;
    top: 20px;
  }
  position: absolute;
  left: 7px;
  top: 30px;
`;
const Jumbo = styled(JumboHeader)`
  @media (max-width: 992px) {
    font-size: 50px;
    margin: 0px;
    padding: 0px;
    position: absolute;
    top: 0px;
  }
  height: 60px;
  position: absolute;
  top: 0px;
`;

export default function JumboSectionHeader({ ...props }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Wrapper {...props}>
      <div>
        <Jumbo {...props} data-aos='zoom-in'>
          {props.children}
        </Jumbo>
        <Header {...props}>{props.children}</Header>
      </div>
    </Wrapper>
  );
}

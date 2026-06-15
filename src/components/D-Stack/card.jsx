import '../../../node_modules/aos/dist/aos.css';

import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

import AOS from 'aos';

const Wrapper = styled.div`
  margin: 5px;
  height: 100px;
  width: 100px;
  box-shadow:
    0px 8px 10px rgba(0, 0, 0, 0.14),
    0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 5px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 10px;
  padding: 1px;
`;
const Text = styled.p`
  font-size: 16px;
`;
const Img = styled.img`
  /* @media (max-width: 700px) {
    ${(p) =>
    p.styled
      ? css`
          width: 80px;
          height: 60px;
        `
      : css`
          width: 100px;
          height: 80px;
        `};
  } */
  width: 100%;
  height: 70%;
  object-fit: scale-down;
`;
const Link = styled.a`
  &:hover {
    text-decoration: none;
  }
`;

export default function MiniCard(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Link href={props.href} target='_blank' data-aos='fade'>
      <Wrapper>
        <Text>{props.title}</Text>
        <Img styled={props.styled} src={props.image}></Img>
      </Wrapper>
    </Link>
  );
}

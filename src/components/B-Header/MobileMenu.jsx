import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import dropdown, {
  ReactComponent as DropdownIconSvg,
} from 'img/icon/dropdown.svg';
import { Menu } from 'config/headerMenu.config';
import 'aos/dist/aos.css';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Wrapper = styled.div``;
const BurgerWrapper = styled.div`
  padding: 15px;
`;
const LogoHeader = styled.p`
  font-family: 'Ubuntu-Medium';
  color: #17293f;
  font-size: 28px;
  font-weight: 500;
  margin: auto 50px auto auto;
`;

const MobilTopDiv = styled.div`
  display: none;
  @media (max-width: 992px) {
    margin: 0px;
    height: 70px;
    background-color: #fff;
    display: flex;
    width: 100%;
  }
`;
const MobilNav = styled.div`
  ${(p) =>
    p.toggle
      ? css`
          display: block;
        `
      : css`
          display: none;
        `};
  @media (max-width: 992px) {
    margin: 0px;
    background-color: #ffffff;
  }
`;
const LinkContainer = styled.div`
  padding-bottom: 20px;
  margin: 10px auto 0px 86px;
  height: auto;
  @media (min-width: 992px) {
    display: none;
  }
`;

const MobileLink = styled.a`
  &:hover {
    color: #353535;
    text-decoration: none;
    opacity: 0.7;
  }
  margin: 5px 0px;
  position: relative;
  color: #353535;
  display: block;
`;
const DropDowIcon = styled(DropdownIconSvg)`
  position: absolute;
  left: 85px;
  top: 10px;
`;
const DropDown = styled(MobileLink)`
  margin-left: 50px;
  padding: 0px;
`;
const MobileText = styled.p`
  color: #444444;
  display: inline-block;
  margin: 6px auto 6px 48px;
  @media (min-width: 992px) {
    display: none;
  }
`;
export default function MobileMenu() {
  const [toggle, setToggle] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const MOBILE_HEADER_OFFSET = 0;

  function click() {
    setToggle((p) => !p);
  }

  function handleMouseHover() {
    setMouseOver((mouseOver) => !mouseOver);
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top =
        el.getBoundingClientRect().top + window.scrollY - MOBILE_HEADER_OFFSET;
      window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
    }
  };

  const closeMenuThenScroll = (id) => {
    setToggle(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToSection(id);
      });
    });
  };

  const handleNavClick = (event, item) => {
    if (item?.section) {
      event.preventDefault();
      closeMenuThenScroll(item.section);
      return;
    }

    if (item?.href?.startsWith('#')) {
      event.preventDefault();
      closeMenuThenScroll(item.href.replace('#', ''));
      return;
    }

    setToggle(false);
  };

  const handleReactDropdownClick = (event, item) => {
    if (!item?.react?.href) {
      return;
    }

    event.preventDefault();
    closeMenuThenScroll(item.react.href);
  };

  return (
    <Wrapper>
      <MobilTopDiv>
        <BurgerWrapper>
          <IconButton
            onClick={click}
            disableRipple
            sx={{
              color: '#17293f',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            {toggle ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </BurgerWrapper>
        <LogoHeader>pavdev</LogoHeader>
      </MobilTopDiv>

      <MobilNav toggle={toggle}>
        <MobileText>PAWEL SIWEK PORTFOLIO</MobileText>
        <LinkContainer>
          {Menu.map((item, i) => (
            <MobileLink
              onMouseEnter={item.react ? handleMouseHover : null}
              onMouseLeave={item.react ? handleMouseHover : null}
              key={i}
              href={item.href || `#${item.section || ''}`}
              target={item.target ? item.target : ''}
              onClick={(event) => handleNavClick(event, item)}
            >
              {item.title}
              <SlideDown></SlideDown>
            </MobileLink>
          ))}
        </LinkContainer>
      </MobilNav>
    </Wrapper>
  );
}

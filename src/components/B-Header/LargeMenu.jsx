import React from 'react';
import 'react-slidedown/lib/slidedown.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMenu, getLang } from 'selectors/pageContent.selector';
import LangSwitch from 'components/B-Header/LangSwitch';

const Wrapper = styled.div`
  display: flex;
  height: 110px;
  width: 100%;
`;
const InnerMainNav = styled.div`
  position: relative;
  display: flex;
  margin: 55px 0px 0px auto;
  width: ${(p) => (p.EngLang ? 574 : 671)}px;
`;
const LangWrapper = styled.div`
  display: flex;
  z-index: 2500;
  position: absolute;
  top: -50px;
  right: 23px;
`;
const MainLogo = styled.p`
  display: inline-block;
  margin: 55px auto auto 35px;
  font-family: 'Ubuntu-Medium';
  color: #fff;
  font-size: 35px;
  font-weight: 500;
`;
const Link = styled.a`
  cursor: pointer;
  position: relative;
  font-size: 18px;
  color: #fff;
  text-transform: capitalize;
  margin-right: 25px;
  font-weight: 700;
  &:hover {
    text-decoration: none;
    color: #cdcdcd;
  }
`;

function MainLarge({ ...props }) {
  function getLangMenu(obj) {
    let PolishTitle = obj.PolishLang ? obj.PolishLang.title : obj.title;
    return props.EngLang ? obj.title : PolishTitle;
  }

  const smoothScrollTo = (targetY, duration = 500) => {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let start;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const percent = Math.min(time / duration, 1);

      window.scrollTo(0, startY + diff * percent);

      if (time < duration) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(top, 600);
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <Wrapper>
      <MainLogo>pavdev</MainLogo>
      <InnerMainNav EngLang={props.EngLang}>
        <LangWrapper>
          <LangSwitch></LangSwitch>
        </LangWrapper>
        {props.menu.map((item, i) => {
          return item.section ? (
            <Link key={i} onClick={() => scrollToSection(item.section)}>
              {getLangMenu(item)}
            </Link>
          ) : (
            <Link
              key={i}
              href={item.href}
              onClick={() => scrollToSection(item.href)}
              target={item.target ? item.target : ''}
            >
              {getLangMenu(item)}
            </Link>
          );
        })}
      </InnerMainNav>
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    menu: getMenu(state),
    EngLang: getLang(state),
  };
};

export default connect(mapStateToProps)(MainLarge);

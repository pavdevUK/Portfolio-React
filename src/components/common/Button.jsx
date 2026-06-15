import styled, { css } from 'styled-components';

const Button = styled.div`
  margin: ${(p) => (p.margin ? css`p.margin` : css``)};
  font-size: 16px;
  box-shadow:
    0px 4px 5px rgba(0, 0, 0, 0.14),
    0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
  height: 33px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  //mobile size
  @media (max-width: 700px) {
    font-size: 15px;
  }
  @media (min-width: 700px) {
    height: ${(p) => (p.height ? p.height : '30px')};
    width: ${(p) => (p.width ? p.width : '110px')};
  }
  width: 110px;

  //light theme
  ${(p) =>
    p.light
      ? css`
          background-color: #fff;
          border: 1px solid #c5c7ca;
          color: #17293f;
        `
      : css`
          background-color: #17293f;
          border: 1px solid white;
          color: #fff;
        `}

  //hover transition for transform and background-color
&:hover {
    cursor: pointer;
    text-decoration: none;
    border: 2px solid #fff;
    ${(p) =>
      p.light
        ? css`
            background-color: #17293f;
            border: 1px solid #17293f;
            color: #fff;
            transition: background-color 0.2s linear;
          `
        : css``}
  }
  ${(p) =>
    p.contact
      ? css`
          margin-bottom: 15px;
        `
      : css``}
`;
export default Button;

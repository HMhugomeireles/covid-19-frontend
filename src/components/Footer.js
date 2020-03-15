import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 80px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = props => {
  return (
    <FooterContainer>
      <p>{props.children}</p>
    </FooterContainer>
  );
};

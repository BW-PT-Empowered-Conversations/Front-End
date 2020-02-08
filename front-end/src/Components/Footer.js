import React from "react";
import styled from "styled-components";

function Footer(props) {
  const ParaStyle = styled.p`
    display: flex;
    justify-content: center;
    text-align: center;
    color: grey;
    font-size: 1.2rem;
  `;

  return <ParaStyle>Empowered Conversation - 2020</ParaStyle>;
}

export default Footer;
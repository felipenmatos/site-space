import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import iconPath from "../../assets/Header/iconPath.svg";

const Header = () => {
  return (
    <Container>
      <Icon src={iconPath} />
      <Line />
      <ContainerHeader>
        <NavLink to="/" activeStyle>
          00 HOME
        </NavLink>
        <NavLink to="/Destination" activeStyle>
          01 DESTINATION
        </NavLink>
        <NavLink to="/" activeStyle>
          02 CREW
        </NavLink>
        <NavLink to="/" activeStyle>
          03 TECHNOLOGY
        </NavLink>
      </ContainerHeader>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2%;
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
  margin-left: 40px;
`;

const Line = styled.div`
  width: 30%;
  height: 1px;
  background: #484b54;
  left: 15%;
  position: absolute;
  z-index: 1;

  @media screen and (min-width: 1400px) {
    width: 32%;
  }

  @media screen and (min-width: 1500px) {
    width: 35%;
  }

  @media screen and (min-width: 1700px) {
    width: 36%;
  }

  @media screen and (min-width: 1800px) {
    width: 39%;
  }
`;

const ContainerHeader = styled.div`
  width: 730px;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-itens: center;
  position: absolute;
  right: 0;
  margin-left: 37%;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);

  @media screen and (min-width: 1400px) {
    width: 780px;
  }

  @media screen and (min-width: 1500px) {
    width: 830px;
  }

  @media screen and (min-width: 1700px) {
    width: 860px;
  }

  @media screen and (min-width: 1800px) {
    width: 920px;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  line-height: 19px;
  letter-spacing: 2.7px;
  text-decoration: none;
  &.active {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }
`;

export default Header;

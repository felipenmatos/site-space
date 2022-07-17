import React from "react";
import styled from "styled-components";
import background from "../assets/Home/background-home-desktop.jpg";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <Container>
      <Header />
      <Body>
        <ContainerText>
          <Subtitle>SO, YOU WANT TO TRAVEL TO</Subtitle>
          <Title>SPACE</Title>
          <Text>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Text>
        </ContainerText>
        <ButtonExplore>Explore</ButtonExplore>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: 100%;
  backgound-repeat: no-repeat;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 5%;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 382px;
`;

const Subtitle = styled.h2`
  color: #d0d6f9;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 34px;
`;

const Title = styled.h1`
  color: #d0d6f9;
  font-family: "Barlow";
  font-style: normal;
`;

const Text = styled.p`
  color: #d0d6f9;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

const ButtonExplore = styled.button`
  width: 274px;
  height: 274px;
  margin-top: -120px;
  border-radius: 100%;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  color: #0b0d17;
  cursor: pointer;
  transition: all 0.5s;

  :hover {
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  }
`;

export default Home;

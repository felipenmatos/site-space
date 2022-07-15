import React from "react";
import styled from "styled-components";
import background from "../assets/Home/background-home-desktop.jpg";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <Container>
      <Header />
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

export default Home;

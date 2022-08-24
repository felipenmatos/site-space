import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import background from "../assets/Tecnhology/background.jpg";
//import photo1 from "../assets/Tecnhology/photo1.jpg";

const Technology = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Row>
          <ContainerDescription>
            <RowTitle>
              <Number>03</Number>
              <Title>SPACE LAUNCH 101</Title>
            </RowTitle>
            <RowBodyDescription>
              <ColumnButtons>
                <ButtonSelect>1</ButtonSelect>
                <Button>2</Button>
                <Button>3</Button>
              </ColumnButtons>
              <ColumnText>
                <Subtitle>THE TERMINOLOGY…</Subtitle>
                <Name>LAUNCH VEHICLE</Name>
                <Text>
                  A launch vehicle or carrier rocket is a rocket-propelled
                  vehicle used to carry a payload from Earth's surface to space,
                  usually to Earth orbit or beyond. Our WEB-X carrier rocket is
                  the most powerful in operation. Standing 150 metres tall, it's
                  quite an awe-inspiring sight on the launch pad!
                </Text>
              </ColumnText>
            </RowBodyDescription>
          </ContainerDescription>
          <Photo />
        </Row>
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
  height: 30vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5%;
`;

const Row = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContainerDescription = styled.div`
  width: 500px;
  height: 500px;
  margin-top: 60px;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
`;

const RowTitle = styled.div``;

const Number = styled.p``;

const Title = styled.p``;

const RowBodyDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ColumnButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonSelect = styled.button`
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  letter-spacing: 2px;
  color: #0b0d17;
  border-radius: 100%;
  cursor: pointer;
`;

const Button = styled.button``;

const ColumnText = styled.p``;

const Subtitle = styled.p``;

const Name = styled.h1``;

const Text = styled.p``;

const Photo = styled.img``;

export default Technology;

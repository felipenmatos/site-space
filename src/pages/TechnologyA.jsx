import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import background from "../assets/Tecnhology/background.jpg";
import photo1 from "../assets/Tecnhology/photo1.jpg";
import photo2 from "../assets/Tecnhology/photo2.jpg";
import photo3 from "../assets/Tecnhology/photo3.jpg";

const Technology = () => {
  const [spaceLauch, setSpaceLauch] = useState(true);
  const [spaceport, setSpaceport] = useState(false);
  const [spaceCapsule, setSpaceCapsule] = useState(false);

  return (
    <Container>
      <Header />
      <Body>
        {spaceLauch && (
          <>
            <Row>
              <ContainerDescription>
                <RowTitle>
                  <Number>03</Number>
                  <Title>SPACE LAUNCH 101</Title>
                </RowTitle>
                <RowBodyDescription>
                  <ColumnButtons>
                    <ButtonSelect>1</ButtonSelect>
                    <Button
                      onClick={() => {
                        setSpaceLauch(false);
                        setSpaceport(true);
                        setSpaceCapsule(false);
                      }}
                    >
                      2
                    </Button>
                    <Button
                      onClick={() => {
                        setSpaceLauch(false);
                        setSpaceport(false);
                        setSpaceCapsule(true);
                      }}
                    >
                      3
                    </Button>
                  </ColumnButtons>
                  <ColumnText>
                    <Subtitle>THE TERMINOLOGY…</Subtitle>
                    <Name>Launch Vehicle</Name>
                    <Text>
                      A launch vehicle or carrier rocket is a rocket-propelled
                      vehicle used to carry a payload from Earth's surface to
                      space, usually to Earth orbit or beyond. Our WEB-X carrier
                      rocket is the most powerful in operation. Standing 150
                      metres tall, it's quite an awe-inspiring sight on the
                      launch pad!
                    </Text>
                  </ColumnText>
                </RowBodyDescription>
              </ContainerDescription>
              <Photo src={photo1} />
            </Row>
          </>
        )}
        {spaceport && (
          <>
            <Row>
              <ContainerDescription>
                <RowTitle>
                  <Number>03</Number>
                  <Title>SPACE LAUNCH 101</Title>
                </RowTitle>
                <RowBodyDescription>
                  <ColumnButtons>
                    <Button
                      onClick={() => {
                        setSpaceLauch(true);
                        setSpaceport(false);
                        setSpaceCapsule(false);
                      }}
                    >
                      1
                    </Button>
                    <ButtonSelect>2</ButtonSelect>
                    <Button
                      onClick={() => {
                        setSpaceLauch(false);
                        setSpaceport(false);
                        setSpaceCapsule(true);
                      }}
                    >
                      3
                    </Button>
                  </ColumnButtons>
                  <ColumnText>
                    <Subtitle>THE TERMINOLOGY…</Subtitle>
                    <Name>SPACEPORT</Name>
                    <Text>
                      A spaceport or cosmodrome is a site for launching (or
                      receiving) spacecraft, by analogy to the seaport for ships
                      or airport for aircraft. Based in the famous Cape
                      Canaveral, our spaceport is ideally situated to take
                      advantage of the Earth’s rotation for launch.
                    </Text>
                  </ColumnText>
                </RowBodyDescription>
              </ContainerDescription>
              <Photo src={photo2} />
            </Row>
          </>
        )}
        {spaceCapsule && (
          <Row>
            <ContainerDescription>
              <RowTitle>
                <Number>03</Number>
                <Title>SPACE LAUNCH 101</Title>
              </RowTitle>
              <RowBodyDescription>
                <ColumnButtons>
                  <Button
                    onClick={() => {
                      setSpaceLauch(true);
                      setSpaceport(false);
                      setSpaceCapsule(false);
                    }}
                  >
                    1
                  </Button>
                  <Button
                    onClick={() => {
                      setSpaceLauch(false);
                      setSpaceport(true);
                      setSpaceCapsule(false);
                    }}
                  >
                    2
                  </Button>
                  <ButtonSelect>3</ButtonSelect>
                </ColumnButtons>
                <ColumnText>
                  <Subtitle>THE TERMINOLOGY…</Subtitle>
                  <Name>SPACE CAPSULE</Name>
                  <Text>
                    A space capsule is an often-crewed spacecraft that uses a
                    blunt-body reentry capsule to reenter the Earth's atmosphere
                    without wings. Our capsule is where you'll spend your time
                    during the flight. It includes a space gym, cinema, and
                    plenty of other activities to keep you entertained.
                  </Text>
                </ColumnText>
              </RowBodyDescription>
            </ContainerDescription>
            <Photo src={photo3} />
          </Row>
        )}
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
  margin-top: 90px;
  margin-left: 15%;
  display: flex;
  flex-direction: column;
`;

const RowTitle = styled.div`
  margin-top: 45px;
  width: 330px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Number = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #4e5058;
`;

const Title = styled.p`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: #ffffff;
`;

const RowBodyDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
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
  border: 1px solid #ffffff;
  border-radius: 100%;
  cursor: pointer;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 80px;
  height: 80px;
  margin-top: 12px;
  background: transparent;
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
  border-radius: 100%;
  cursor: pointer;
  border: 1px solid #ffffff;
`;

const ColumnText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Subtitle = styled.p`
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: #d0d6f9;
`;

const Name = styled.h1`
  margin-top: -20px;
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 64px;
  color: #ffffff;
`;

const Text = styled.p`
  margin-top: -20px;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #d0d6f9;
`;

const Photo = styled.img`
  margin-top: 12%;
  width: 420px;
  height: 400px;
`;

export default Technology;

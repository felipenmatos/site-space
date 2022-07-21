import React, { useState } from "react";
import styled from "styled-components";
import background from "../assets/Destination/background.jpg";
import Header from "../components/Header/Header";
import imgMoon from "../assets/Destination/image-moon.png";
import imgMars from "../assets/Destination/image-mars.png";
import imgEuropa from "../assets/Destination/image-europa.png";
import imgTitan from "../assets/Destination/image-titan.png";

const Destination = () => {
  const [moon, setMoon] = useState(true);
  const [mars, setMars] = useState(false);
  const [europa, setEuropa] = useState(false);
  const [titan, setTitan] = useState(false);

  return (
    <Container>
      <Header />
      <Body>
        {moon ? (
          <>
            <ContainerPhoto>
              <Row>
                <TextNumber>01</TextNumber>
                <Text>PICK YOUR DESTINATION</Text>
              </Row>
              <PhotoPlanet src={imgMoon} />
            </ContainerPhoto>
            <ContainerStep>
              <RowButtons>
                <Button
                  onClick={() => {
                    setMoon(true);
                    setMars(false);
                    setEuropa(false);
                    setTitan(false);
                  }}
                >
                  MOON
                </Button>
                <Button
                  onClick={() => {
                    setMoon(false);
                    setMars(true);
                    setEuropa(false);
                    setTitan(false);
                  }}
                >
                  MARS
                </Button>
                <Button
                  onClick={() => {
                    setMoon(false);
                    setMars(false);
                    setEuropa(true);
                    setTitan(false);
                  }}
                >
                  EUROPA
                </Button>
                <Button
                  onClick={() => {
                    setMoon(false);
                    setMars(false);
                    setEuropa(false);
                    setTitan(true);
                  }}
                >
                  TITAN
                </Button>
              </RowButtons>
              <TextPlanet>
                <Title>MOON</Title>
                <Subtitle>
                  See our planet as you’ve never seen it before. A perfect
                  relaxing trip away to help regain perspective and come back
                  refreshed. While you’re there, take in some history by
                  visiting the Luna 2 and Apollo 11 landing sites.
                </Subtitle>
                <Line />
                <RowInformation>
                  <Column>
                    <TitleDistance>AVG. DISTANCE</TitleDistance>
                    <NumberDistance>384,400 km</NumberDistance>
                  </Column>
                  <ColumnDistance>
                    <TitleDistance>Est. travel time</TitleDistance>
                    <NumberDistance>3 DAYS</NumberDistance>
                  </ColumnDistance>
                </RowInformation>
              </TextPlanet>
            </ContainerStep>
          </>
        ) : (
          <></>
        )}
        {mars ? (
          <>
            <ContainerPhoto>
              <Row>
                <TextNumber>01</TextNumber>
                <Text>PICK YOUR DESTINATION</Text>
              </Row>
              <PhotoPlanet src={imgMars} />
            </ContainerPhoto>
            <ContainerStep>
              <RowButtons>
                <Button
                  onClick={() => {
                    setMoon(true);
                    setMars(false);
                    setEuropa(false);
                    setTitan(false);
                  }}
                >
                  MOON
                </Button>
                <Button
                  onClick={() => {
                    setMoon(false);
                    setMars(true);
                    setEuropa(false);
                    setTitan(false);
                  }}
                >
                  MARS
                </Button>
                <Button
                  onClick={() => {
                    setMoon(false);
                    setMars(false);
                    setEuropa(true);
                    setTitan(false);
                  }}
                >
                  EUROPA
                </Button>
                <Button
                  onClick={() => {
                    setMoon(false);
                    setMars(false);
                    setEuropa(false);
                    setTitan(true);
                  }}
                >
                  TITAN
                </Button>
              </RowButtons>
              <TextPlanet>
                <Title>MARS</Title>
                <Subtitle>
                  Don’t forget to pack your hiking boots. You’ll need them to
                  tackle Olympus Mons, the tallest planetary mountain in our
                  solar system. It’s two and a half times the size of Everest!
                </Subtitle>
                <Line />
                <RowInformation>
                  <Column>
                    <TitleDistance>AVG. DISTANCE</TitleDistance>
                    <NumberDistance>225 MIL. km</NumberDistance>
                  </Column>
                  <ColumnDistance>
                    <TitleDistance>Est. travel time</TitleDistance>
                    <NumberDistance>9 MONTHS</NumberDistance>
                  </ColumnDistance>
                </RowInformation>
              </TextPlanet>
            </ContainerStep>
          </>
        ) : (
          <></>
        )}
        {europa ? (
          <>
            <ContainerPhoto>
              <Row>
                <TextNumber>01</TextNumber>
                <Text>PICK YOUR DESTINATION</Text>
              </Row>
              <PhotoPlanet src={imgEuropa} />
            </ContainerPhoto>
            <ContainerStep>
              <RowButtons>
                <Button
                  onClick={() => {
                    setMoon(true);
                    setMars(false);
                    setEuropa(false);
                    setTitan(false);
                  }}
                >
                  MOON
                </Button>
                <Button
                  onClick={() => {
                    setMoon(false);
                    setMars(true);
                    setEuropa(false);
                    setTitan(false);
                  }}
                >
                  MARS
                </Button>
                <Button
                  onClick={() => {
                    setMoon(false);
                    setMars(false);
                    setEuropa(true);
                    setTitan(false);
                  }}
                >
                  EUROPA
                </Button>
                <Button
                  onClick={() => {
                    setMoon(false);
                    setMars(false);
                    setEuropa(false);
                    setTitan(true);
                  }}
                >
                  TITAN
                </Button>
              </RowButtons>
              <TextPlanet>
                <Title>EUROPA</Title>
                <Subtitle>
                  The smallest of the four Galilean moons orbiting Jupiter,
                  Europa is a winter lover’s dream. With an icy surface, it’s
                  perfect for a bit of ice skating, curling, hockey, or simple
                  relaxation in your snug wintery cabin.
                </Subtitle>
                <Line />
                <RowInformation>
                  <Column>
                    <TitleDistance>AVG. DISTANCE</TitleDistance>
                    <NumberDistance>628 MIL. km</NumberDistance>
                  </Column>
                  <ColumnDistance>
                    <TitleDistance>Est. travel time</TitleDistance>
                    <NumberDistance>3 YEARS</NumberDistance>
                  </ColumnDistance>
                </RowInformation>
              </TextPlanet>
            </ContainerStep>
          </>
        ) : (
          <></>
        )}
        {titan ? (
          <>
            <ContainerPhoto>
              <Row>
                <TextNumber>01</TextNumber>
                <Text>PICK YOUR DESTINATION</Text>
              </Row>
              <PhotoPlanet src={imgTitan} />
            </ContainerPhoto>
            <ContainerStep>
              <RowButtons>
                <Button
                  onClick={() => {
                    setMoon(true);
                    setMars(false);
                    setEuropa(false);
                    setTitan(false);
                  }}
                >
                  MOON
                </Button>
                <Button
                  onClick={() => {
                    setMoon(false);
                    setMars(true);
                    setEuropa(false);
                    setTitan(false);
                  }}
                >
                  MARS
                </Button>
                <Button
                  onClick={() => {
                    setMoon(false);
                    setMars(false);
                    setEuropa(true);
                    setTitan(false);
                  }}
                >
                  EUROPA
                </Button>
                <Button
                  onClick={() => {
                    setMoon(false);
                    setMars(false);
                    setEuropa(false);
                    setTitan(true);
                  }}
                >
                  TITAN
                </Button>
              </RowButtons>
              <TextPlanet>
                <Title>TITAN</Title>
                <Subtitle>
                  The only moon known to have a dense atmosphere other than
                  Earth, Titan is a home away from home (just a few hundred
                  degrees colder!). As a bonus, you get striking views of the
                  Rings of Saturn.
                </Subtitle>
                <Line />
                <RowInformation>
                  <Column>
                    <TitleDistance>AVG. DISTANCE</TitleDistance>
                    <NumberDistance>1.6 BIL. km</NumberDistance>
                  </Column>
                  <ColumnDistance>
                    <TitleDistance>Est. travel time</TitleDistance>
                    <NumberDistance>7 YEARS</NumberDistance>
                  </ColumnDistance>
                </RowInformation>
              </TextPlanet>
            </ContainerStep>
          </>
        ) : (
          <></>
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
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5%;
`;

const ContainerPhoto = styled.div`
  width: 382px;
  height: 100px;
  margin-top: -400px;
  display: flex;
  flex-direction: column;
`;

const ContainerStep = styled.div`
  width: 445px;
  height: 350px;
  display: flex;
  flex-direction: column;
`;

const TextNumber = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #4e5058;
`;

const Text = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  text-transform: uppercase;
  color: #ffffff;
`;

const PhotoPlanet = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 20px;
  margin-left: 80px;

  transition: all 0.5s;

  :hover {
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  }
`;

const RowButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: -20px;
`;

const TextPlanet = styled.p``;

const Title = styled.p`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  color: #ffffff;
`;

const Subtitle = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #d0d6f9;
  margin-top: -30px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 50px;
  background: #383b4b;
`;

const Row = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  align-itens: center;
  justify-content: space-evenly;
`;

const RowInformation = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleDistance = styled.p`
  font-family: "Barlo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #d0d6f9;
`;

const NumberDistance = styled.p`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #ffffff;
`;

const Button = styled.button`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: #ffffff;
  text-align: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ColumnDistance = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 79px;
`;

export default Destination;

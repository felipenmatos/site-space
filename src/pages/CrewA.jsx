import React, { useState } from "react";
import styled from "styled-components";
import background from "../assets/Crew/background.jpg";
import Header from "../components/Header/Header";
import imgDouglas from "../assets/Crew/image-douglas.png";
import imgMark from "../assets/Crew/image-mark.png";
import imgVictor from "../assets/Crew/image-victor.png";
import imgAnousheh from "../assets/Crew/image-anousheh.png";

const Crew = () => {
  const [commander, setCommander] = useState(true);
  const [missionEspecialist, setMissionEspecialist] = useState(false);
  const [pilot, setPilot] = useState(false);
  const [flight, setFlight] = useState(false);

  return (
    <Container>
      <Header />
      <Body>
        {commander && (
          <Row>
            <ContainerText>
              <Row>
                <Number>02</Number>
                <Title>MEET YOUR CREW</Title>
              </Row>
              <Column>
                <TitleProfile>Commander</TitleProfile>
                <Name>Douglas Hurley</Name>
                <Text>
                  Douglas Gerald Hurley is an American engineer, former Marine
                  Corps pilot and former NASA astronaut. He launched into space
                  for the third time as commander of Crew Dragon Demo-2.
                </Text>
                <RowButtons>
                  <ButtonSelect />
                  <Button
                    onClick={() => {
                      setCommander(false);
                      setMissionEspecialist(true);
                      setPilot(false);
                      setFlight(false);
                    }}
                  />
                  <Button
                    onClick={() => {
                      setCommander(false);
                      setMissionEspecialist(false);
                      setPilot(true);
                      setFlight(false);
                    }}
                  />
                  <Button
                    onClick={() => {
                      setCommander(false);
                      setMissionEspecialist(false);
                      setPilot(false);
                      setFlight(true);
                    }}
                  />
                </RowButtons>
              </Column>
            </ContainerText>
            <PhotoProfile src={imgDouglas} />
          </Row>
        )}
        {missionEspecialist && (
          <Row>
            <ContainerTextMark>
              <Row>
                <Number>02</Number>
                <Title>MEET YOUR CREW</Title>
              </Row>
              <Column>
                <TitleProfile>Mission Specialist </TitleProfile>
                <Name>Mark Shuttleworth</Name>
                <Text>
                  Mark Richard Shuttleworth is the founder and CEO of Canonical,
                  the company behind the Linux-based Ubuntu operating system.
                  Shuttleworth became the first South African to travel to space
                  as a space tourist.
                </Text>
                <RowButtons>
                  <Button
                    onClick={() => {
                      setCommander(true);
                      setMissionEspecialist(false);
                      setPilot(false);
                      setFlight(false);
                    }}
                  />
                  <ButtonSelect />
                  <Button
                    onClick={() => {
                      setCommander(false);
                      setMissionEspecialist(false);
                      setPilot(true);
                      setFlight(false);
                    }}
                  />
                  <Button
                    onClick={() => {
                      setCommander(false);
                      setMissionEspecialist(false);
                      setPilot(false);
                      setFlight(true);
                    }}
                  />
                </RowButtons>
              </Column>
            </ContainerTextMark>
            <PhotoProfileMark src={imgMark} />
          </Row>
        )}
        {pilot && (
          <Row>
            <ContainerTextVictor>
              <Row>
                <Number>02</Number>
                <Title>MEET YOUR CREW</Title>
              </Row>
              <Column>
                <TitleProfile>Pilotr</TitleProfile>
                <Name>Victor Glover</Name>
                <Text>
                  Pilot on the first operational flight of the SpaceX Crew
                  Dragon to the International Space Station. Glover is a
                  commander in the U.S. Navy where he pilots an F/A-18.He was a
                  crew member of Expedition 64.
                </Text>
                <RowButtons>
                  <Button
                    onClick={() => {
                      setCommander(true);
                      setMissionEspecialist(false);
                      setPilot(false);
                      setFlight(false);
                    }}
                  />
                  <Button
                    onClick={() => {
                      setCommander(false);
                      setMissionEspecialist(true);
                      setPilot(false);
                      setFlight(false);
                    }}
                  />
                  <ButtonSelect />
                  <Button
                    onClick={() => {
                      setCommander(false);
                      setMissionEspecialist(false);
                      setPilot(false);
                      setFlight(true);
                    }}
                  />
                </RowButtons>
              </Column>
            </ContainerTextVictor>
            <PhotoProfileVictor src={imgVictor} />
          </Row>
        )}
        {flight && (
          <Row>
            <ContainerText>
              <Row>
                <Number>02</Number>
                <Title>MEET YOUR CREW</Title>
              </Row>
              <Column>
                <TitleProfile>Flight Engineer</TitleProfile>
                <Name>Anousheh Ansari</Name>
                <Text>
                  Anousheh Ansari is an Iranian American engineer and co-founder
                  of Prodea Systems. Ansari was the fourth self-funded space
                  tourist, the first self-funded woman to fly to the ISS, and
                  the first Iranian in space.
                </Text>
                <RowButtons>
                  <Button
                    onClick={() => {
                      setCommander(true);
                      setMissionEspecialist(false);
                      setPilot(false);
                      setFlight(false);
                    }}
                  />
                  <Button
                    onClick={() => {
                      setCommander(false);
                      setMissionEspecialist(true);
                      setPilot(false);
                      setFlight(false);
                    }}
                  />
                  <Button
                    onClick={() => {
                      setCommander(false);
                      setMissionEspecialist(false);
                      setPilot(true);
                      setFlight(false);
                    }}
                  />
                  <ButtonSelect />
                </RowButtons>
              </Column>
            </ContainerText>
            <PhotoProfileAnousheh src={imgAnousheh} />
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
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const ContainerText = styled.div`
  width: 382px;
  height: 100px;
  margin-top: -55px;
  margin-left: -17%;
  display: flex;
  flex-direction: column;
`;

const ContainerTextMark = styled.div`
  width: 382px;
  height: 100px;
  margin-top: -55px;
  margin-left: -17%;
  display: flex;
  flex-direction: column;
`;

const ContainerTextVictor = styled.div`
  width: 382px;
  height: 100px;
  margin-top: -55px;
  margin-left: -17%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4%;
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
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  text-transform: uppercase;
  color: #ffffff;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const TitleProfile = styled.h1`
  margin-bottom: -20px;
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 37px;
  color: #55585e;
`;

const Name = styled.h2`
  margin-bottom: -20px;
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 64px;
  color: #ffffff;
`;

const Text = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #d0d6f9;
`;

const RowButtons = styled.div`
  margin-top: 10px;
  width: 132px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonSelect = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;

const Button = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #363841;
  border: none;
  cursor: pointer;
`;

const PhotoProfile = styled.img`
  width: 300px;
  height: 400px;
`;

const PhotoProfileVictor = styled.img`
  width: 300px;
  height: 350px;
  margin-top: 50px;
`;

const PhotoProfileMark = styled.img`
  width: 300px;
  height: 400px;
`;

const PhotoProfileAnousheh = styled.img`
  margin-left: -10px;
  width: 310px;
  height: 400px;
`;

export default Crew;

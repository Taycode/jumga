import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Clients from "./Clients";

function ClientsSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        />
        <Clients
          items={[
            {
              name: "Instagram",
              image: "https://uploads.divjoy.com/logo-instagram.svg",
              width: "150px",
            },
            {
              name: "Slack",
              image: "https://uploads.divjoy.com/logo-slack.svg",
              width: "135px",
            },
            {
              name: "Tinder",
              image: "https://uploads.divjoy.com/logo-tinder.svg",
              width: "90px",
            },
            {
              name: "Spotify",
              image: "https://uploads.divjoy.com/logo-spotify.svg",
              width: "135px",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default ClientsSection;

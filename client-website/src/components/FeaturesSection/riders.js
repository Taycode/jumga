import React from "react";
import Section from "../Section/index";
import { Container } from "react-bootstrap";
import SectionHeader from "../SectionHeader";
import Features from "../Features";
import { ridersFeaturesArray } from "./helper";

function FeaturesSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Features items={ridersFeaturesArray} />
      </Container>
    </Section>
  );
}

export default FeaturesSection;

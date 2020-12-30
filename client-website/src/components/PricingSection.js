import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Pricing from "./Pricing";

function PricingSection(props) {
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
        <Pricing
          buttonText="Choose"
          items={[
            {
              id: "starter",
              name: "Starter",
              price: "10",
              perks: [
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
                "Integer molestie lorem at massa",
              ],
            },
            {
              id: "pro",
              name: "Pro",
              price: "20",
              perks: [
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
                "Integer molestie lorem at massa",
                "Faucibus porta lacus fringilla vel",
                "Aenean sit amet erat nunc",
              ],
            },
            {
              id: "business",
              name: "Business",
              price: "50",
              perks: [
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
                "Integer molestie lorem at massa",
                "Faucibus porta lacus fringilla vel",
                "Aenean sit amet erat nunc",
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
              ],
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default PricingSection;

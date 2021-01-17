import React from "react";
import Section from "../Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "../SectionHeader";
import Testimonials from "../Testimonials";

function TestimonialsSection(props) {
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
        <Testimonials
          items={[
            {
              avatar: "https://randomuser.me/api/portraits/men/16.jpg",
              name: "Iyobosa Jefferson",
              testimonial:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae.",
              company: "Jeffa Stores (GH)",
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-5.jpeg",
              name: "Sarah Kline",
              testimonial:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
              company: "Get Fit (UK)",
            },
            {
              avatar: "https://randomuser.me/api/portraits/men/30.jpg",
              name: "Ajayi  Jeremiah",
              testimonial:
                "Lorem ipsum dolor sit amet,  aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!",
              company: "Jerrified (NG)",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default TestimonialsSection;

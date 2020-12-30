import React from "react";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import NewsletterSection from "../../components/NewsletterSection";
import { useRouter } from "../../util/router.js";

import headerImg from "../../assets/img/header-img.svg";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Start selling online now with Jumga store"
        subtitle="Set up your store in minutes and bring your brand to life."
        buttonText="Get Started"
        buttonColor="primary"
        image={headerImg}
        buttonOnClick={() => {
          router.push("/auth/register");
        }}
      />

      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      />
      <TestimonialsSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
      <NewsletterSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
    </>
  );
}

export default IndexPage;

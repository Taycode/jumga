import React from "react";
import FeaturesSection from "../../components/FeaturesSection/riders";
import HeroSection from "../../components/HeroSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import NewsletterSection from "../../components/NewsletterSection";
// import { useRouter } from "../../util/router.js";

import headerImg from "../../assets/img/rider-header.svg";
import { getAppRedirect } from "../../util/helper-functions";

function IndexPage(props) {
  // const router = useRouter();

  return (
    <>
      <HeroSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Work that puts you first."
        subtitle="Deliver when you want, make what you need."
        buttonText="Get Started"
        buttonColor="primary"
        image={headerImg}
        buttonOnClick={() => {
          window.location.replace(getAppRedirect("rider", "register"));
        }}
      />

      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Become a Rider"
        subtitle="Earn easy money, without any hassel."
      />
      <TestimonialsSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet some riders"
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
